import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Navbar } from '../components/Navigation/Navbar'
import HomeScreen from '../components/Home/HomeScreen'
import MarvelScreen from '../components/Marvel/MarvelScreen'
import HeroScreen from '../components/Heroes/HeroScreen'
import DcScreen from '../components/DC/DcScreen'
import SearchScreen from '../components/Search/SearchScreen'

const ScreensRouter = () => {
  return (
    <>
      <Navbar />

      <div>
        <Switch>
          <Route exact path='/home' component={HomeScreen} />
          <Route exact path='/marvel' component={MarvelScreen} />
          <Route exact path='/hero/:id' component={HeroScreen} />
          <Route exact path='/dc' component={DcScreen} />
          <Route exact path='/search' component={SearchScreen} />

          <Redirect to='/home' />
        </Switch>
      </div>
    </>
  )
}

export default ScreensRouter
