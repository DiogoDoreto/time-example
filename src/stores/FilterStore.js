import _ from 'lodash';
import alt from 'components/Dispatcher';
import FilterActions from 'actions/FilterActions';
import ProjectsStore from 'stores/ProjectsStore';

class FilterStore {
  constructor() {
    this.projects = null;

    this.bindActions(FilterActions);
  }

  onChangeFilter([action, idProject]) {
    const allProjects = ProjectsStore.getState().projects;
    let filter = this.projects || _.map(allProjects, 'id');

    if (action === 'remove') {
      filter = _.without(filter, idProject);
    } else {
      filter = filter.concat([idProject]);
    }

    if (filter.length === allProjects.length) {
      this.projects = null;
    } else {
      this.projects = filter;
    }
  }
}

export default alt.createStore(FilterStore, 'FilterStore');
