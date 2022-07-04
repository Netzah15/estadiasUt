const Router = require('express');
const {addBuss} = require('../controllers/registroController');
const {check} = require('express-validator');
const {validar} = require('../middlewares/validar_campos');

const router = Router();

router.post('/registro', [
    check('correo', 'El correo es obligatorio').not().isEmpty(),
    check('empresa', 'La empresa es obligatoria').not().isEmpty(),
    check('contacto', 'El contacto es obligatorio').not().isEmpty(),
    check('puesto', 'El puesto es obligatorio').not().isEmpty(),
    check('telefono', 'El telefono es obligatorio').not().isEmpty(),
    check('correoCon', 'El correo es obligatorio').not().isEmpty(),
    check('direccion', 'La direccion es obligatoria').not().isEmpty(),
    check('proyecto', 'El proyecto es obligatorio').not().isEmpty(),
    check('perfil', 'El perfil es obligatorio').not().isEmpty(),
    check('apoyo', 'El apoyo es obligatorio').not().isEmpty(),
    check('comentarios', 'Los comentarios son obligatorios').not().isEmpty(),
    validar
], addBuss);


module.exports = router;