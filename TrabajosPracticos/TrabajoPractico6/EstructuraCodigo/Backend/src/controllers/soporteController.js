const  soporteOrm  = require('../orm/soporteOrm');

module.exports = {
  getAll: async(req,res)=>{
    try{
      const coleccion = req.params.coleccion;
      const soportes = await soporteOrm.getAll(coleccion);
      res.status(200).json(soportes);
    }catch{
      res.status(500).json({error: 'Error al obtener los registros  de soporte.'});
    }
  }
};