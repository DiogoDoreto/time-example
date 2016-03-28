import 'styles/app.less';

import React from 'react';
import AltContainer from 'alt-container';
import FilterStore from 'stores/FilterStore';
import FilterActions from 'actions/FilterActions';
import FilterBar from 'components/FilterBar';
import ProjectsStore from 'stores/ProjectsStore';
import ProjectsList from 'components/ProjectsList';
import ActivitiesStore from 'stores/ActivitiesStore';

class AppComponent extends React.Component {
  componentWillMount() {
    ProjectsStore.find();
    ActivitiesStore.find();
  }

  renderFilter() {
    const transform = () => ({
      projects: ProjectsStore.getState().projects,
      filter: FilterStore.getState(),
      changeFilter: FilterActions.changeFilter,
    });

    return (
      <AltContainer
        stores={{ FilterStore, ProjectsStore }}
        actions={{ FilterActions }}
        transform={transform}
        component={FilterBar}
      />
    );
  }

  renderProjectsList() {
    const transform = () => ({
      projects: ProjectsStore.getFilteredProjects(),
    });

    return (
      <AltContainer
        stores={{ ProjectsStore }}
        transform={transform}
        component={ProjectsList}
      />
    );
  }

  render() {
    return (
      <div>
        <header>
          <div className="uui-header blue">
            <nav>
              <div className="sidebar-toggle-box blue">
                <div title="Toggle Navigation">
                  <span className="fa fa-reorder" />
                </div>
              </div>
              <a href="#" className="brand-logo">TRT</a>
            </nav>
          </div>
        </header>
        <div className="container">
          { this.renderFilter() }
          { this.renderProjectsList() }
        </div>
      </div>
    );
  }
}

export default AppComponent;
