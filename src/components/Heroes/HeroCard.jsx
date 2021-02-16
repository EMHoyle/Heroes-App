import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardContent, Divider, Grid, Typography } from '@material-ui/core'

import './Heroes.css'

const HeroCard = ({ hero }) => {
  return (
    <div>
      <Card
        key={hero.id}
        className='card mb-3 card-container'
        style={{ maxWidth: 540 }}
      >
        <Grid className='row no-gutters'>
          <Grid className='col-md-4'>
            <img
              src={hero.images.md}
              alt={hero.name}
              className='card-img img'
            />
          </Grid>
          <Grid className='col-md-8'>
            <CardContent className='card-body'>
              <Typography variant='h5' className='card-title'>
                {hero.name}
              </Typography>
              <Typography className='card-text'>
                {hero.biography.fullName === ''
                  ? hero.biography.aliases
                  : hero.biography.fullName}
              </Typography>
              <Divider style={{ margin: '1rem 0' }} />
              <Typography>
                <strong>{hero.biography.publisher}</strong>
              </Typography>
              <Typography className='card-text'>
                <strong>Alignment:</strong> {hero.biography.alignment}
              </Typography>
              <Typography className='card-text'>
                <strong>Race:</strong>{' '}
                {hero.appearance.race === null
                  ? 'Unknown'
                  : hero.appearance.race}
              </Typography>
              <Link className='text-info link' to={`/hero/${hero.id}`}>
                More...
              </Link>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </div>
  )
}

export default HeroCard
