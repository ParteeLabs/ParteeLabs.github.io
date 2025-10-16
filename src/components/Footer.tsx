import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative py-12 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#4ECDC4]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-bl from-[#FF9A76]/10 to-transparent rounded-full blur-3xl"></div>
      </div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="mb-4 text-white">Partee Labs</h4>
            <p className="text-gray-400 text-sm">
              Building the future of open source.
            </p>
          </div>
          
          <div>
            <h5 className="text-sm mb-4 text-white">Projects</h5>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="https://github.com/orgs/ParteeLabs/repositories" className="hover:text-[#4ECDC4] transition-colors">All Repositories</a></li>
              <li><a href="https://github.com/ParteeLabs" className="hover:text-[#4ECDC4] transition-colors">Featured</a></li>
              <li><a href="https://github.com/ParteeLabs/community" className="hover:text-[#4ECDC4] transition-colors">Documentation</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="text-sm mb-4 text-white">Community</h5>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="https://github.com/ParteeLabs/community" className="hover:text-[#4ECDC4] transition-colors">Contributing Guide</a></li>
              <li><a href="https://github.com/ParteeLabs/community/blob/main/CODE_OF_CONDUCT.md" className="hover:text-[#4ECDC4] transition-colors">Code of Conduct</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="text-sm mb-4 text-white">Connect</h5>
            <div className="flex gap-4">
              <a href="https://github.com/ParteeLabs" className="text-gray-400 hover:text-[#4ECDC4] transition-all hover:scale-110">
                <Github className="h-5 w-5" />
              </a>
              {/* <a href="#" className="text-gray-400 hover:text-[#4ECDC4] transition-all hover:scale-110">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#4ECDC4] transition-all hover:scale-110">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#4ECDC4] transition-all hover:scale-110">
                <Mail className="h-5 w-5" />
              </a> */}
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>&copy; 2025 Partee Labs. Open source softwares under MIT License.</p>
        </div>
      </div>
    </footer>
  );
}
