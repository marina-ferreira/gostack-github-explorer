import React from 'react'
import { useRouteMatch, Link } from 'react-router-dom'
import { FiChevronLeft } from 'react-icons/fi'

import logo from 'assets/logo.svg'
import { Header, RepositoryInfo } from './styles'

const Repository = () => {
  const { params } = useRouteMatch()
  return (
    <>
      <Header>
        <img src={logo} alt="Github Explorer" />

        <Link to="/dashboard">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img
            src="https://api.adorable.io/avatars/face/eyes13/nose10/mouth2/00aeff/150"
            alt="Avatar"
          />
          <div>
            <strong>facebook/react</strong>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </div>
        </header>

        <ul>
          <li>
            <strong>1645</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>72</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>29</strong>
            <span>Open Issues</span>
          </li>
        </ul>
      </RepositoryInfo>
    </>
  )
}

export default Repository
