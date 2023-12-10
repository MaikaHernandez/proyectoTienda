"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const carritoController_1 = require("../controllers/carritoController");
const auth_1 = require("../middleware/auth");
class InventarioRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/mostrarTodosCarritos/', auth_1.validarToken, carritoController_1.carritoController.mostrar_carritos);
        this.router.get('/mostrarCarritoUsuario/:id', auth_1.validarToken, carritoController_1.carritoController.listOne);
        this.router.post('/agregarACarrito/', auth_1.validarToken, carritoController_1.carritoController.agregarACarrito);
        this.router.delete('/eliminarProductoDeCarrito/:id_usuario/:id_producto', auth_1.validarToken, carritoController_1.carritoController.eliminarProductoCarrito);
    }
}
const inventarioRoutes = new InventarioRoutes();
exports.default = inventarioRoutes.router;
