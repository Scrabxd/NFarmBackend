import aws from 'aws-sdk';

import crypto from 'crypto';
import { promisify } from 'util';

const bucketName = "nfarm-bucket-test";


const randomBytes = promisify(crypto.randomBytes)

const s3 = new aws.S3({
    region:'us-west-1',
    accessKeyId:process.env.AWSAccessKeyId,
    secretAccessKey: process.env.AWSSecretKey,
    signatureVersion: 'v4'
})


export const generateURl = async ( ) => {

    const rawBytes = await randomBytes(16);
    const imageName = rawBytes.toString('hex')

    const params = ({
        Bucket: bucketName,
        key: imageName,
        expires:60
    })


    const uploadURL = await s3.getSignedUrlPromise('putObject', params);
    return uploadURL

}