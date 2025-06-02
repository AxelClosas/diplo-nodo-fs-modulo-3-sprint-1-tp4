import { obtenerSuperheroePorId, buscarSuperheroesPorAtributo, obtenerSuperheroesMayoresDe30 } from "../services/superheroesService.mjs"
import { renderizarListaSuperheroes, renderizarSuperheroe } from "../views/responseView.mjs"

export function obtenerSuperheroePorIdController(req, res) {
  const { id } = req.params
  const superheroe = obtenerSuperheroePorId(parseInt(id))
  if (!superheroe) // Si es undefined, entra en el IF y retorna el mensaje de error
    res.status(404).send({mensaje: 'Superhéroe no encontrado.'})

  res.status(200).send(renderizarSuperheroe(superheroe)) // Modificación a partir de este video: https://www.youtube.com/watch?v=gzivWXNW8Jc
}

export function buscarSuperheroesPorAtributoController(req, res) {
  const { atributo, valor } = req.params
  const superheroes = buscarSuperheroesPorAtributo(atributo, valor)
  if (!superheroes.length)
    res.status(404).send({mensaje: 'No se encontraron superhéroes con ese atributo'})

  res.status(200).send(renderizarListaSuperheroes(superheroes))
}

export function obtenerSuperheroesMayoresDe30Controller(req, res) {
  const superheroes = obtenerSuperheroesMayoresDe30()
  if(!superheroes.length)
    res.status(404).send({mensaje: 'No se encontraron superhéroes que cumplan con las condiciones establecidas'})
  
  res.status(200).send(renderizarListaSuperheroes(superheroes))
}