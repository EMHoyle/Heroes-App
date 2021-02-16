import React from 'react'
import PropTypes from 'prop-types'
import { Redirect, Route } from 'react-router-dom'

const PublicRouter = ({ isAuthenticated, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      component={(props) =>
        !isAuthenticated ? <Component {...props} /> : <Redirect to='/home' />
      }
    />
  )
}

PublicRouter.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
}

export default PublicRouter
