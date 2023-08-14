import { Router } from 'express' 
import { check } from 'express-validator'
import { ValidationErrorItemOrigin } from 'sequelize';
import { getRanch } from '../controllers';
import { addRanch, deleteRanch, updateRanch } from '../controllers/ranch';
import { validateAPIKey } from '../middlewares';
import { validation } from '../middlewares/validation';



export const ranch  = Router();

ranch.get('/',
[
    // validateAPIKey,
    validation
]
,getRanch)

ranch.post('/',

[
    // validateAPIKey,
    check('city','The city is required').notEmpty(),
    check('street','The street is required').notEmpty(),
    check('phoneNumber','Please input a valid phonen number').notEmpty().isLength({min: 10}),
    check('postalCode','please input a valid Postal Code').notEmpty().isLength({min:5}),
    validation
]
, addRanch)


ranch.put('/',
[
    // validateAPIKey,
    validation
], updateRanch)

ranch.delete('/',
[
    // validateAPIKey,
    validation
    
], deleteRanch)