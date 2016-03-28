import React, { PropTypes } from 'react';

const ProjectsList = ({ projects }) => (
  <div className="project-list">
    { projects.map(project => (
      <div className="project" key={project.id}>
        <div className="project__name">{ project.name }</div>
      </div>
    )) }
  </div>
);

ProjectsList.propTypes = {
  projects: PropTypes.array.isRequired,
};

export default ProjectsList;
