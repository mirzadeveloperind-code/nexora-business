function ServiceCard(props) {
  return (
    <div className="service-card">
      <div className="service-number">{props.number}</div>

      <h3>{props.title}</h3>

      <p>{props.description}</p>

      <a href="#contact">Learn More →</a>
    </div>
  );
}

function Services() {
  const services = [
    {
      number: "01",
      title: "Business Strategy",
      description:
        "We help businesses plan smarter, improve operations and achieve long-term growth.",
    },
    {
      number: "02",
      title: "Digital Solutions",
      description:
        "We build modern digital solutions that help businesses improve their online presence.",
    },
    {
      number: "03",
      title: "Marketing",
      description:
        "We help brands reach more customers through digital marketing and creative campaigns.",
    },
  ];

  return (
    <section className="services-section" id="services">

      <div className="services-heading">
        <p className="services-tag">OUR SERVICES</p>

        <h2>What We Do</h2>

        <p className="services-subtitle">
          Solutions designed to move your business forward.
        </p>
      </div>

      <div className="services-container">
        {services.map((service) => (
          <ServiceCard
            key={service.number}
            number={service.number}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>

    </section>
  );
}

export default Services;