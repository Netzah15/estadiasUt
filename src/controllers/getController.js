const { pool } = require('../database/config');

//Obtener todas las empresas
const getAll = async (req, res) =>{
    return new Promise( (resolve, reject) =>{
        pool.query('SELECT * FROM empresas', (err, rows)=> {
            if (err) reject(err);
            resolve(rows);
            console.log(rows);
            res.json({
                ok: true,
                text: 'Todas las empresas',
                data: rows
            });
        });
    });
}

//Obtener empresas GASTRONOMÍA TSU
const getGas = async (req,res)=>{
    return new Promise( (resolve, reject)=>{
        pool.query('SELECT * FROM empresas WHERE tsu = "Gastronomía "',
        (err, rows)=>{
            if(err) reject(err.message);
            res.json({
                ok: true,
                text: 'Empresas gastronomia',
                data: rows
            });
        });
    });
}

//Obtener empresas GASTRONOMIA ING
const getGasIng = async (req,res)=>{
    return new Promise( (resolve, reject)=>{
        pool.query('SELECT * FROM empresas WHERE ing = "Gastronomía "',
        (err, rows)=>{
            if(err) reject(err.message);
            res.json({
                ok: true,
                text: 'Empresas gastronomia ingeniería',
                data: rows
            });
        });
    });
}

//Obtener empresas DESARROLLO TSU
const getDes = async (req,res)=>{
    return new Promise( (resolve, reject)=>{
        pool.query('SELECT * FROM empresas WHERE tsu = "Desarrollo de negocios "',
        (err, rows)=>{
            if(err) reject(err.message);
            res.json({
                ok: true,
                text: 'Empresas desarrollo',
                data: rows
            });
        });
    });
}

//Obtener empresas DESARROLLO ING
const getDesIng = async (req,res)=>{
    return new Promise( (resolve, reject)=>{
        pool.query('SELECT * FROM empresas WHERE ing = "Innovación de negocios y mercadotecnia "',
        (err, rows)=>{
            if(err) reject(err.message);
            res.json({
                ok: true,
                text: 'Empresas desarrollo ingeniería',
                data: rows
            });
        });
    });
}

//Obtener empresas MECATRONICA TSU
const getMeca = async (req,res)=>{
    return new Promise( (resolve, reject)=>{
        pool.query('SELECT * FROM empresas WHERE tsu = "Mecatrónica "',
        (err, rows)=>{
            if(err) reject(err.message);
            res.json({
                ok: true,
                text: 'Empresas mecatrónica',
                data: rows
            });
        });
    });
}

//Obtener empresas MECATRONICA ING
const getMecaIng = async (req,res)=>{
    return new Promise( (resolve, reject)=>{
        pool.query('SELECT * FROM empresas WHERE ing = "Mecatrónica "',
        (err, rows)=>{
            if(err) reject(err.message);
            res.json({
                ok: true,
                text: 'Empresas mecatrónica ingeniería',
                data: rows
            });
        });
    });
}

//Obtener empresas TECNOLOGIAS TSU
const getTi = async (req,res)=>{
    return new Promise( (resolve, reject)=>{
        pool.query('SELECT * FROM empresas WHERE tsu = "Tecnologías de la información "',
        (err, rows)=>{
            if(err) reject(err.message);
            res.json({
                ok: true,
                text: 'Empresas TI',
                data: rows
            });
        });
    });
}

//Obtener empresas ENERGIAS TSU
const getEnergias = async (req,res)=>{
    return new Promise( (resolve, reject)=>{
        pool.query('SELECT * FROM empresas WHERE tsu = "Energias renovables "',
        (err, rows)=>{
            if(err) reject(err.message);
            res.json({
                ok: true,
                text: 'Empresas energias',
                data: rows
            });
        });
    });
}

//Obtener empresas MODAS TSU
const getModas = async (req,res)=>{
    return new Promise( (resolve, reject)=>{
        pool.query('SELECT * FROM empresas WHERE tsu = "Diseño y moda industrial "',
        (err, rows)=>{
            if(err) reject(err.message);
            res.json({
                ok: true,
                text: 'Empresas modas',
                data: rows
            });
        });
    });
}

//Obtener empresas MODAS ING
const getModasIng = async (req,res)=>{
    return new Promise( (resolve, reject)=>{
        pool.query('SELECT * FROM empresas WHERE ing = "Diseño textil y moda "',
        (err, rows)=>{
            if(err) reject(err.message);
            res.json({
                ok: true,
                text: 'Empresas modas ingeniería',
                data: rows
            });
        });
    });
}

//Obtener empresas AGRICULTURA TSU
const getAgricultura = async (req,res)=>{
    return new Promise( (resolve, reject)=>{
        pool.query('SELECT * FROM empresas WHERE tsu = "Agricultura sustentable y protegida "',
        (err, rows)=>{
            if(err) reject(err.message);
            res.json({
                ok: true,
                text: 'Empresas agricultura',
                data: rows
            });
        });
    });
}

//Obtener empresas PROCESOS TSU
const getProc = async (req,res)=>{
    return new Promise( (resolve, reject)=>{
        pool.query('SELECT * FROM empresas WHERE tsu = "Procesos alimentarios "',
        (err, rows)=>{
            if(err) reject(err.message);
            res.json({
                ok: true,
                text: 'Empresas procesos',
                data: rows
            });
        });
    });
}

//Eliminar un usuario
const deleteUser = async(req, res)=>{
    const {id} = req.params;
    return new Promise((resolve, reject)=>{
        pool.query('DELETE FROM empresas WHERE id = ?', [id],
        (err, rows)=>{
            if(err) reject(err.message);
            res.json({
                ok: true,
                text: 'Usuario eliminado'
            });
        });
    });
}

//CONTAR GASTRO TSU
const countG = async(req, res)=>{
    return new Promise( (resolve, reject)=>{
        pool.query('SELECT COUNT(*) FROM `empresas` WHERE tsu = "Gastronomía "',
        (err, rows)=>{
            if(err) reject(err.message);
            res.json({
                ok: true,
                text: 'Numero de empresas tsu Gastro',
                data: rows
            });
        });
    })
}

//CONTAR GASTRO ING
const countGI = async(req, res)=>{
    return new Promise( (resolve, reject)=>{
        pool.query('SELECT COUNT(*) FROM `empresas` WHERE ing = "Gastronomía "',
        (err, rows)=>{
            if(err) reject(err.message);
            res.json({
                ok: true,
                text: 'Numero de empresas ing Gastro',
                data: rows
            });
        });
    })
}

//CONTAR DESARROLLO TSU
const countD = async(req, res)=>{
    return new Promise( (resolve, reject)=>{
        pool.query('SELECT COUNT(*) FROM `empresas` WHERE tsu = "Desarrollo de negocios "',
        (err, rows)=>{
            if(err) reject(err.message);
            res.json({
                ok: true,
                text: 'Numero de empresas tsu Desarrollo',
                data: rows
            });
        });
    })
}

//CONTAR DESARROLLO ING
const countDI = async(req, res)=>{
    return new Promise( (resolve, reject)=>{
        pool.query('SELECT COUNT(*) FROM `empresas` WHERE ing = "Desarrollo de negocios "',
        (err, rows)=>{
            if(err) reject(err.message);
            res.json({
                ok: true,
                text: 'Numero de empresas ing Desarrollo',
                data: rows
            });
        });
    })
}

//CONTAR TI TSU
const countT = async(req, res)=>{
    return new Promise( (resolve, reject)=>{
        pool.query('SELECT COUNT(*) FROM `empresas` WHERE tsu = "Tecnologías de la información "',
        (err, rows)=>{
            if(err) reject(err.message);
            res.json({
                ok: true,
                text: 'Numero de empresas tsu Ti',
                data: rows
            });
        });
    })
}

//CONTAR MECA TSU
const countM = async(req, res)=>{
    return new Promise( (resolve, reject)=>{
        pool.query('SELECT COUNT(*) FROM `empresas` WHERE tsu = "Mecatrónica "',
        (err, rows)=>{
            if(err) reject(err.message);
            res.json({
                ok: true,
                text: 'Numero de empresas tsu Meca',
                data: rows
            });
        });
    })
}

//CONTAR MECA ING
const countMI = async(req, res)=>{
    return new Promise( (resolve, reject)=>{
        pool.query('SELECT COUNT(*) FROM `empresas` WHERE ing = "Mecatrónica "',
        (err, rows)=>{
            if(err) reject(err.message);
            res.json({
                ok: true,
                text: 'Numero de empresas ing Meca',
                data: rows
            });
        });
    })
}

//CONTAR MODA TSU
const countMo = async(req, res)=>{
    return new Promise( (resolve, reject)=>{
        pool.query('SELECT COUNT(*) FROM `empresas` WHERE tsu = "Diseño y moda industrial "',
        (err, rows)=>{
            if(err) reject(err.message);
            res.json({
                ok: true,
                text: 'Numero de empresas tsu Moda',
                data: rows
            });
        });
    })
}

//CONTAR MODA ING
const countMoI = async(req, res)=>{
    return new Promise( (resolve, reject)=>{
        pool.query('SELECT COUNT(*) FROM `empresas` WHERE ing = "Diseño textil y moda "',
        (err, rows)=>{
            if(err) reject(err.message);
            res.json({
                ok: true,
                text: 'Numero de empresas ing Moda',
                data: rows
            });
        });
    })
}

//CONTAR AGRICULTURA TSU
const countAg = async(req, res)=>{
    return new Promise( (resolve, reject)=>{
        pool.query('SELECT COUNT(*) FROM `empresas` WHERE tsu = "Agricultura sustentable y protegida "',
        (err, rows)=>{
            if(err) reject(err.message);
            res.json({
                ok: true,
                text: 'Numero de empresas tsu Agricultura',
                data: rows
            });
        });
    })
}

//CONTAR ENERGIAS TSU
const countEn = async(req, res)=>{
    return new Promise( (resolve, reject)=>{
        pool.query('SELECT COUNT(*) FROM `empresas` WHERE tsu = "Energías renovables "',
        (err, rows)=>{
            if(err) reject(err.message);
            res.json({
                ok: true,
                text: 'Numero de empresas tsu Energías',
                data: rows
            });
        });
    })
}

module.exports = {
    getAll,
    deleteUser,
    getGas,
    getGasIng,
    getDes,
    getDesIng,
    getMeca,
    getMecaIng,
    getTi,
    getEnergias,
    getModas,
    getModasIng,
    getAgricultura,
    getProc,
    countG,
    countGI,
    countD,
    countDI,
    countT,
    countM,
    countMI,
    countMo,
    countMoI,
    countAg,
    countEn
}