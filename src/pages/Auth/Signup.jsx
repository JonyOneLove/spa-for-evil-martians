import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import profileIcon from '@/assets/images/icons/auth-profile.svg'
import passwordIcon from '@/assets/images/icons/password.svg'
import { register } from '@/services/AuthService'

import './style.scss'

const Signup = () => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [errorMessage, setErrorMessage] = useState(null)

  const isDisabled = Object.values(formData).every(value => value != '')

  const handleChange = event => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const handleSubmit = async event => {
    event.preventDefault()

    const response = await register(formData)

    if (response.user) {
      localStorage.setItem('access_token', response.accessToken)
      navigate('/')
    } else {
      setErrorMessage(response)
    }
  }

  return (
    <div className='auth'>
      <div className='auth__content'>
        <h2>Sign Up</h2>

        {errorMessage && (
          <div className='auth__error-message'>
            <p>{errorMessage}</p>
          </div>
        )}

        <form onSubmit={e => handleSubmit(e)} className='auth-form'>
          <div className='auth-form__textbox'>
            <input
              value={formData.email}
              onChange={handleChange}
              required
              type='email'
              name='email'
              placeholder='Username'
            />
            <img src={profileIcon} alt='' />
          </div>
          <div className='auth-form__textbox'>
            <input
              value={formData.password}
              onChange={handleChange}
              required
              type='password'
              name='password'
              placeholder='Password'
            />
            <img src={passwordIcon} alt='' />
          </div>
          <button
            disabled={!isDisabled}
            type='submit'
            className='auth-form__button'
          >
            Create Account
          </button>
          <p className='auth-form__text'>
            Already have an account?
            <NavLink to='/login' href='https://website.com'>
              Sign In
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Signup
