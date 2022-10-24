import { Router } from 'express' 
import { check } from 'express-validator'
import { addRanch } from '../controllers/ranch';
import { validateAPIKey } from '../middlewares';
import { validation } from '../middlewares/validation';



export const ranch  = Router();

ranch.post('/',

[
    validateAPIKey,
    check('city','The city is required').notEmpty(),
    check('street','The street is required').notEmpty(),
    check('phoneNumber','Please input a valid phonen number').notEmpty().isLength({min: 10}),
    check('postalCode','please input a valid Postal Code').notEmpty().isLength({min:5}),
    validation
]
, addRanch)
