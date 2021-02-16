import React, { useContext } from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { AuthContext } from '../auth/AuthContext'
import LoginScreen from '../components/Login/LoginScreen'
import PrivateRouter from './PrivateRouter'
import PublicRouter from './Public.Router'
import ScreensRouter from './ScreensRouter'

const AppRouter = () => {
  const { user } = useContext(AuthContext)
  return (
    <Router>
      <div>
        <Switch>
          <PublicRouter
            exact
            path='/login'
            component={LoginScreen}
            isAuthenticated={user.logged}
          />
          <PrivateRouter
            path='/'
            component={ScreensRouter}
            isAuthenticated={user.logged}
          />
        </Switch>
      </div>
    </Router>
  )
}

export default AppRouter
