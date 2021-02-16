import React, { useMemo } from 'react'
import HeroCard from './HeroCard'
import getHeroByPublisher from '../../selectors/getHeroByPublisher'

const HeroList = ({ publisher }) => {
  const heroes = useMemo(() => getHeroByPublisher(publisher), [publisher])

  return (
    <div className='card-columns m-3 animate__animated animate__fadeIn'>
      {heroes.map((hero) => (
        <HeroCard key={hero.id} hero={hero} />
      ))}
    </div>
  )
}

export default HeroList
