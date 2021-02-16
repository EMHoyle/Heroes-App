import React from 'react'
import { Divider, Grid } from '@material-ui/core'
import HeroList from '../Heroes/HeroList'

import styles from '../css/Screens.module.css'

const DcScreen = () => {
  return (
    <div>
      <Grid container>
        <Grid item style={{ width: '100%' }}>
          <h1 className={styles.title}>DC Screen</h1>
          <Divider
            className={styles.dividerContainer}
            style={{ width: '100%' }}
          />
        </Grid>
      </Grid>
      <HeroList publisher='DC Comics' />
    </div>
  )
}

export default DcScreen
