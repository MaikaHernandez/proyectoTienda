"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usuariosRoutes_1 = __importDefault(require("./routes/usuariosRoutes"));
const productosRoutes_1 = __importDefault(require("./routes/productosRoutes"));
const proveedoresRoutes_1 = __importDefault(require("./routes/proveedoresRoutes"));
const tipousuariosRoutes_1 = __importDefault(require("./routes/tipousuariosRoutes"));
const inventarioRoutes_1 = __importDefault(require("./routes/inventarioRoutes"));
const carritoRoutes_1 = __importDefault(require("./routes/carritoRoutes"));
const salesRoutes_1 = __importDefault(require("./routes/salesRoutes"));
const swagger_json_1 = __importDefault(require("./swagger.json"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
        this.app.use('/documentacion', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_json_1.default));
    }
    config() {
        this.app.set('port', process.env.PORT || 8080);
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use('/api/usuarios', usuariosRoutes_1.default);
        this.app.use('/api/tUsuarios', tipousuariosRoutes_1.default);
        this.app.use('/api/productos', productosRoutes_1.default);
        this.app.use('/api/proveedores', proveedoresRoutes_1.default);
        this.app.use('/api/inventario', inventarioRoutes_1.default);
        this.app.use('/api/carrito', carritoRoutes_1.default);
        this.app.use('/api/ventas', salesRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('El servidor se esta ejecutando en el puerto', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
