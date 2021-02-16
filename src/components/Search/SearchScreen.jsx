import React, { useMemo, useState } from 'react'
import queryString from 'query-string'
import { Divider, Grid, Typography } from '@material-ui/core'
import HeroCard from '../Heroes/HeroCard'
import { useLocation } from 'react-router-dom'
import getHeroByName from '../../selectors/getHeroByName'

const SearchScreen = ({ history }) => {
  const location = useLocation()
  const { q = '' } = queryString.parse(location.search)

  const [inputValue, setInputValue] = useState(q)
  const heroesFiltered = useMemo(() => getHeroByName(q), [q])

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(inputValue)
    history.push(`?q=${inputValue}`)
    setInputValue('')
  }

  return (
    <Grid container className='mt-3 container'>
      <Grid item xs>
        <Typography
          variant='h5'
          className='ml-3'
          style={{ color: 'rgba(114, 239, 221, 1)' }}
        >
          Search Form
        </Typography>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='find your hero...'
            autoComplete='off'
            value={inputValue}
            onChange={handleInputChange}
            className='form-control w-75 ml-3'
          />
          <button
            type='submit'
            className='btn btn-block btn-outline-info mt-1  w-75 ml-3'
          >
            Search
          </button>
        </form>
      </Grid>
      <Grid item xs>
        <Typography variant='h5' style={{ color: 'rgba(114, 239, 221, 1)' }}>
          Results
        </Typography>
        <Divider
          className='mt-3 mb-3'
          style={{
            border: '1px solid rgba(166, 99, 204, 1)',
            backgroundColor: 'rgba(166, 99, 204, 1)',
          }}
        />
        {q === '' && <div className='alert alert-info w-75'>Search a Hero</div>}
        {q !== '' && heroesFiltered.length === 0 && (
          <div className='alert alert-danger w75'>
            There's not a hero with {q} name
          </div>
        )}
        {heroesFiltered.map((hero) => (
          <div className='animate__animated animate__fadeIn' key={hero.id}>
            <HeroCard hero={hero} />
          </div>
        ))}
      </Grid>
    </Grid>
  )
}

export default SearchScreen
