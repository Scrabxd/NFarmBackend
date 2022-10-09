import {validationResult} from 'express-validator';
import { Response,Request,NextFunction } from 'express';


export const validation = (req:Request, res:Response,next:NextFunction) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json(errors)
    }

    next();
}