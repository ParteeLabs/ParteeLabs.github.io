import { Target, Code, Users, Sparkles } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const values = [
  {
    icon: Code,
    title: 'Innovation First',
    description: 'We push the boundaries of technology, creating cutting-edge solutions that solve real-world problems.',
  },
  {
    icon: Users,
    title: 'Community Driven',
    description: 'Our strength lies in collaboration. Every voice matters, every contribution counts.',
  },
  {
    icon: Target,
    title: 'Quality Code',
    description: 'We maintain high standards in everything we build, ensuring reliability and excellence.',
  },
  {
    icon: Sparkles,
    title: 'Open by Default',
    description: 'Transparency and accessibility are at our core. We believe in knowledge sharing.',
  },
];

export function Mission() {
  return (
    <section className="bg-gradient-to-b from-white via-gray-50 to-white py-20 lg:py-28 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-[#4ECDC4]/20 to-transparent rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-tl from-[#FF9A76]/20 to-transparent rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-[#4ECDC4]/5 to-transparent rounded-full animate-pulse"></div>
      </div>
      
      {/* Floating animated elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-gradient-to-br from-[#4ECDC4]/20 to-transparent rounded-full animate-float"></div>
        <div className="absolute top-1/2 right-1/3 w-20 h-20 border-3 border-[#FF9A76]/20 rounded-lg animate-spin-slow"></div>
        <div className="absolute bottom-1/3 left-1/3 w-12 h-12 bg-[#4ECDC4]/10 animate-spin-reverse"></div>
        <div className="absolute top-1/3 right-1/4 w-8 h-8 bg-[#FF9A76]/30 rounded-full animate-bounce-slow"></div>
        <div className="absolute bottom-1/4 right-1/2 w-14 h-14 border-2 border-[#4ECDC4]/20 rounded-full animate-float-delayed"></div>
        <div className="absolute top-3/4 left-1/2 w-10 h-10 bg-gradient-to-br from-[#FF9A76]/15 to-transparent rotate-45 animate-wiggle"></div>
      </div>
      
      {/* Geometric patterns */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-32 right-1/4 w-24 h-24 border-2 border-[#4ECDC4] rotate-12 rounded-lg"></div>
        <div className="absolute bottom-40 left-1/4 w-32 h-32 border-2 border-[#FF9A76] -rotate-12"></div>
        <div className="absolute top-1/2 right-20 w-16 h-16 bg-[#4ECDC4] rotate-45 rounded"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-[#4ECDC4] via-[#3DB5AC] to-[#FF9A76] bg-clip-text text-transparent drop-shadow-lg">
            Our Mission
          </h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto">
            To create high-quality, open-source software that empowers developers and makes 
            technology more accessible to everyone.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card 
              key={index} 
              className="border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 bg-white relative overflow-hidden group"
            >
              {/* Card gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#4ECDC4]/5 to-[#FF9A76]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <CardContent className="p-6 relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-[#4ECDC4] to-[#3AA39A] rounded-lg flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform">
                  <value.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
