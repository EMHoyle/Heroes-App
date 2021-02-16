import React from 'react'
import { Grid, Typography } from '@material-ui/core'

import './Info.css'

const BasicInfo = ({ hero }) => {
  return (
    <Grid>
      <Typography variant='h2' className='mb-3 name'>
        {hero.name}
      </Typography>
      <Grid item xs className='info'>
        <div>
          <strong className='sub'>Full Name: </strong>
          {hero.biography.fullName === '' ? hero.name : hero.biography.fullName}
        </div>
        <div>
          <strong className='sub'>Alter Ego: </strong>
          {hero.biography.alterEgos}
        </div>
        <div>
          <strong className='sub'>Aliases: </strong>
          {hero.biography.aliases[0]}
        </div>
        <div>
          <strong className='sub'>Place of Birth: </strong>
          {hero.biography.placeOfBirth}
        </div>
        <div>
          <strong className='sub'>First Appearance: </strong>
          {hero.biography.firstAppearance}
        </div>
      </Grid>
    </Grid>
  )
}

export default BasicInfo
