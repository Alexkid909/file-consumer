import { Application } from "express";

const multer = require('multer');
const upload = multer( { dest: 'uploads/'} ).single('image-file');


module.exports = (app: Application, db: any) => {

    app.post('/uploads', upload, (req: any, res: any) => {
        console.log('req.body', req.body.filename);
        console.log('req.file', req.file);
        console.log('Done');
        res.send('Done');
    });

};
