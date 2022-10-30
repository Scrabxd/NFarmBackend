import { Router } from 'express' 

import { validateAPIKey } from '../middlewares';
import { validation } from '../middlewares/validation';

import { uploadManager } from '../controllers/upload';

const upload = Router();



upload.get('/' ,[
    validateAPIKey,
    validation
],uploadManager)


export default upload;