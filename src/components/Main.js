import 'styles/app.less';

import React from 'react';

const AppComponent = () => (
  <header>
    <div className="uui-header blue">
      <nav>
        <div className="sidebar-toggle-box blue">
          <div title="Toggle Navigation" className="sidebar-tooltip">
            <span className="fa fa-reorder" />
          </div>
        </div>
        <a href="#" className="brand-logo">TRT</a>
      </nav>
    </div>
  </header>
);

export default AppComponent;
