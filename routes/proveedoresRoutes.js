"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const proveedoresController_1 = require("../controllers/proveedoresController");
const auth_1 = require("../middleware/auth");
class ProveedorRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/mostrarTodosProveedores/', auth_1.validarToken, proveedoresController_1.proveedoresController.mostrar_proveedores);
        this.router.get('/obtenerProveedor/:id', auth_1.validarToken, proveedoresController_1.proveedoresController.listOne);
        this.router.post('/insertarProveedor/', auth_1.validarToken, proveedoresController_1.proveedoresController.insertarProveedor);
        this.router.put('/actualizarProveedor/:id', auth_1.validarToken, proveedoresController_1.proveedoresController.actualizarProveedor);
        this.router.delete('/eliminarProveedor/:id', auth_1.validarToken, proveedoresController_1.proveedoresController.eliminarProveedor);
    }
}
const proveedorRoutes = new ProveedorRoutes();
exports.default = proveedorRoutes.router;
