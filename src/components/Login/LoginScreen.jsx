import React, { useContext, useState } from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types'
import {
  Button,
  Checkbox,
  CssBaseline,
  Container,
  FormControlLabel,
  Grid,
  TextField,
} from '@material-ui/core'

import styles from '../css/Login.module.css'

const LoginScreen = ({ history }) => {
  const [inputValue, setInputValue] = useState('')
  const [inputPass, setInputPass] = useState('')

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handlePassChange = (e) => {
    setInputPass(e.target.value)
  }

  const { dispatch } = useContext(AuthContext)

  const handleClick = () => {
    const lastPath = localStorage.getItem('lastPath') || '/'
    dispatch({
      type: types.login,
      payload: {
        name: inputValue,
      },
    })
    history.replace(lastPath)
  }

  return (
    <Container className={styles.container} component='main' maxWidth='xs'>
      <CssBaseline />
      <Grid container direction='column'>
        <Grid item className={styles.title}>
          Heroes
        </Grid>
        <Grid item className={styles.subtitle}>
          The Encyclopedia
        </Grid>
      </Grid>
      <div className={styles.paper}>
        <form className={styles.form}>
          <TextField
            InputProps={{
              className: styles.input,
            }}
            variant='outlined'
            margin='normal'
            required={true}
            fullWidth
            id='email'
            label='Alias'
            name='username'
            value={inputValue}
            onChange={handleInputChange}
            autoComplete='off'
          />
          <TextField
            InputProps={{
              className: styles.input,
            }}
            variant='outlined'
            margin='normal'
            required={true}
            fullWidth
            id='password'
            label='Code'
            name='password'
            value={inputPass}
            onChange={handlePassChange}
            autoComplete='off'
          />
          <FormControlLabel
            className={styles.remember}
            control={<Checkbox value='remember' color='primary' />}
            label='Remember me'
          />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            className={styles.button}
            onClick={handleClick}
          >
            Continue
          </Button>
        </form>
      </div>
    </Container>
  )
}

export default LoginScreen
