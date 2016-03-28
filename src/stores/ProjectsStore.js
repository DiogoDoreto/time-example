import alt from 'components/Dispatcher';
import ProjectsActions from 'actions/ProjectsActions';
import ProjectsSource from 'sources/ProjectsSource';
import FilterStore from 'stores/FilterStore';
import FilterActions from 'actions/FilterActions';

class ProjectsStore {
  constructor() {
    this.isLoading = false;
    this.projects = [];

    this.registerAsync(ProjectsSource);
    this.bindActions(ProjectsActions);
    this.bindListeners({
      changeFilter: FilterActions.changeFilter,
    });
    this.exportPublicMethods({
      getFilteredProjects: this.getFilteredProjects,
    });
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

  changeFilter() {}

  getFilteredProjects() {
    const filter = FilterStore.getState().projects;
    const projects = this.getState().projects;

    if (!filter) {
      return projects;
    }

    return projects.filter(project => filter.indexOf(project.id) >= 0);
  }
}

export default alt.createStore(ProjectsStore, 'ProjectsStore');
