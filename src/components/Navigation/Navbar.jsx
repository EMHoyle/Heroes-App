import React, { useContext, useState } from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
import { Button, Grid, Typography } from '@material-ui/core'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types'

export const Navbar = () => {
  const { user: name, dispatch } = useContext(AuthContext)
  const userName = name.name
  const history = useHistory()

  const [collapsed, setCollapsed] = useState(true)

  const handleLogout = () => {
    history.replace('/login')
    dispatch({
      type: types.logout,
    })
  }

  const toggleNavbar = () => {
    setCollapsed(!collapsed)
  }
  const classOne = collapsed
    ? 'collapse navbar-collapse'
    : 'collapse navbar-collapse show'
  const classTwo = collapsed
    ? 'navbar-toggler navbar-toggler-left collapsed'
    : 'navbar-toggler navbar-toggler-left'

  return (
    <nav className='navbar navbar-expand-sm navbar-dark bg-dark'>
      <Grid className='w-100'>
        <button
          onClick={toggleNavbar}
          className={`${classTwo}`}
          type='button'
          data-toggle='collapse'
          data-target='#navbarResponsive'
          aria-controls='navbarResponsive'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </button>
        <Grid className={`${classOne}`} id='navbarResponsive'>
          <Grid>
            <ul className='navbar-nav'>
              <li>
                <Link className='navbar-brand' to='/home'>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <NavLink
                  className='nav-item nav-link'
                  activeClassName='active'
                  exact
                  to='/marvel'
                >
                  Marvel
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink
                  className='nav-item nav-link'
                  activeClassName='active'
                  exact
                  to='/dc'
                >
                  DC
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink
                  className='nav-item nav-link'
                  activeClassName='active'
                  exact
                  to='/search'
                >
                  Search
                </NavLink>
              </li>
            </ul>
          </Grid>
          <Grid className='navbar-nav ml-auto'>
            <Typography className='nav-item nav-link text-info'>
              {userName}
            </Typography>
            <Button
              onClick={handleLogout}
              className='nav-item nav-link btn text-capitalize'
            >
              Logout
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </nav>
  )
}
