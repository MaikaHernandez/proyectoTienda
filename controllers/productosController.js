"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productosController = void 0;
const database_1 = __importDefault(require("../database")); //acceso a la base de datos
class ProductosController {
    mostrar_todos_productos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("YA ESTAMOS AQUI");
            const respuesta = yield database_1.default.query('SELECT * FROM productos');
            res.json(respuesta);
        });
    }
    listOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const respuesta = yield database_1.default.query('SELECT * FROM productos WHERE id_producto = ?', [id]);
            if (respuesta.length > 0) {
                res.json(respuesta[0]);
                return;
            }
            res.status(404).json({ 'mensaje': 'Producto no encontrado' });
        });
    }
    //aqui va el crud
    agregarProducto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //console.log(req.body)
            const resp = yield database_1.default.query("INSERT INTO productos set ?", [req.body]);
            res.json(resp);
            //res.json(null);
        });
    }
    actualizarProducto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            //console.log(req.params);
            console.log(id);
            const resp = yield database_1.default.query("UPDATE productos set ? WHERE id_producto = ?", [req.body, id]);
            res.json(resp);
            //res.json(null);
        });
    }
    eliminarProducto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const resp = yield database_1.default.query(`DELETE FROM productos WHERE id_producto = ${id}`);
            res.json(resp);
        });
    }
    listarProductosProvedor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const resp = yield database_1.default.query(`SELECT productos.nombre, proveedores.nombre FROM  productos LEFT JOIN proveedores on productos.proveedor_id = proveedores.id_provedorees WHERE productos.proveedor_id = ${id};`);
            res.json(resp);
            //if(resp.length>0){
            //    res.json(resp);
            //    return ;
            //}
            //res.status(404).json({'mensaje': 'No hay productos en ese rol'});
        });
    }
}
exports.productosController = new ProductosController();
