const path = require("path")
const usuarios = require("../data/usuarios.json")
const { validationResult } = require("express-validator");
const usuariosRuta = path.join(__dirname, "../data/usuarios.json");

const controller = {
    index: (req,res)=>{
        res.render("index")
    },
    processForm: (req, res)=>{
        let errors = validationResult(req);

        if (errors.isEmpty()) {
            let nuevoUsuario = req.body;

            req.session.backgroundColor= nuevoUsuario.color;
            req.session.userName= nuevoUsuario.nombre;



            res.locals.backgroundColor= nuevoUsuario.color;

            if (req.body.recordarColor != undefined) {
                res.cookie("recordarColor", nuevoUsuario.color, {maxAge: 60*1000})
            }

            res.render("index", {nuevoUsuario})
            
        }else{
            
            res.render("index", {errors: errors.mapped(), old: req.body})

        }
        

        
    },
    user: (req, res)=>{
        res.locals.backgroundColor= req.session.backgroundColor
        res.render("user", {userName : req.session.userName})
    }
       
}

module.exports = controller;