import { useState, useMemo } from 'react';
import { projects } from '../data/projects';
import VideoPlayer from '../components/VideoPlayer';
import VideoPreview from '../components/VideoPreview';

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [videoPlayer, setVideoPlayer] = useState<{
    isOpen: boolean;
    videoUrl: string;
    title: string;
  }>({
    isOpen: false,
    videoUrl: '',
    title: '',
  });

  const openVideoPlayer = (videoUrl: string, title: string) => {
    setVideoPlayer({
      isOpen: true,
      videoUrl,
      title,
    });
  };

  const closeVideoPlayer = () => {
    setVideoPlayer({
      isOpen: false,
      videoUrl: '',
      title: '',
    });
  };

  // Filter projects based on search and filters
  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = !selectedCategory || project.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const categories = [
    { value: '', label: 'All Categories' },
    { value: 'web', label: 'Web' },
    { value: 'mobile', label: 'Mobile' },
    { value: 'backend', label: 'Backend' },
    { value: 'fullstack', label: 'Full Stack' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative section-padding bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>

        <div className="container-custom text-center relative z-10">
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-full shadow-sm mb-6">
              <span className="text-sm font-semibold text-slate-700">Portfolio Collection</span>
            </div>
            <h1 className="text-6xl font-bold text-slate-900 text-shadow-sm">My Projects</h1>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              A collection of projects showcasing my skills in{' '}
              <span className="font-semibold text-slate-800">backend development</span>,{' '}
              <span className="font-semibold text-slate-800">distributed systems</span>, and{' '}
              <span className="font-semibold text-slate-800">full-stack applications</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section-padding bg-white">
        <div className="container-custom space-y-12">
          {/* Filters */}
          <div className="card-elevated p-8">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Filter Projects</h3>
              <p className="text-slate-600">Find projects by technology, category, or search terms</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-3">Search</label>
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="input-field"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-3">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="input-field"
                >
                  {categories.map((category) => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Results */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <p className="text-slate-600 font-medium">
                Showing <span className="font-bold text-slate-900">{filteredProjects.length}</span> of <span className="font-bold text-slate-900">{projects.length}</span> projects
              </p>
              {(searchTerm || selectedCategory) && (
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('');
                  }}
                  className="btn-ghost text-sm"
                >
                  Clear Filters
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div key={project.id} className="card-elevated p-8 group hover:scale-105">
                  <div className="space-y-6">
                    {/* Project Header */}
                    <div className="flex items-start justify-between">
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">{project.title}</h3>
                      <span className="tag tag-blue">
                        {project.category}
                      </span>
                    </div>

                    {/* Project Image Placeholder */}
                    {project.demoUrl ? (
                      <VideoPreview
                        title={`${project.title} Demo`}
                        onClick={() => openVideoPlayer(project.demoUrl!, project.title)}
                        className="w-full h-40"
                      />
                    ) : (
                      <div className="w-full h-40 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl flex items-center justify-center group-hover:from-blue-50 group-hover:to-purple-50 transition-all duration-500">
                        <div className="text-slate-400 text-center">
                          <div className="w-12 h-12 bg-slate-300 rounded-lg mx-auto mb-2 flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-500">
                            <span className="text-lg font-bold text-slate-500 group-hover:text-blue-600">
                              {project.title.charAt(0)}
                            </span>
                          </div>
                          <p className="text-xs font-medium">Preview</p>
                        </div>
                      </div>
                    )}

                    <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">{project.description}</p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="tag tag-gray"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="tag tag-gray">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Action Links */}
                    <div className="flex space-x-3 pt-4 border-t border-slate-100">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-ghost text-sm group/link"
                        >
                          <span>View Code</span>
                        </a>
                      )}
                      {project.demoUrl && (
                        <button
                          onClick={() => openVideoPlayer(project.demoUrl!, project.title)}
                          className="btn-ghost text-sm group/link"
                        >
                          <span>Video Demo</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="col-span-full text-center py-20">
                <div className="w-24 h-24 bg-slate-100 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                  <span className="text-4xl">🔍</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">No Projects Found</h3>
                <p className="text-slate-600 mb-8 max-w-md mx-auto">
                  Try adjusting your search terms or filters to find what you're looking for.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('');
                  }}
                  className="btn-primary"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Video Player Modal */}
      <VideoPlayer
        videoUrl={videoPlayer.videoUrl}
        title={videoPlayer.title}
        isOpen={videoPlayer.isOpen}
        onClose={closeVideoPlayer}
      />
    </div>
  );
};

export default Projects;
