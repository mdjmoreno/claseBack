import { Request, Response } from 'express';
import Usuario from "../models/usuario.model";



export const getAllUsuarios = async(req: Request, res: Response) => {
    try{
        const usuarios = await Usuario.find();
        res.json(usuarios);
    }catch(error){
        res.status(500).json({ error: "Error de usuarios"  });
    }
  
  };

  export const getUsuarios = async(req: Request, res: Response) => {
    try{
        const usuarios = await Usuario.find({edad:25});
        res.json(usuarios);
    }catch(error){
        res.status(500).json({ error: "Error de usuarios"  });
    }
  
  };

  export const getConditional = async(req: Request, res: Response) => {
    try{
        const usuarios = await Usuario.find({edad:{$gt:30}});
        res.json(usuarios);
    }catch(error){
        res.status(500).json({ error: "Error de usuarios"  });
    }
  
  };

  export const getFields = async(req: Request, res: Response) => {
    try{
        const usuarios = await Usuario.find({},"nombre");
        res.json(usuarios);
    }catch(error){
        res.status(500).json({ error: "Error de usuarios"  });
    }
  
  };

  export const getLimit = async(req: Request, res: Response) => {
    try{
        const usuarios = await Usuario.find().limit(2);
        res.json(usuarios);
    }catch(error){
        res.status(500).json({ error: "Error de usuarios"  });
    }
  
  };

export const crearUsuario = async (req:Request, res: Response)=>{
    
    const usuariosData = req.body;
    try{
        
        const saveUser = await Usuario.insertMany(usuariosData);
        res.json(saveUser);

    }catch(error){
        res.status(500).json({error:"Error al crear usuario"});
    }
};