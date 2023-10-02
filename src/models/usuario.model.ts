import mongose, {Document, Schema} from "mongoose";

interface UsuarioModel extends Document{
    nombre: string;
    correo:string;
    edad: number;
}

const usuarioSchema = new Schema<UsuarioModel>({
    nombre:String,
    correo: String,
    edad: Number,
})

export default mongose.model<UsuarioModel>('Usuario', usuarioSchema);

