"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const salesController_1 = require("../controllers/salesController");
const auth_1 = require("../middleware/auth");
class SalesRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/mostrarVentas/', auth_1.validarToken, salesController_1.salesController.mostrar_ventas);
        this.router.get('/mostrarVentasUsuario/:id', auth_1.validarToken, salesController_1.salesController.listOne);
        this.router.post('/agregarVenta/', auth_1.validarToken, salesController_1.salesController.agregarVenta);
        /////////////////////////////////////////////7ventas_sales
        this.router.get('/mostrarProductosVendidos/', auth_1.validarToken, salesController_1.salesController.mostrar_productos_vendidos);
        this.router.get('/mostrarProductosPorVenta/:id', auth_1.validarToken, salesController_1.salesController.mostrarProductosPorVenta);
    }
}
const salesRoutes = new SalesRoutes();
exports.default = salesRoutes.router;
