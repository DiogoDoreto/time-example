import 'styles/FilterBar.less';

import React, { PropTypes } from 'react';

const propTypes = {
  projects: PropTypes.array.isRequired,
  filter: PropTypes.object.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

class FilterBar extends React.Component {
  renderProjectButton(project) {
    const filter = this.props.filter.projects;
    const isChecked = !filter || filter.indexOf(project.id) >= 0;

    let className = 'btn ';
    if (isChecked) {
      className += 'btn-primary';
    } else {
      className += 'btn-default';
    }

    const toggleFilter = () => {
      const action = isChecked ? 'remove' : 'add';
      this.props.changeFilter(action, project.id);
    };

    return (
      <button className={className} key={project.id} onClick={toggleFilter}>
        { project.name }
      </button>
    );
  }

  render() {
    return (
      <div className="filter-bar">
        Filter:
        { this.props.projects.map(project => this.renderProjectButton(project)) }
      </div>
    );
  }
}

FilterBar.propTypes = propTypes;

export default FilterBar;
