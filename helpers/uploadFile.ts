

import Cloudinary from 'cloudinary'

import dotenv from 'dotenv'

dotenv.config()

Cloudinary.v2.config({
    cloud_name:process.env.CLOUDNAME,
    api_key: process.env.APIKEY,
    api_secret: process.env.APISECRET

})



export const imageUpload = async(req:any) =>{

    const {tempFilePath} = req.files.imageArray
    try{
        const {secure_url} = await Cloudinary.v2.uploader.upload(tempFilePath);
        
        return secure_url


    }catch(err){
        console.log(err);
        return err;
    }

}

export const cambiarFoto = async( fileName:string,req:any ) => {
    try{

        await Cloudinary.v2.uploader.destroy(fileName);
        
        const { tempFilePath } = req.files.file

        const {secure_url} = await Cloudinary.v2.uploader.upload(tempFilePath);

        return secure_url

    }catch(err){
        console.log(err)
        return err
    }
}

export const multiplePhoto = async(req:any) => {

    const files = req.files.imageArray;
    const fileKeys = Object.keys(files);

    try{
        const results = await Promise.all(fileKeys.map(async (key) => {
            const file = files[key];

            const result = await Cloudinary.v2.uploader.upload(file.tempFilePath);
            
            return result
        }))


        const urls = results.map( result => result.secure_url)

        return [urls]

    }catch(err){
        console.log(err);
        return err;
    }
}




