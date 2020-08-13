import React from "react"
import { Card } from "react-bootstrap"
import { useQuery } from "react-query"
import "./component-styles/github-bar.scss"

async function fetchRepos() {
  const response = await (
    await fetch(
      "https://api.github.com/orgs/DevelopersGuild/repos?sort=updated"
    )
  ).json()
  return response
}

function GithubBar() {
  const { status, data, error } = useQuery("github-repos", fetchRepos)
  if (status === "loading") return <div>Loading...</div>
  if (status === "error") return <div>Error: {error}</div>
  if (data.message && data.message.includes("API rate limit exceeded")) {
    return <></>
  }
  return (
    <React.Fragment>
      <h2 className="github-bar-header">Github Repositories</h2>
      <Card>
        <Card.Body>
          <div>
            <div className="sub-cards">
              {data.map((e, index) => (
                <React.Fragment key={index}>
                  <Card.Body>
                    <Card.Title>{e.full_name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      {e.description}
                    </Card.Subtitle>
                    <Card.Text>
                      {" "}
                      <span aria-label="forks" role="img">
                        🍴
                      </span>{" "}
                      Forks:{e.forks_count}{" "}
                      <span aria-label="watchers" role="img">
                        👁
                      </span>{" "}
                      Watchers:{e.watchers}{" "}
                      <span aria-label="language" role="img">
                        💻
                      </span>{" "}
                      Language: {e.language}
                    </Card.Text>
                    <Card.Link href={e.html_url}>Repository</Card.Link>
                  </Card.Body>
                </React.Fragment>
              ))}
            </div>
            <br />
          </div>
        </Card.Body>
      </Card>
    </React.Fragment>
  )
}

export default GithubBar
