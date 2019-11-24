import { Application } from "express";

const fileRoutes = require('./file-routes');

module.exports = (app: Application, db: any) => {
    fileRoutes(app, db);
};