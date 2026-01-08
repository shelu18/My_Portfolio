import React from 'react'

function Skills() {
  const skills = [
    { name: 'React Native', icon: 'bxl-react', category: 'mobile' },
    { name: 'React.js', icon: 'bxl-react', category: 'frontend' },
    { name: 'TypeScript', icon: 'bxl-typescript', category: 'language' },
    { name: 'JavaScript', icon: 'bxl-javascript', category: 'language' },
    { name: 'Node.js', icon: 'bxl-nodejs', category: 'backend' },
    { name: 'Express.js', icon: 'bxs-server', category: 'backend' },
    { name: 'MongoDB', icon: 'bxl-mongodb', category: 'database' },
    { name: 'MySQL', icon: 'bxs-data', category: 'database' },
    { name: 'Git', icon: 'bxl-git', category: 'tools' },
    { name: 'GitHub', icon: 'bxl-github', category: 'tools' },
    { name: 'REST APIs', icon: 'bx-transfer', category: 'backend' },
    { name: 'Socket.IO', icon: 'bx-podcast', category: 'backend' },
    { name: 'Redux', icon: 'bx-data', category: 'frontend' },
    { name: 'Zustand', icon: 'bx-store', category: 'frontend' },
    { name: 'Firebase', icon: 'bxs-cloud', category: 'backend' },
    { name: 'Expo', icon: 'bx-mobile', category: 'mobile' },
    { name: 'React Navigation', icon: 'bx-navigation', category: 'mobile' },
    { name: 'Axios', icon: 'bx-transfer-alt', category: 'tools' },
    { name: 'JWT Auth', icon: 'bx-lock-alt', category: 'backend' },
    { name: 'Docker', icon: 'bxl-docker', category: 'tools' },
    { name: 'Postman', icon: 'bx-send', category: 'tools' },
    { name: 'VS Code', icon: 'bxl-visual-studio', category: 'tools' },
    { name: 'EAS Build', icon: 'bx-package', category: 'mobile' },
    { name: 'C++', icon: 'bx-code-curly', category: 'language' },
    { name: 'DSA', icon: 'bx-network-chart', category: 'core' },
    { name: 'Vue.js', icon: 'bxl-vuejs', category: 'frontend' },
  ]

  return (
    <section className="skills" id="skills">
      <h2 className="heading">My <span>Skills</span></h2>
      <p className="skills-subtitle">Technologies & Tools I Work With</p>
      
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-box" data-category={skill.category}>
            <i className={`bx ${skill.icon} skill-icon`}></i>
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
