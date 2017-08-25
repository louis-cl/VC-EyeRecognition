import React from 'react';
import ReactDOM from 'react-dom';

import HeaderBar from "./components/header_bar";
import AboutSection from "./components/about_section";
import RepositoriesSection from './components/repositories_section';
import ContactSection from "./components/contact_section";
import SkillsSection from "./components/skills_section";
import FABMenu from "./components/fab_menu";

const App = () => {

  $(document).scroll(function () {
    const y = $(this).scrollTop();
    if (y > 150) {
      $('#fabMenu').fadeIn();
    } else {
      $('#fabMenu').fadeOut();
    }
  });

  return (
      <div>
        <HeaderBar/>
        <div className="container">
          <AboutSection/>
          <SkillsSection/>
          <RepositoriesSection/>
          <ContactSection/>
        </div>
        <FABMenu/>
      </div>
  );
};

ReactDOM.render(<App/>, document.querySelector('#body'));