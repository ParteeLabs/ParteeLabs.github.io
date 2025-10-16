import exampleImage from 'figma:asset/org-logo.png';
import { Button } from './ui/button';
import { Github, ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#4ECDC4] via-[#45B8B0] to-[#3AA39A]">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-white/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#FF9A76]/30 to-transparent rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-gradient-to-tr from-[#FFB199]/20 to-transparent rounded-full blur-2xl animate-float"></div>
        <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-white/10 rounded-full blur-2xl animate-float-delayed"></div>
      </div>
      
      {/* Floating animated shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-20 h-20 bg-gradient-to-br from-white/30 to-transparent rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 border-4 border-white/20 rounded-lg animate-spin-slow"></div>
        <div className="absolute bottom-1/3 left-1/3 w-24 h-24 bg-gradient-to-br from-[#FF9A76]/20 to-transparent rounded-full animate-float-delayed"></div>
        <div className="absolute top-2/3 right-1/3 w-12 h-12 border-4 border-[#FF9A76]/30 animate-spin-reverse"></div>
        <div className="absolute bottom-1/4 left-1/2 w-6 h-6 bg-white/50 rounded-full animate-bounce-slow"></div>
        <div className="absolute top-1/2 right-1/4 w-8 h-8 bg-white/30 rotate-45 animate-wiggle"></div>
      </div>
      
      {/* Decorative geometric shapes */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-32 h-32 border-4 border-white rotate-45 rounded-lg"></div>
        <div className="absolute bottom-32 left-16 w-24 h-24 border-4 border-[#FF9A76] rotate-12 rounded-full"></div>
        <div className="absolute top-1/3 left-1/2 w-16 h-16 bg-white/20 rotate-45"></div>
        <div className="absolute bottom-1/4 right-1/3 w-20 h-20 border-4 border-white/30 rounded-lg"></div>
      </div>
      
      {/* Gradient mesh overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#4ECDC4]/50"></div>
      
      <div className="container mx-auto px-4 py-20 lg:py-32 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="mb-8 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF9A76]/30 to-transparent rounded-full blur-2xl scale-150"></div>
            <img 
              src={exampleImage} 
              alt="Partee Labs" 
              className="w-64 h-64 object-contain drop-shadow-2xl relative z-10"
            />
          </div>
          
          <h1 className="text-white mb-6 max-w-4xl drop-shadow-lg">
            Building the Future of Open Source
          </h1>
          
          <p className="text-white/90 text-xl max-w-2xl mb-10 drop-shadow-md">
            We're a community of passionate developers creating innovative, open-source solutions 
            that empower developers worldwide.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-[#4ECDC4] hover:bg-white/90 shadow-lg hover:shadow-xl transition-all hover:scale-105"
              onClick={() => window.open('https://github.com/ParteeLabs', '_blank')}
            >
              <Github className="mr-2 h-5 w-5" />
              View on GitHub
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm hover:scale-105 transition-all"
              onClick={() => window.open('https://github.com/orgs/ParteeLabs/projects?query=is%3Aopen', '_blank')}
            >
              Explore Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Bottom wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0,64 C360,20 720,20 1080,64 C1320,96 1440,96 1440,96 L1440,120 L0,120 Z" fill="white" opacity="0.1"/>
          <path d="M0,80 C360,40 720,40 1080,80 C1320,108 1440,108 1440,108 L1440,120 L0,120 Z" fill="white" opacity="0.05"/>
        </svg>
      </div>
    </section>
  );
}
