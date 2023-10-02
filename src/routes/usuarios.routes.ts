import { Router } from "express";
import {  crearUsuario, getAllUsuarios, getConditional, getFields, getLimit, getUsuarios } from "../controllers/usuarios.controller";

const usuariosRoute = Router();
usuariosRoute.get("/usuarios", getAllUsuarios);
usuariosRoute.get("/usuariosEdad", getUsuarios);
usuariosRoute.get("/edad", getConditional);
usuariosRoute.get("/field", getFields);
usuariosRoute.get("/userLimit", getLimit);
usuariosRoute.post("/usuarios", crearUsuario);


export default usuariosRoute;
