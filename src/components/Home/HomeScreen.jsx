import React from 'react'
import { Divider, Grid, Typography } from '@material-ui/core'
import { heroes } from '../../data/heroes'
import HeroCard from '../Heroes/HeroCard'

import './Home.css'

const HomeScreen = () => {
  return (
    <Grid>
      <Grid>
        <Typography className='m-5 text-center typo'>
          This application has been made for educational purposes. We can find a
          large number of Heroes thanks to the functions adapted for this app
          and the database created (data dummy).
        </Typography>
        <Typography className='m-5 text-center typo'>
          In this screen you will find all the Heroes that you get from the DB.
          You can go through it to your liking or use the Navbar to go to the
          two most prominent publishers as well as the search screen.
        </Typography>
      </Grid>
      <Divider className='dividerContainer' />
      <Grid className='card-columns m-3 animate__animated animate__fadeIn'>
        {heroes.map((hero) => (
          <HeroCard key={hero.id} hero={hero} />
        ))}
      </Grid>
    </Grid>
  )
}

export default HomeScreen
