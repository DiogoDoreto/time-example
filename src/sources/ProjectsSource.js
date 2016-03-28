import ProjectsActions from 'actions/ProjectsActions';

const ProjectsSource = {
  find: {
    remote() {
      return $.ajax({
        url: 'http://localhost:1337/projects/',
        jsonp: 'callback',
        dataType: 'jsonp',
        cache: true,
      });
    },

    loading: ProjectsActions.find,
    success: ProjectsActions.findSuccess,
    error: ProjectsActions.findError,
  },
};

export default ProjectsSource;
