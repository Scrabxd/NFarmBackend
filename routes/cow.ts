import { Router } from 'express' 
import { check } from 'express-validator'
import { addCow, deleteCow, updateCow } from '../controllers/cow';
import { getCows } from '../controllers';
import { validateAPIKey } from '../middlewares';
import { validation } from '../middlewares/validation';



const cow  = Router();

cow.post('/',

[
    // validateAPIKey,
    check('breed','There must be a breed').notEmpty(),
    check('name','There must be a name').notEmpty(),
    check('weight','Input a weight').isNumeric().notEmpty(),
    validation
]
, addCow)


cow.get( '/' , 
[
    // validateAPIKey,
    validation
]
, getCows)

cow.put('/',
[
    // validateAPIKey,
    validation
], updateCow)

cow.delete('/',
[
    // validateAPIKey,
    validation
],deleteCow)


export default cow;