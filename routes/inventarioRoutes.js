"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const inventarioController_1 = require("../controllers/inventarioController");
const auth_1 = require("../middleware/auth");
class InventarioRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/mostrarInventario/', auth_1.validarToken, inventarioController_1.inventarioController.mostrar_inventario);
        this.router.get('/mostrarProductoInventario/:id', auth_1.validarToken, inventarioController_1.inventarioController.listOne);
        this.router.post('/agregarProductoInventario/', auth_1.validarToken, inventarioController_1.inventarioController.agregarAInventario);
        this.router.put('/actualizarProducto/:id', auth_1.validarToken, inventarioController_1.inventarioController.actualizarInventario);
    }
}
const inventarioRoutes = new InventarioRoutes();
exports.default = inventarioRoutes.router;
