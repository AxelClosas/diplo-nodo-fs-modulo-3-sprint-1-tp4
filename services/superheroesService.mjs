import SuperheroesRepository from "../repository/superheroesRepository.mjs"

const dataHeroes = new SuperheroesRepository()

// Devuelve la información de un heroe mediante su ID, si no lo encuentra devuelve un mensaje de no encontrado
export function obtenerSuperheroePorId(id) {
  const superheroes = dataHeroes.obtenerTodos()
  return superheroes.find(heroe => heroe.id === id)
}

// Devuelve una lista de superheroes que coincidan con el atributo y valor asignado
export function buscarSuperheroesPorAtributo(atributo, valor) {
  const superheroes = dataHeroes.obtenerTodos()
  return superheroes.filter(heroe => String(heroe[atributo]).toLowerCase().includes(valor.toLowerCase()))
}

// Devuelve una lista de superheroes que sean mayores a 30, sean de la tierra y tengan al menos 2 poderes
export function obtenerSuperheroesMayoresDe30() {
  const superheroes = dataHeroes.obtenerTodos()
  return superheroes.filter(heroe => 
    heroe.edad > 30 && heroe.planetaOrigen === 'Tierra' && heroe.poder.length >= 2
  )
}