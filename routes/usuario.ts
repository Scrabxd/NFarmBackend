import { Router } from 'express' 
import { delUser, getUser, getUsers, postUser, putUser } from '../controllers/usuarios';
import { check, checkSchema } from 'express-validator'
import { usuarioValid } from '../helpers/dbValidators';
import { validation } from '../middlewares/validation';
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
    check('correo','El correo electronico es incorrecto').isEmail(),
    check('contraseña','la contraseña debe ser mayor a 6 letras').isLength({min:6}),
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
    check('id','Inserte un ID').not().isEmpty(),
    check('id').custom(usuarioValid),
    validation
]
,delUser);




export default router;
