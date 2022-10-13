import { Router } from 'express' 
import { check } from 'express-validator'
import { login } from '../controllers/auth';
import { validation } from '../middlewares/validation';


export const auth = Router();


auth.post('/login',
[
    check('email', 'The email is mandatory').isEmail(),
    check('password', 'The password is mandatory').notEmpty(),
    validation
]
, login );