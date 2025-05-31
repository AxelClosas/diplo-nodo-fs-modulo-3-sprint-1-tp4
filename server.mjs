import express from 'express'
import { buscarSuperheroesPorAtributoController, obtenerSuperheroePorIdController, obtenerSuperheroesMayoresDe30Controller } from './controllers/superheroesController.mjs'

// Se inicializa la app de Express
const app = express()
// Se define el puerto en el que escuchará el servidor
const PORT = 3005

// Rutas
  // Ruta Raiz - HOME
app.get('/', (req, res) => res.send('Ruta raíz'))

  // Recibe un ID de Superhéroe y devuelve los datos de ese superhéroe o un mensaje si no fue encontrado
  // Solicitud: /superheroes/id/:id
app.get('/superheroes/id/:id', obtenerSuperheroePorIdController)

  // Recibe un atributo (por ejemplo, nombre o poder) y devuelve una lista de superheroes que cumplan con ese criterio
  // Solicitud: /superheroes/atributo/:atributo/:valor
app.get('/superheroes/atributo/:atributo/:valor', buscarSuperheroesPorAtributoController)

  // Devuelve una lista de superhéroes mayores a 30 años que además sean del planeta Tierra y tengan al menos 2 poderes
  // Solicitud: /superheroes/edad/mayorA30
app.get('/superheroes/edad/mayorA30', obtenerSuperheroesMayoresDe30Controller)








// Se inicializa el servidor
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`))

