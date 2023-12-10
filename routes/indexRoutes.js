"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class IndexRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/yonuevo/', (req, res) => res.send('Buen dia'));
        this.router.get('/Prueba/', (req, res) => res.send('Mi segunda Ruta'));
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;
