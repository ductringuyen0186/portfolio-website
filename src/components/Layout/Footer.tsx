import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/ductringuyen0186',
      icon: Github,
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/ductringuyen',
      icon: Linkedin,
    },
    {
      name: 'Email',
      href: 'mailto:duc.nguyen@example.com',
      icon: Mail,
    },
  ];

  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>

      <div className="container-custom relative z-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/25">
                <span className="text-white font-bold text-lg">DN</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-white">Duc Nguyen</span>
                <span className="text-xs text-slate-400 font-medium">Software Engineer • Seattle, WA</span>
              </div>
            </div>
            <p className="text-slate-300 text-sm max-w-md leading-relaxed">
              Software engineer specializing in full-stack development and modern web applications.
              Passionate about creating scalable solutions that deliver exceptional user experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="font-bold text-lg text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-slate-300 hover:text-blue-400 transition-all duration-300 text-sm font-medium hover:translate-x-1 inline-block">
                  Home
                </a>
              </li>
              <li>
                <a href="/projects" className="text-slate-300 hover:text-blue-400 transition-all duration-300 text-sm font-medium hover:translate-x-1 inline-block">
                  Projects
                </a>
              </li>
              <li>
                <a href="/about" className="text-slate-300 hover:text-blue-400 transition-all duration-300 text-sm font-medium hover:translate-x-1 inline-block">
                  About
                </a>
              </li>
              <li>
                <a href="/resume.pdf" target="_blank" className="text-slate-300 hover:text-blue-400 transition-all duration-300 text-sm font-medium hover:translate-x-1 inline-block">
                  Resume
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-6">
            <h3 className="font-bold text-lg text-white">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-slate-800 rounded-xl hover:bg-slate-700 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl group"
                    aria-label={link.name}
                  >
                    <Icon size={20} className="text-slate-300 group-hover:text-blue-400 transition-colors duration-300" />
                  </a>
                );
              })}
            </div>
            <p className="text-slate-400 text-sm">
              Let's build something amazing together
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-slate-400 text-sm font-medium">
              © {currentYear} Duc Nguyen. All rights reserved.
            </p>
            <p className="text-slate-400 text-sm flex items-center space-x-2">
              <span>Made with</span>
              <Heart size={16} className="text-red-500 animate-pulse" />
              <span>using React & TypeScript</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
