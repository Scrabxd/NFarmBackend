import { Router } from 'express' 
import { check } from 'express-validator'
import { addCow } from '../controllers/cow';
import { validateAPIKey } from '../middlewares';
import { validation } from '../middlewares/validation';



const cow  = Router();

cow.post('/',

[
    validateAPIKey,
    validation
]
, addCow)



export default cow;