import { Avatar, AvatarFallback } from './ui/avatar';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Github, Linkedin, Globe } from 'lucide-react';

type Member = {
  name: string;
  role: string;
  initials: string;
  bio: string;
  links: {
    github: string;
    linkedin?: string;
    website?: string;
  };
};

const members: Member[] = [
  {
    name: 'Richard Le',
    role: 'Core Maintainer',
    initials: 'RL',
    bio: 'A community of engineers crafting open-source tools for data, distributed systems, and Web3.',
    links: { github: 'https://github.com/0xRichardL', linkedin: 'https://www.linkedin.com/in/0xrichardl/' },
  },
  {
    name: 'Sang Tran',
    role: 'System Developer',
    initials: 'ST',
    bio: 'Expert in distributed systems and cloud architecture',
    links: { github: 'https://github.com/sangtran-t' },
  },
  {
    name: 'Trung Pham',
    role: 'System Developer',
    initials: 'TP',
    bio: 'Expert in distributed systems and cloud architecture',
    links: { github: 'https://github.com/trung-maxp'},
  },
];

export function Members() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Complex gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F8FFFE] via-white to-[#FFF5F2]"></div>
      
      {/* Animated gradient orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-gradient-to-br from-[#4ECDC4]/10 to-transparent rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-[#FF9A76]/10 to-transparent rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-[#4ECDC4]/5 via-transparent to-[#FF9A76]/5 rounded-full blur-3xl animate-pulse"></div>
      </div>
      
      {/* Floating animated shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-gradient-to-br from-[#4ECDC4]/15 to-transparent rounded-full animate-float-delayed"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 border-3 border-[#FF9A76]/15 rounded-lg animate-spin-slow"></div>
        <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-gradient-to-br from-[#FF9A76]/10 to-transparent rounded-full animate-float"></div>
        <div className="absolute top-2/3 right-1/3 w-14 h-14 border-2 border-[#4ECDC4]/15 animate-spin-reverse"></div>
        <div className="absolute bottom-1/3 left-1/2 w-10 h-10 bg-[#4ECDC4]/20 rounded-full animate-bounce-slow"></div>
        <div className="absolute top-1/2 right-1/2 w-12 h-12 bg-[#FF9A76]/15 rotate-45 animate-wiggle"></div>
        <div className="absolute bottom-2/3 right-1/4 w-8 h-8 bg-white/30 rounded-full animate-pulse-slow"></div>
      </div>
      
      {/* Decorative dots pattern */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'radial-gradient(circle, #4ECDC4 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}></div>
      
      {/* Geometric accents */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-40 right-1/3 w-20 h-20 border-4 border-[#FF9A76] rounded-full"></div>
        <div className="absolute bottom-60 left-1/4 w-28 h-28 border-4 border-[#4ECDC4] rotate-45 rounded-lg"></div>
        <div className="absolute top-1/3 left-10 w-16 h-16 bg-gradient-to-br from-[#4ECDC4] to-[#FF9A76] rotate-12 rounded"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-[#FF9A76] via-[#4ECDC4] to-[#3DB5AC] bg-clip-text text-transparent drop-shadow-lg">
            Our Team
          </h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto">
            Meet the passionate developers who make our open source community thrive.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((member, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-xl transition-all hover:-translate-y-1 bg-white/80 backdrop-blur-sm relative overflow-hidden group">
              {/* Card gradient accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#4ECDC4] via-[#FF9A76] to-[#4ECDC4] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#4ECDC4] to-[#FF9A76] rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
                    <Avatar className="h-16 w-16 border-4 border-white shadow-lg relative z-10">
                      <AvatarFallback className="bg-gradient-to-br from-[#FF9A76] to-[#FF7A56] text-white">
                        {member.initials}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-gray-900 mb-1">{member.name}</h3>
                    <Badge variant="secondary" className="bg-gradient-to-r from-[#4ECDC4]/10 to-[#4ECDC4]/20 text-[#4ECDC4] mb-2 border border-[#4ECDC4]/20">
                      {member.role}
                    </Badge>
                    <p className="text-gray-600 text-sm">{member.bio}</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="text-sm text-gray-500">
                  </div>
                  <div className="flex gap-2">
                    {member.links.github && (
                      <a href={member.links.github} className="text-gray-400 hover:text-[#4ECDC4] transition-colors">
                        <Github className="h-4 w-4" />
                      </a>
                    )}
                    {member.links.linkedin && (
                      <a href={member.links.linkedin} className="text-gray-400 hover:text-[#4ECDC4] transition-colors">
                        <Linkedin className="h-4 w-4" />
                      </a>
                    )}
                    {member.links.website && (
                      <a href={member.links.website} className="text-gray-400 hover:text-[#4ECDC4] transition-colors">
                        <Globe className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
