import React from 'react'
import { FiChevronRight } from 'react-icons/fi'

import logo from 'assets/logo.svg'
import { Title, Form, Repositories } from './styles'

const Dashboard = () => {
  return (
    <>
      <img src={logo} alt="Github Explorer" />
      <Title>Explore Github Repositories</Title>

      <Form>
        <input placeholder="Enter the repository name" />
        <button type="submit">Search</button>
      </Form>

      <Repositories>
        <a href="test">
          <img
            src="https://api.adorable.io/avatars/face/eyes13/nose10/mouth2/00aeff/150"
            alt="Avatar"
          />
          <div>
            <strong>github/repository</strong>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="test">
          <img
            src="https://api.adorable.io/avatars/face/eyes13/nose10/mouth2/00aeff/150"
            alt="Avatar"
          />
          <div>
            <strong>github/repository</strong>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="test">
          <img
            src="https://api.adorable.io/avatars/face/eyes13/nose10/mouth2/00aeff/150"
            alt="Avatar"
          />
          <div>
            <strong>github/repository</strong>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  )
}

export default Dashboard
