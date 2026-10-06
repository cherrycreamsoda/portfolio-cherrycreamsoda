import projects from '../data/projects'
import { VscGithubInverted } from 'react-icons/vsc'
import './Work.css'

function Work() {
  return (
    <section className="work" id="work" data-header-theme="light">
      <div className="workHeader">
        <h2>Work</h2>
      </div>

      <div className="projectGrid">
        {projects.map((project) => (
          <article className="projectCard" key={project.name}>
            <div className="projectImage">
              {project.image && (
                <>
                  <div
                    className="projectImageBackground"
                    style={{ backgroundImage: `url("${project.image}")` }}
                    aria-hidden="true"
                  />
                  <img src={project.image} alt={`${project.name} preview`} />
                </>
              )}
            </div>
            <div className="projectDetails">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="projectLinks">
                <a
                  className="githubLink"
                  href={project.githubUrl}
                  aria-label={`View ${project.name} on GitHub`}
                >
                  <VscGithubInverted aria-hidden="true" />
                </a>
                <a
                  className="demoLink"
                  href={project.demoUrl}
                  aria-label={`View ${project.name} demo`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="preview-icon"
                    aria-hidden="true"
                  >
                    <path d="M7 7h10v10" />
                    <path d="M7 17 17 7" />
                  </svg>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Work