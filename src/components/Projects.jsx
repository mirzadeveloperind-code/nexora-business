
function ProjectCard({ image, category, title, description }) {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={image} alt={title} />
      </div>

      <div className="project-info">
        <span className="project-category">{category}</span>
        <h3>{title}</h3>
        <p>{description}</p>

        <a href="#contact" className="project-link">
          View Project ↗
        </a>
      </div>
    </div>
  );
}

function Projects() {
  const base = import.meta.env.BASE_URL;

  const projects = [
    {
      image: `${base}images/project-1.jpg`,
      category: "WEB DEVELOPMENT",
      title: "E-Commerce Website",
      description:
        "A modern online store designed to provide a smooth shopping experience.",
    },
    {
      image: `${base}images/project-2.jpg`,
      category: "CORPORATE",
      title: "Business Website",
      description:
        "A professional website designed to showcase company services and brand identity.",
    },
    {
      image: `${base}images/project-3.jpg`,
      category: "DIGITAL DESIGN",
      title: "Agency Landing Page",
      description:
        "A creative landing page built to introduce services and generate leads.",
    },
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="projects-heading">
        <span className="projects-tag">OUR PORTFOLIO</span>
        <h2>Our Latest Projects</h2>
        <p>
          A selection of work that reflects our creativity,
          experience and expertise.
        </p>
      </div>

      <div className="projects-container">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            {...project}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
