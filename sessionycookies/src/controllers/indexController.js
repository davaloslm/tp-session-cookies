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
            res.locals.backgroundColor= nuevoUsuario.color;

            res.render("index", {nuevoUsuario})
            
        }else{
            res.render("index", {errors: errors.mapped(), old: req.body})

        }
        

        
    }
       
}

module.exports = controller;