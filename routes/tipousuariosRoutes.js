"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tipousuariosController_1 = require("../controllers/tipousuariosController");
const auth_1 = require("../middleware/auth");
class TipoUsuariosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/mostrarTodosTipos/', auth_1.validarToken, tipousuariosController_1.tipoUsuariosController.mostrar_todos_tipos);
        this.router.get('/obtenerTipo/:id', auth_1.validarToken, tipousuariosController_1.tipoUsuariosController.listOne);
        this.router.post('/crearTipo/', auth_1.validarToken, tipousuariosController_1.tipoUsuariosController.createTipo);
        this.router.put('/actualizarTipo/:id', auth_1.validarToken, tipousuariosController_1.tipoUsuariosController.actualizarTipo);
        this.router.delete('/eliminarTipo/:id', auth_1.validarToken, tipousuariosController_1.tipoUsuariosController.eliminarTipo);
    }
}
const tipoUsuariosRoutes = new TipoUsuariosRoutes();
exports.default = tipoUsuariosRoutes.router;
