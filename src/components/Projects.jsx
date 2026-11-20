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
  const projects = [
    {
      image: "/images/project-1.jpg",
      category: "WEB DEVELOPMENT",
      title: "E-Commerce Website",
      description:
        "A modern online store designed to provide a smooth shopping experience.",
    },
    {
      image: "/images/project-2.jpg",
      category: "CORPORATE",
      title: "Business Website",
      description:
        "A professional website designed to showcase company services and brand identity.",
    },
    {
      image: "/images/project-3.jpg",
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
            image={project.image}
            category={project.category}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>

    </section>
  );
}

export default Projects;