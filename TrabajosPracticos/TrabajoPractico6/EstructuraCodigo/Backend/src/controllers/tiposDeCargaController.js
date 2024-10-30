module.exports = {
  getAllTiposDeCarga: async (req, res) => {
    try {
      //Prueba mock -> Aca va la peticion a la bd
      const tiposDeCarga = [
        {
          "id": 1,
          "nombre": "Documentación"
        },
        {
          "id": 2,
          "nombre": "Paquete"
        },
        {
          "id": 3,
          "nombre": "Granos"
        },
        {
          "id": 4,
          "nombre": "Hacienda"
        }
      ]
      
      res.json(tiposDeCarga);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener los tipos de cargas.' });
    }
  },
  getTipoDeCargaById: async (req, res) => {
    try {
      const tipoDeCargaId = req.params.id;

      const tipoDeCarga = {};
      res.json(tipoDeCarga);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener el tipo de carga.' });
    }
  },
  getTiposDeCargaByName: async (req, res) => {
    try {
      res.json(tiposDeCarga);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener los tipos de cargas.' });
    }
  },
  createTipoDeCarga: async (req, res) => {
    try {
      const newTipoDeCarga = req.body;
  
      // Verificar que esten todos los campos obligatorios
      if (!newTipoDeCarga.name) {
        return res.status(400).json({ error: 'El campo "nombre" es obligatorio.' });
      }
  
      res.json({ message: 'tipo de carga creado exitosamente.' });
    } catch (error) {
      res.status(500).json({ error: 'Error al agregar el tipo de carga.' });
    }
  },  
  updateTipoDeCarga: async (req, res) => {
    try {
      const tipoDeCargaId = req.params.id;
      const updatedTipoDeCarga = req.body;

      // Verificar que esten todos los campos obligatorios
      if (!updatedTipoDeCarga.id) {
        return res.status(400).json({ error: 'El campo "id" es obligatorio.' });
      }
      if (!updatedTipoDeCarga.name) {
        return res.status(400).json({ error: 'El campo "nombre" es obligatorio.' });
      }
  
      res.json({ message: 'Tipo de carga actualizado exitosamente.' });
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar el tipo de carga.' });
    }
  },  
  toggleStatusTipoDeCarga: async (req, res) => {
    try {
      const tipoDeCargaId = req.params.id;

      // Verificar que esten todos los campos obligatorios
      if (!tipoDeCargaId) {
        return res.status(400).json({ error: 'El campo "id" es obligatorio.' });
      }

      res.json({ message: 'Estado del tipo de carga actualizado exitosamente.' });
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar el estado del tipo de carga.' });
    }
  }
};