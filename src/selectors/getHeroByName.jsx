import { heroes } from '../data/heroes'

const getHeroByName = (name = '') => {
  const heroName = name.toLocaleLowerCase()

  if (heroName === '') {
    return []
  }

  return heroes.filter((hero) => hero.name.toLowerCase().includes(heroName))
}

export default getHeroByName
