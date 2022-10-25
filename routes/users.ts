import { Router } from 'express' 
import { delUser, getUser, getUsers, postUser, putUser } from '../controllers/users';
import { check } from 'express-validator'
import { usuarioValid } from '../helpers/dbValidators';
import { validation } from '../middlewares/validation';
import { validateJWT } from '../middlewares/validateJWT';
import { validateAPIKey } from '../middlewares';

const router = Router();


router.get('/',
[
    validateAPIKey,
    validation
],
getUsers);


router.get('/',
[
    validateAPIKey,
    check('id','Insert an ID').not().isEmpty(),
    check('id').custom(usuarioValid),
    validation
]
,getUser);

router.post('/',
[
    validateAPIKey,
    check('email','The email is incorrect').isEmail(),
    check('password','The password must be longer that 6 characters').isLength({min:6}),
    check('rfc','Invalid RFC').isLength({min:12}),
    validation
]
,postUser);

router.put('/',
[
    validateAPIKey,
    check('id','Insert an ID').not().isEmpty(),
    check('id').custom(usuarioValid),
    validation
]
, putUser);

router.delete('/',
[   
    validateAPIKey,
    validateJWT,
    validation
]
,delUser);




export default router;
