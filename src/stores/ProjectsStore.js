import alt from 'components/Dispatcher';
import ProjectsActions from 'actions/ProjectsActions';
import ProjectsSource from 'sources/ProjectsSource';

class ProjectsStore {
  constructor() {
    this.isLoading = false;
    this.projects = [];

    this.registerAsync(ProjectsSource);
    this.bindActions(ProjectsActions);
  }

  onFind() {
    this.isLoading = true;
  }

  onFindSuccess(projects) {
    this.isLoading = false;
    this.projects = projects;
  }

  onFindError(data) {
    this.isLoading = false;
    console.error(data);
  }
}

export default alt.createStore(ProjectsStore, 'ProjectsStore');
