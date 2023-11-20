import React from 'react';
import './skills.css';
import ITSkills from './ITSkills';
import SoftwareTesting from './SoftwareTesting'; 
import IDE from './IDE';
import DataAnalytics from './DataAnalytics';
import BusinessInformatics from './BusinessInformatics';
import Languages from './Languages';

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My Technical Expertise</span>

      <div className="skills__container container grid">
        <SoftwareTesting />
        <IDE />
        <DataAnalytics />
        <BusinessInformatics />
        <Languages />
        <ITSkills />
      </div>
    </section>
  );
};

export default Skills;
