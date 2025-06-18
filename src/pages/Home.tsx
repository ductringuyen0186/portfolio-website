import { Link } from 'react-router-dom';
import { ArrowRight, Code, Database, Cloud, Github, ExternalLink } from 'lucide-react';
import { getFeaturedProjects } from '../data/projects';

const Home = () => {
  const featuredProjects = getFeaturedProjects();

  const skills = [
    { name: 'Backend Development', icon: Code, description: 'Go, Python, Node.js' },
    { name: 'Databases', icon: Database, description: 'PostgreSQL, Redis, MongoDB' },
    { name: 'Cloud & DevOps', icon: Cloud, description: 'AWS, Kubernetes, Docker' },
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>

        <div className="container-custom relative z-10">
          <div className="text-center space-y-12 animate-fade-in-up">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-full shadow-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                <span className="text-sm font-medium text-slate-700">Available for new opportunities</span>
              </div>

              <h1 className="text-6xl md:text-8xl font-bold text-slate-900 mb-8 text-shadow-sm">
                Hi, I'm{' '}
                <span className="text-gradient">
                  Duc Nguyen
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
                Backend Engineer specializing in{' '}
                <span className="font-semibold text-slate-800">distributed systems</span>,{' '}
                <span className="font-semibold text-slate-800">microservices</span>, and{' '}
                <span className="font-semibold text-slate-800">cloud architecture</span>.
                <br className="hidden md:block" />
                I build scalable solutions that power modern applications.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                to="/projects"
                className="btn-primary text-lg px-8 py-4 group"
              >
                <span>View My Work</span>
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                to="/about"
                className="btn-secondary text-lg px-8 py-4"
              >
                <span>About Me</span>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto pt-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900">5+</div>
                <div className="text-sm text-slate-600 font-medium">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900">20+</div>
                <div className="text-sm text-slate-600 font-medium">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900">10+</div>
                <div className="text-sm text-slate-600 font-medium">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900">99%</div>
                <div className="text-sm text-slate-600 font-medium">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-6">
              <span className="text-sm font-semibold text-blue-700">Core Expertise</span>
            </div>
            <h2 className="text-5xl font-bold text-slate-900 mb-6 text-shadow-sm">What I Do</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              I specialize in building robust backend systems and distributed architectures
              that scale with your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skill) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.name}
                  className="card-elevated p-10 text-center group hover:scale-105"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg shadow-blue-500/25 group-hover:shadow-xl group-hover:shadow-blue-500/30 transition-all duration-500">
                    <Icon size={36} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">{skill.name}</h3>
                  <p className="text-slate-600 leading-relaxed font-medium">{skill.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="section-padding bg-gradient-to-br from-slate-50 to-blue-50/30">
        <div className="container-custom">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-purple-50 border border-purple-200 rounded-full mb-6">
              <span className="text-sm font-semibold text-purple-700">Portfolio Highlights</span>
            </div>
            <h2 className="text-5xl font-bold text-slate-900 mb-6 text-shadow-sm">Featured Projects</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Here are some of my recent projects that showcase my skills and experience
              in building scalable, production-ready applications
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="card-elevated p-8 group hover:scale-105"
              >
                <div className="space-y-6">
                  {/* Project Header */}
                  <div className="flex items-start justify-between">
                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">{project.title}</h3>
                    <span className="tag tag-blue">
                      {project.category}
                    </span>
                  </div>

                  {/* Project Image Placeholder */}
                  <div className="w-full h-48 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl flex items-center justify-center group-hover:from-blue-50 group-hover:to-purple-50 transition-all duration-500">
                    <div className="text-slate-400 text-center">
                      <div className="w-16 h-16 bg-slate-300 rounded-xl mx-auto mb-3 flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-500">
                        <span className="text-2xl font-bold text-slate-500 group-hover:text-blue-600">
                          {project.title.charAt(0)}
                        </span>
                      </div>
                      <p className="text-sm font-medium">Project Preview</p>
                    </div>
                  </div>

                  <p className="text-slate-600 leading-relaxed">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="tag tag-gray"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="tag tag-gray">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Action Links */}
                  <div className="flex space-x-4 pt-4 border-t border-slate-100">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost group/link"
                    >
                      <Github size={18} className="group-hover/link:scale-110 transition-transform duration-300" />
                      <span>Code</span>
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-ghost group/link"
                      >
                        <ExternalLink size={18} className="group-hover/link:scale-110 transition-transform duration-300" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/projects"
              className="btn-primary text-lg px-8 py-4 group"
            >
              <span>View All Projects</span>
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
