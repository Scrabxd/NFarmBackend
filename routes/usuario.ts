import { Router } from 'express' 
import { delUser, getUser, getUsers, postUser, putUser } from '../controllers/usuarios';
import { check } from 'express-validator'
import { usuarioValid } from '../helpers/dbValidators';
import { validation } from '../middlewares/validation';
import { validateJWT } from '../middlewares/validateJWT';
const router = Router();


router.get('/',getUsers);

router.get('/:id',
[
    check('id','Inserte un ID').not().isEmpty(),
    check('id').custom(usuarioValid),
    validation
]
,getUser);

router.post('/',
[
    check('email','El correo electronico es incorrecto').isEmail(),
    check('password','la contraseña debe ser mayor a 6 letras').isLength({min:6}),
    validation
]
,postUser);

router.put('/:id',
[
    check('id','Inserte un ID').not().isEmpty(),
    check('id').custom(usuarioValid),
    validation
]
, putUser);

router.delete('/:id',
[   
    validateJWT,
    check('id','Inserte un ID').not().isEmpty(),
    check('id').custom(usuarioValid),
    validation
]
,delUser);




export default router;
