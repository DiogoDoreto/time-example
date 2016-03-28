import 'styles/ActivitiesList.less';

import React, { PropTypes } from 'react';

const propTypes = {
  activities: PropTypes.array.isRequired,
  newActivity: PropTypes.func.isRequired,
};

class ActivitiesList extends React.Component {
  onSubmit(event) {
    event.preventDefault();

    const input = this.refs.newActivityInput;
    const title = input.value;

    this.props.newActivity({ title });
    input.value = '';
  }

  render() {
    const { activities } = this.props;

    return (
      <div className="activities-list">
        { activities.map(activity => (
          <div className="activity" key={activity.id}>
            <div className="activity__title">{ activity.title }</div>
          </div>
        )) }

        <form className="new-activity" onSubmit={event => this.onSubmit(event)}>
          <input
            ref="newActivityInput"
            type="text"
            className="new-activity__input"
            placeholder="+ Activity"
          />
        </form>
      </div>
    );
  }
}

ActivitiesList.propTypes = propTypes;

export default ActivitiesList;
