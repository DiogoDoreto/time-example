import 'styles/app.less';

import React from 'react';
import AltContainer from 'alt-container';
import ProjectsStore from 'stores/ProjectsStore';
import ProjectsList from 'components/ProjectsList';

class AppComponent extends React.Component {
  componentWillMount() {
    ProjectsStore.find();
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
          <AltContainer store={ProjectsStore} component={ProjectsList} />
        </div>
      </div>
    );
  }
}

export default AppComponent;
