import path from 'path';
import { v4 as uuidv4 } from 'uuid';

interface file {
    file: image

}

interface image {
    name:string,
    tempFilePath:string,
    mv:Function
}


export const uploadFile = ( files:file , extensionsValid: string[] = ['png','jpeg','jpg','gif'], folder: string = '' ) => {

    return new Promise  ( ( resolve, reject ) => {

        const { file } = files;

        const cutName = file.name.split('.');
        const extension = cutName[ cutName.length - 1];


        if(!extensionsValid.includes(extension)){
            return reject (`The extension ${ extension } is not a valid one, Only ${extensionsValid}`);
        }


        const fileNameTemp  = `${uuidv4()} . ${ extension }`;
        const uploadPath = path.join( __dirname , '../uploads/' , folder , fileNameTemp);

        file.mv( uploadPath, (err:Error) => {
            if(err){
                reject(err);
            }
            resolve( fileNameTemp );
        });

        
    });

}

