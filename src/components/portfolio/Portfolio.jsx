import "./portfolio.css";

import IMG1 from "../../assets/Moorthy_portfolio.jpg";
import IMG2 from "../../assets/RubyCode Blog Project.jpg";
import IMG3 from "../../assets/mantra.png";
import IMG4 from "../../assets/Covid-19 Project.jpg";
import IMG5 from "../../assets/Terraform.png";
import IMG6 from "../../assets/Jenkins.jpg";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Personal Portfolio Website",
      img: IMG1,
      description:
        "I excel in React development, utilizing axios for HTTP requests and reactstrap for UI components.        ",
      technologies: "Html | CSS | Javascript | React Js",
      link: "https://moorthy.netlify.app/",
      github: "https://github.com/MOORTHYrm/portofolio",
    },
    {
      id: 2,
      title: "Covid-19 Tracking App",
      img: IMG4,
      description:
        "The COVID Tracking Project collects and publishes the most complete testing data available for all areas of the world.",
      technologies: "React ",
      link: "https://moorthycovidtracker.netlify.app/",
      github: "https://moorthycovidtracker.netlify.app/",
    },
    {
      id: 3,
      title: "React Calculator App",
      img: IMG2,
      description: "Simple React Calculator",
      technologies: "React ",
      link: "https://moorthycalculator.netlify.app/",
      github: "https://github.com/MOORTHYrm/react-calculator",
    },
    {
      id: 4,
      title: "MantraGoldCoatings",
      img: IMG3,
      description:
        " Transform your WordPress site into a stunning ecommerce platform.",
      technologies: "Wordpress | php | JavaScript | Mysql",
      link: "https://mantragoldcoatings.com/",
      github: "https://mantragoldcoatings.com/",
    },
    {
      id: 5,
      title: "Terraform Cloud Ec2-instances",
      img: IMG5,
      description:
        "Efficiently manage AWS EC2 instances using Terraform Cloud for streamlined infrastructure provisioning and management.",
      technologies: "Terraform | Terraform Cloud | Aws Ec2",
      github: "https://github.com/MOORTHYrm/Terraform-Cloud",
    },
    {
      id: 6,
      title: "Jenkins CI/CD",
      img: IMG6,
      description:
        "I deploy Jenkins CI/CD pipelines on AWS using Docker, ensuring seamless integration and deployment processes.",
      technologies: "Aws | Jenkins | Docker | Git",
      github: "https://github.com/MOORTHYrm/Jenkins-Projects",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio 
