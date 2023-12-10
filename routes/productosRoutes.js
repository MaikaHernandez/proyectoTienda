"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productosController_1 = require("../controllers/productosController");
const auth_1 = require("../middleware/auth");
class ProductosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/mostrarTodosProductos/', auth_1.validarToken, productosController_1.productosController.mostrar_todos_productos);
        this.router.get('/obtenerProducto/:id', auth_1.validarToken, productosController_1.productosController.listOne);
        this.router.post('/agregarProducto/', auth_1.validarToken, productosController_1.productosController.agregarProducto);
        this.router.put('/actualizarProducto/:id', auth_1.validarToken, productosController_1.productosController.actualizarProducto);
        this.router.delete('/eliminarProducto/:id', auth_1.validarToken, productosController_1.productosController.eliminarProducto);
        this.router.get('/listarProductosProvedor/:id', auth_1.validarToken, productosController_1.productosController.listarProductosProvedor);
    }
}
const productosRoutes = new ProductosRoutes();
exports.default = productosRoutes.router;
