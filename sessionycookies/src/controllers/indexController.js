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
            
        }
        
        let nuevoUsuario = req.body;

        usuarios.push(nuevoUsuario);

        fs.writeFileSync(usuariosRuta, JSON.stringify(usuarios, null ,2))
		res.redirect("/", {nuevoUsuario})
    }
       
}

module.exports = controller;