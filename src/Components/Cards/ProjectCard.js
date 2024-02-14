import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ projects, setOpenModal }) => {
  const handleProjectClick = (project) => {
    const gitHubUrl = `https://github.com/Avik-gupta/${project.repoName}`;

    window.location.href = gitHubUrl;
  };

  return (
    <div className="card1">
      <img src={projects?.image} />
      <div className="tags">
        {projects.tags?.map((projects, index) => (
          <span className="tag">{projects}</span>
        ))}
      </div>

      <div className="details">
        <div className="title1 clickable">{projects?.title}</div>
        <div className="date1">{projects?.date}</div>
        <button className="button" onClick={() => handleProjectClick(projects)}>
          Source Code
        </button>

        {/* <div className='description1'>{projects?.description}</div> */}
      </div>
    </div>
  );
};

export default ProjectCard;
