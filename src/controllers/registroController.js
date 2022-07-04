const {pool} = require('../database/config');


//Agregar empresa
const addBuss = async (req, res) =>{
    try{
        pool.query('INSERT INTO empresas set ?', [req.body]);
        res.json({
            ok: true,
            text: 'Registro correcto',
            data: req.body
        });
    } catch(error){
        console.log(error);
        return res.status(500).json({
            ok: false,
            text: 'Algo salió mal'
        });
    }
};


module.exports = {
    addBuss
}