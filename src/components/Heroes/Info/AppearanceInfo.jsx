import React from 'react'
import { Grid, List, ListItem, Typography } from '@material-ui/core'

const AppearanceInfo = ({ hero }) => {
  return (
    <Grid item xs>
      <Typography variant='h5' className='mt-3 name'>
        Appearance
        <List className='list'>
          <ListItem className='text'>
            <strong className='sub'>Gender: </strong>
            {hero.appearance.gender}
          </ListItem>
          <ListItem className='text'>
            <strong className='sub'>Race: </strong>
            {hero.appearance.race}
          </ListItem>
          <ListItem className='text'>
            <strong className='sub'>Height: </strong>
            {hero.appearance.height[1]}
          </ListItem>
          <ListItem className='text'>
            <strong className='sub'>Weight: </strong>
            {hero.appearance.weight[1]}
          </ListItem>
          <ListItem className='text'>
            <strong className='sub'>Eye Color: </strong>
            {hero.appearance.eyeColor}
          </ListItem>
          <ListItem className='text'>
            <strong className='sub'>Hair Color: </strong>
            {hero.appearance.hairColor}
          </ListItem>
        </List>
      </Typography>
    </Grid>
  )
}

export default AppearanceInfo
