import React from 'react'
import { Grid, List, ListItem, Typography } from '@material-ui/core'

const PowerInfo = ({ hero }) => {
  return (
    <Grid item xs>
      <Typography variant='h5' className='mt-3 name'>
        Power Stats
        <List className='list'>
          <ListItem className='text'>
            <strong className='sub'>Intelligence: </strong>
            {hero.powerstats.intelligence}
          </ListItem>
          <ListItem className='text'>
            <strong className='sub'>Strength: </strong>
            {hero.powerstats.strength}
          </ListItem>
          <ListItem className='text'>
            <strong className='sub'>Speed: </strong>
            {hero.powerstats.speed}
          </ListItem>
          <ListItem className='text'>
            <strong className='sub'>Durability: </strong>
            {hero.powerstats.durability}
          </ListItem>
          <ListItem className='text'>
            <strong className='sub'>Power: </strong>
            {hero.powerstats.power}
          </ListItem>
          <ListItem className='text'>
            <strong className='sub'>Combat: </strong>
            {hero.powerstats.combat}
          </ListItem>
        </List>
      </Typography>
    </Grid>
  )
}

export default PowerInfo
