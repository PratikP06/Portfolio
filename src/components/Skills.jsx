import React from 'react';

const Skills = () => {
  const skillsData = [
    {
      title: 'Languages',
      icon: 'code',
      items: ['TypeScript', 'JavaScript', 'Java', 'SQL', 'C++']
    },
    {
      title: 'Web Development',
      icon: 'web',
      items: ['React', 'Next.js', 'Node.js', 'Express.js']
    },
    {
      title: 'Tools',
      icon: 'construction',
      items: ['MongoDB',
        'PostgreSQL',
        'Supabase',
        'Git',
        'REST APIs',
        'Vercel']
    }
  ];

  return (
    <section id="skills" className="py-section-gap bg-surface-container-low px-margin">
      <div className="container skills-wrapper fade-up">
        <h2 className="font-headline-lg text-primary" style={{ marginBottom: '64px' }}>Technical Expertise</h2>
        <div className="skills-grid">
          {skillsData.map((category, index) => (
            <div key={index} className="skill-card card-shadow">
              <div className="skill-icon">
                <span className="material-symbols-outlined">{category.icon}</span>
              </div>
              <h3 className="font-headline-md skill-card-title">{category.title}</h3>
              <div className="skill-items">
                {category.items.map((item, idx) => (
                  <span key={idx} className="skill-item font-label-sm">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
