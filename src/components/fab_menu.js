import React from 'react';

const FABMenu = () => {
  return (
      <div>
        <a id="menu" className="waves-effect waves-light btn btn-floating"><i className="material-icons">menu</i></a>

        <div id="fabMenu" className="tap-target" data-activates="menu">
          <div className="tap-target-content">
            <h5>Title</h5>
            <p>A bunch of text</p>
          </div>
        </div>
      </div>
  );
};

export default FABMenu;