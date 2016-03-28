import 'styles/ProjectsList.less';

import React, { PropTypes } from 'react';
import AltContainer from 'alt-container';
import ActivitiesStore from 'stores/ActivitiesStore';
import ActivitiesList from 'components/ActivitiesList';

const propTypes = {
  projects: PropTypes.array.isRequired,
};

const activitiesContainer = (project) => {
  const transform = () => ({
    activities: ActivitiesStore.ofProject(project.id),
    newActivity: (activity) => {
      const newActivity = Object.assign({}, activity, { idProject: project.id });
      return ActivitiesStore.create(newActivity);
    },
  });

  return (
    <AltContainer
      stores={{ ActivitiesStore }}
      transform={transform}
      component={ActivitiesList}
    />
  );
};

const ProjectsList = ({ projects }) => (
  <div className="projects-list">
    { projects.map(project => (
      <div className="project" key={project.id}>
        <div className="project__name">{ project.name }</div>

        { activitiesContainer(project) }
      </div>
    )) }
  </div>
);

ProjectsList.propTypes = propTypes;

export default ProjectsList;
