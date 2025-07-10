import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import express from "express";

dotenv.config();//Llamar el archivo .env
mongoose.connect(process.env.urlbd)//Conectar con mongodb
   .then(() =>{
    console.log("todo jalo chingon con la base de datos")
    })
   .catch((error) =>{
    console.log("no funciono la base", error)
    })//Creacion de promesas.

