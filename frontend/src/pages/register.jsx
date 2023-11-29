import { useState, useEffect } from 'react';
import { faUser } from 'react-icons/fa'

function Register() {
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
          <faUser /> Register
        </h1>
        <p>please create an account</p>
      </section>
      <section className="form">
        <div className="form-group">
          <form onSubmit={onSubmit}>
            <input
              type="text"
              className="form-control"
              name='name'
              value={name}
              placeholder="please enter your name"
              onChange={onChange}
            />
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
            <input
              type="password"
              className="form-control"
              name='password2'
              value={password2}
              placeholder="please confrim your password"
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

export default Register