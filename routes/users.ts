import { Router } from 'express' 
import { delUser, getUser, getUsers, postUser, putUser } from '../controllers/users';
import { check } from 'express-validator'
import { usuarioValid } from '../helpers/dbValidators';
import { validation } from '../middlewares/validation';
import { validateJWT } from '../middlewares/validateJWT';
const router = Router();


router.get('/',getUsers);


router.get('/:id',
[
    check('id','Insert an ID').not().isEmpty(),
    check('id').custom(usuarioValid),
    validation
]
,getUser);

router.post('/',
[
    check('email','The email is incorrect').isEmail(),
    check('password','The password must be longer that 6 characters').isLength({min:6}),
    check('rfc','Invalid RFC').isLength({min:12}),
    validation
]
,postUser);

router.put('/:id',
[
    check('id','Insert an ID').not().isEmpty(),
    check('id').custom(usuarioValid),
    validation
]
, putUser);

router.delete('/:id',
[   
    validateJWT,
    check('id','Insert an ID').not().isEmpty(),
    check('id').custom(usuarioValid),
    validation
]
,delUser);




export default router;
