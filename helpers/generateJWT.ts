import jwt from 'jsonwebtoken';


export const generateJWT = (id:number) => {


    return new Promise( (resolve,reject,)  => {

        const payload = { id };
        // In order to allow the ENV variables to work, we need to add the global.d.ts file and the configuration in the TSCONFIG, the one that is named typeRoots.
        jwt.sign(payload, process.env.SecretKey , {
            expiresIn:'24h'
        },(err,token) => {
            if(err){
                console.log(err)
                reject('Could not generate the token')
            }else{
                resolve(token);
            }
        })


    })
}