import { Router } from 'express' 

import { validateAPIKey } from '../middlewares';
import { validation } from '../middlewares/validation';
import { uploadFiles, getImage } from '../controllers/upload';
import { fileCheck } from '../middlewares/fileCheck';


const upload = Router();


upload.post('/',
[    
    validateAPIKey,
    validation
],uploadFiles)


upload.get('/',
[
    validateAPIKey,
    validation
], getImage)


export default upload;