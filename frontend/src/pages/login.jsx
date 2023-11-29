import { useState, useEffect } from 'react';
import { faSignInAlt } from 'react-icons/fa'

function Login() {
  const [formData, setformData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  })

  const { name, email, password, password2 } = formData

  const onChange = (e) => {
    setformData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))

  }

  const onSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <>
      <section className="heading">
        <h1>
          <faSignInAlt /> Register
        </h1>
        <p>Login and Start Setting Goal</p>
      </section>
      <section className="form">
        <div className="form-group">
          <form onSubmit={onSubmit}>
            <input
              type="email"
              className="form-control"
              name='email'
              value={email}
              placeholder="please enter your email"
              onChange={onChange}
            />
            <input
              type="password"
              className="form-control"
              name='password'
              value={password}
              placeholder="please enter your password"
              onChange={onChange}
            />
          </form>
          <div className="form-group">
            <button type='submit' className='btn btn-block'>Submit</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Login