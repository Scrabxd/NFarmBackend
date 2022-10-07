import fs from 'fs';

import qrCode, { QRCodeSegment } from 'qrcode';

const qrGenerator = async  (url:string = 'localhost:4000' ) => {
    const qr = await qrCode.toDataURL(url);

    const htmlContent = `
    <div style="display:flex; justify-content:center; align-items:center;">
    <h2> QR GENERADO </h2> 
    <img src="${qr}">
    </div>
    
    `;

    fs.writeFile('./public/index.html',`${htmlContent}`, () => {})
    



}



export default qrGenerator;

