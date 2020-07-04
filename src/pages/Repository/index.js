import React, { useState, useEffect } from 'react'
import { useRouteMatch, Link } from 'react-router-dom'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

import api from 'services/api'

import logo from 'assets/logo.svg'
import { Header, RepositoryInfo, Issues } from './styles'

const Repository = () => {
  const [repo, setRepo] = useState(null)
  const [issues, setIssues] = useState(null)
  const {
    params: { repositoryName }
  } = useRouteMatch()

  useEffect(() => {
    const loadRepository = async () => {
      const [repository, repoIssues] = await Promise.all([
        api.get(`repos/${repositoryName}`),
        api.get(`repos/${repositoryName}/issues`)
      ])

      setRepo(repository.data)
      setIssues(repoIssues.data)
    }

    loadRepository()
  }, [repositoryName])

  return (
    <>
      <Header>
        <img src={logo} alt="Github Explorer" />

        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      {repo && (
        <RepositoryInfo>
          <header>
            <img src={repo.owner.avatar_url} alt="Avatar" />
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
      )}

      <Issues>
        {issues &&
          issues.map(issue => (
            <a
              key={issue.id}
              href={issue.html_url}
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <strong>{issue.title}</strong>
                <p>{issue.user.login}</p>
              </div>

              <FiChevronRight size={20} />
            </a>
          ))}
      </Issues>
    </>
  )
}

export default Repository
