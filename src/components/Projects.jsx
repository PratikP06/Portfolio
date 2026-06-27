
import ProjectCard from './ProjectCard';
import plannerImage from '../assets/planner.png';
import kharchapaniImage from '../assets/Kharchapani.png';
import iotImage from '../assets/IOT.png'; 
import hydrateImage from '../assets/hydrate.png';
const Projects = () => {
  const projectsData = [
    {
      title: 'FlowState.Ai',
      description: 'An AI-powered workspace designed to eliminate distractions and maximize deep, focused work.',
      image: plannerImage,
      techs: ['Next.js', 'PostgreSql', 'Supabase'],
      liveLink: 'https://ai-study-planner-lyart.vercel.app/',
      githubLink: 'https://github.com/PratikP06/Ai-Study-Planner'
    },
    {
      title: 'KharchaPani',
      description: 'A smart expense tracking platform that helps users manage spending, monitor budgets, and make better financial decisions.',
      image: kharchapaniImage,
      techs: ['Node.js', 'MongoDB', 'React.js', 'Express.js'],
      liveLink: 'https://kharchapani-bay.vercel.app/',
      githubLink: 'https://github.com/PratikP06/kharchapani'
    },
    {
      title : "Hydrate",
      description : "A hydration tracking Extension for IDE that helps users stay hydrated by sending reminders and tracking water intake.",
      image : hydrateImage,
      techs : [ "Javascript", "VSCE" , "Node.js" ],
      liveLink : "https://marketplace.visualstudio.com/items?itemName=PratikP06.hydrate&ssr=false#review-details",
      githubLink : "https://github.com/PratikP06/hydrate"
    },
    {
      title: 'AQI Dashboard',
      description: 'Real-time IoT monitoring system that collects environmental data using ESP32 sensors and visualizes insights through an interactive web dashboard.',
      image: iotImage,
      techs: ['IOT', 'Javascript', 'Firebase'],
      liveLink: 'https://pratikp06.github.io/AQI-monitoring-system/',
      githubLink: 'https://github.com/PratikP06/AQI-monitoring-system'
    }
  ];

  return (
    <section id="projects" className="py-section-gap px-margin">
      <div className="container">
        <div className="projects-header fade-up">
          <div>
            <h2 className="font-headline-lg projects-title">Featured Projects</h2>
            <p className="projects-desc font-body-md">A selection of my recent work in digital craft and engineering.</p>
          </div>
        </div>
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
