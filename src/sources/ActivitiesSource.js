import ActivitiesActions from 'actions/ActivitiesActions';

const ActivitiesSource = {
  find: {
    remote() {
      return $.ajax({
        url: 'http://localhost:1337/activities/',
      });
    },

    loading: ActivitiesActions.find,
    success: ActivitiesActions.findSuccess,
    error: ActivitiesActions.findError,
  },
  create: {
    remote(state, newActivity) {
      return $.ajax({
        url: 'http://localhost:1337/activities/',
        method: 'POST',
        cache: true,
        data: JSON.stringify(newActivity),
        processData: false,
        contentType: 'application/json; charset=UTF-8',
      });
    },

    loading: ActivitiesActions.create,
    success: ActivitiesActions.createSuccess,
    error: ActivitiesActions.createError,
  },
};

export default ActivitiesSource;
