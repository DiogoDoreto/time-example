import alt from 'components/Dispatcher';
import ActivitiesActions from 'actions/ActivitiesActions';
import ActivitiesSource from 'sources/ActivitiesSource';

class ActivitiesStore {
  constructor() {
    this.isLoading = false;
    this.activities = [];

    this.registerAsync(ActivitiesSource);
    this.bindActions(ActivitiesActions);

    this.exportPublicMethods({
      ofProject: this.ofProject,
    });
  }

  onFind() {
    this.isLoading = true;
  }

  onFindSuccess(activities) {
    this.isLoading = false;
    this.activities = activities;
  }

  onFindError(data) {
    this.isLoading = false;
    console.error(data);
  }

  onCreate() {
    this.isLoading = true;
  }

  onCreateSuccess(newActivity) {
    this.isLoading = false;
    this.activities = this.activities.concat([newActivity]);
  }

  onCreateError(data) {
    this.isLoading = false;
    console.error(data);
  }

  ofProject(idProject) {
    return this.getState().activities
      .filter(activity => activity.idProject === idProject);
  }
}

export default alt.createStore(ActivitiesStore, 'ActivitiesStore');
