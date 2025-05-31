// Se importa el módulo fs de Node.js para trabajar con archivos
import fs from 'fs'
// Se importa el módulo path de Node.js para trabajar con las rutas de los archivos
import path from 'path'
import { fileURLToPath } from 'url'
// Se importa la clase que funciona como Interfaz
import SuperheroesDataSource from './superheroesDataSource.mjs'
import Superheroe from '../models/superheroe.mjs'

// Se obtiene la ruta del archivo superheroes.txt
const __filename = fileURLToPath(import.meta.url) // Obtiene la ruta actual del archivo (superheroesRepository)
const __dirname = path.dirname(__filename) // Se obtiene la ruta actual de la carpeta que contiene el archivo que actualmente está en ejecución

export default class SuperheroesFileRepository extends SuperheroesDataSource {
  constructor() {
    super()
    this.filePath = path.join(__dirname, '../superheroes.txt') 
  }

  obtenerTodos() {
    try {
      const data = fs.readFileSync(this.filePath, 'utf-8')
      const superheroesArray = JSON.parse(data)
  
      return superheroesArray.map(heroe => new Superheroe(
        heroe.id,
        heroe.nombreSuperheroe,
        heroe.nombreReal,
        heroe.nombreSociedad,
        heroe.edad,
        heroe.planetaOrigen,
        heroe.debilidad,
        heroe.poder,
        heroe.habilidadEspecial,
        heroe.aliado,
        heroe.enemigo
      ))
    } catch (error) {
      console.error('No se pudo leer el archivo:', error)
    }
  }
}