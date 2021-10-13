const { check } = require("express-validator");

let validateIndexForm = [
    check("name")
    .notEmpty().withMessage("Debes ingresar tu nombre").bail()
    .isLength({min: 4, max:30}).withMessage("El nombre debe tener entre 4 y 30 caracteres"),

    check("color")
    .notEmpty().withMessage("Debes seleccionar un color"),

    check("email")
    .notEmpty().withMessage("Debes ingresar tu email").bail()
    .isEmail().withMessage("Debes ingresar un email válido"),

    check("edad")
    .isInt().withMessage("En caso de ingresar tu edad, solo se puede ingresar números"),

];

module.exports = validateIndexForm;