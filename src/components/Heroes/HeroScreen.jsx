import React from 'react'
import { useParams } from 'react-router-dom'
import { Grid } from '@material-ui/core'

import BasicInfo from './Info/BasicInfo'
import AppearanceInfo from './Info/AppearanceInfo'
import PowerInfo from './Info/PowerInfo'
import OtherInfo from './Info/OtherInfo'
import getHeroById from '../../selectors/getHeroById'
import './Heroes.css'

const HeroScreen = ({ history }) => {
  const { id } = useParams()

  const hero = getHeroById(parseInt(id))

  const handleReturn = () => {
    history.goBack()
  }

  return (
    <Grid container className=' pt-3 pl-3'>
      <Grid item className='mr-3'>
        <img
          src={hero.images.md}
          alt={hero.name}
          className='img-thumbnail animate__animated animate__fadeInLeft'
        />
      </Grid>
      <Grid>
        <BasicInfo hero={hero} />
        <button
          onClick={handleReturn}
          className='btn btn-outline-info'
          variant='outlined'
        >
          Return
        </button>
      </Grid>

      <Grid container direction='row'>
        <AppearanceInfo hero={hero} />
        <PowerInfo hero={hero} />
        <OtherInfo hero={hero} />
      </Grid>
    </Grid>
  )
}

export default HeroScreen
