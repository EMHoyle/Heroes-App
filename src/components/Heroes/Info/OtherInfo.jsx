import React from 'react'
import { Grid, List, ListItem, Typography } from '@material-ui/core'

const OtherInfo = ({ hero }) => {
  return (
    <Grid item xs>
      <Typography variant='h5' className='mt-3 name'>
        Other
        <List className='list'>
          <ListItem className='text'>
            <strong className='sub'>Occupation: </strong>
            {hero.work.occupation}
          </ListItem>
          <ListItem className='text'>
            <strong className='sub'>Base: </strong>
            {hero.work.base}
          </ListItem>
          <ListItem className='text'>
            <strong className='sub'>Affiliation: </strong>
            {hero.appearance.groupAffiliation}
          </ListItem>
          <ListItem className='text'>
            <strong className='sub'>Relatives: </strong>
            {hero.appearance.relatives}
          </ListItem>
        </List>
      </Typography>
    </Grid>
  )
}

export default OtherInfo
