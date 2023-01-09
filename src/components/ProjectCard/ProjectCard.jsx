import "./ProjectCard.scss";

const ProjectCard = ({ name, tech, description, github, deploy }) => {
  return (
    <div className="project">
      <h2 className="project__name">{name}</h2>
      <h3 className="project__tech">{tech}</h3>
      <p className="project__description">{description}</p>
      <li className="project__links">
        <ul>
          <a href={deploy} target="_blank" className="project__link">
            Deploy
          </a>
        </ul>
        <ul>
          <a href={github} target="_blank" className="project__link">
            GitHub
          </a>
        </ul>
      </li>
    </div>
  );
};

export default ProjectCard;
