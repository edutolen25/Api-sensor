import SensorDao from "../dao/SensorDao.js";

export const getAll = async (req, res) => {
    SensorDao.getAll()
        .then(sensor=>{
            if(sensor!=null)
                res.json(sensor);
            else
                res.json({
                    message: "No se encontraron sensores"
                });
        }
        )
        .catch(err=>{
            res.json({
                message: "Error al obtener los sensores"
            })
        })
    }

export const insert = async (req, res) => {
    SensorDao.insert(req.body)
        .then(sensor=>{
            res.json({
                message: "Sensor insertado correctamente"
            });
        })
        .catch(err=>{
            res.json({
                message: "Error al insertar el sensor"
            })
        })
    }
