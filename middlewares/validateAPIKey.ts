import { NextFunction, Request, Response } from "express";


export const validateAPIKey = async(req: Request, res: Response, next: NextFunction) => {
    if(req.query.apiToken !== process.env.ApiKey){
        return res.json({
            msg:"APIKey Invalid!"
        })
    }
    next()

}