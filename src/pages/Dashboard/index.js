import React, { useState } from 'react'
import { FiChevronRight } from 'react-icons/fi'

import api from 'services/api'

import logo from 'assets/logo.svg'
import { Title, Form, Repositories, InputError } from './styles'

const Dashboard = () => {
  const [newRepo, setNewRepo] = useState('')
  const [repos, setRepos] = useState([])
  const [inputError, setInputError] = useState()

  const handleAddRepo = async e => {
    e.preventDefault()

    if (!newRepo) {
      setInputError('Enter the repository owner/name')
      return
    }

    try {
      const response = await api.get(`repos/${newRepo}`)
      const repo = response.data

      setRepos([...repos, repo])
      setNewRepo('')
      setInputError('')
    } catch (error) {
      setInputError(error.message)
    }
  }

  return (
    <>
      <img src={logo} alt="Github Explorer" />
      <Title>Explore Github Repositories</Title>

      <Form onSubmit={handleAddRepo} hasError={!!inputError}>
        <input
          placeholder="Enter the repository name"
          value={newRepo}
          onChange={e => setNewRepo(e.target.value)}
        />
        <button type="submit">Search</button>
      </Form>

      {inputError && <InputError>{inputError}</InputError>}

      <Repositories>
        {repos.map(repo => (
          <a key={repo.id} href="test">
            <img src={repo.owner.avatar_url} alt={repo.owner.login} />
            <div>
              <strong>{repo.full_name}</strong>
              <p>{repo.description}</p>
            </div>

            <FiChevronRight size={20} />
          </a>
        ))}
      </Repositories>
    </>
  )
}

export default Dashboard
