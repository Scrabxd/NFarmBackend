import { NextFunction } from 'express';
import { Request, Response } from 'express';


export const fileCheck = (req : any, res: Response, next: NextFunction) => {
    if( !req.files || Object.keys( req.files ).length === 0) {
    res.status(400).json({ msg: 'No files to upload '});
        return;
    }

    next();
}