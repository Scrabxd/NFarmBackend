import { Router } from 'express' 
import { check } from 'express-validator'
import { appendFile } from 'fs';
import { addRestaurant } from '../controllers';
import { validateAPIKey } from '../middlewares';
import { validation } from '../middlewares/validation';



export const restaurant = Router();

restaurant.post('/',

[
    validateAPIKey, 
]
, addRestaurant)
