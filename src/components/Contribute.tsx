import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { GitFork, MessageSquare, BookOpen, Award } from 'lucide-react';

const steps = [
  {
    icon: GitFork,
    title: 'Fork & Clone',
    description: 'Start by forking our repositories and cloning them to your local machine.',
  },
  {
    icon: BookOpen,
    title: 'Read the Docs',
    description: 'Check our contribution guidelines and coding standards to get started.',
  },
  {
    icon: MessageSquare,
    title: 'Join the Discussion',
    description: 'Connect with our community on GitHub Discussions.',
  },
  {
    icon: Award,
    title: 'Make Your Mark',
    description: 'Submit your first PR and become part of our growing community.',
  },
];

export function Contribute() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Multi-layered gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#4ECDC4] via-[#3DB5AC] to-[#2DA39A]"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-[#FF9A76]/20 via-transparent to-transparent"></div>
      
      {/* Animated gradient orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-white/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#FF9A76]/40 to-transparent rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-0 left-1/3 w-[700px] h-[700px] bg-gradient-to-tr from-[#FFB199]/30 to-transparent rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-white/10 rounded-full blur-2xl animate-float-delayed"></div>
      </div>
      
      {/* Floating animated shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-24 h-24 bg-white/20 rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-1/3 w-16 h-16 border-4 border-white/30 rounded-lg animate-spin-slow"></div>
        <div className="absolute bottom-1/3 left-1/3 w-20 h-20 bg-[#FF9A76]/30 rounded-full animate-float-delayed"></div>
        <div className="absolute top-2/3 right-1/4 w-14 h-14 border-3 border-[#FFB199]/40 animate-spin-reverse"></div>
        <div className="absolute bottom-1/4 left-1/2 w-10 h-10 bg-white/40 rounded-full animate-bounce-slow"></div>
        <div className="absolute top-1/2 right-1/2 w-12 h-12 bg-white/25 rotate-45 animate-wiggle"></div>
        <div className="absolute bottom-1/2 right-1/3 w-18 h-18 border-2 border-white/20 rounded-full animate-float"></div>
        <div className="absolute top-3/4 left-1/3 w-8 h-8 bg-[#FF9A76]/40 animate-pulse-slow"></div>
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
        backgroundSize: '100px 100px'
      }}></div>
      
      {/* Geometric decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-32 left-20 w-32 h-32 border-4 border-white rotate-45 rounded-lg"></div>
        <div className="absolute bottom-40 right-32 w-40 h-40 border-4 border-[#FF9A76] rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white/20 rotate-12 rounded"></div>
        <div className="absolute bottom-1/4 left-1/4 w-20 h-20 border-4 border-white/30 -rotate-12"></div>
        <div className="absolute top-1/4 right-1/3 w-28 h-28 border-4 border-[#FF9A76]/50 rotate-45"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-[#FFD6C9] to-[#FF9A76] bg-clip-text text-transparent drop-shadow-2xl">
            Join Our Community
          </h2>
          <p className="text-white/90 text-xl max-w-3xl mx-auto">
            We're always looking for talented developers to join our mission. 
            Whether you're a seasoned contributor or just getting started, there's a place for you here.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, index) => (
            <Card key={index} className="border-none bg-white/95 backdrop-blur">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 bg-[#FF9A76] rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 lg:p-12 border border-white/20">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-white text-xl mb-4 font-bold">
              Ready to Make an Impact?
            </h3>
            <p className="text-white/90 text-lg mb-8">
              Join hundreds of developers who are already contributing to our projects. 
              Your code, ideas, and feedback can help shape the future of our community.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-[#4ECDC4] hover:bg-white/90 shadow-lg"
                onClick={() => window.open('https://github.com/ParteeLabs', '_blank')}
              >
                Start Contributing
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-transparent border-2 border-white text-white hover:bg-white/10"
                onClick={() => window.open('https://github.com/orgs/ParteeLabs/repositories', '_blank')}
              >
                View Open Repositories
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
