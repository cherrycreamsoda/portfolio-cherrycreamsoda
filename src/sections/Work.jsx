import projects from '../data/projects'
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
              {project.image && <img src={project.image} alt="" />}
            </div>
            <div className="projectDetails">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="projectLinks">
                <a href={project.demoUrl}>Demo</a>
                <a href={project.githubUrl}>Github</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Work