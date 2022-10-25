import jwt from 'jsonwebtoken';



interface idGiver {

    id: number
}


export const getIdUser = (req:any) => {

    const token = req.header( 'x-token' );

    const payload = jwt.verify( token, process.env.SecretKey );
    
    const { id } = payload as idGiver;



    return {
        id
    }
}