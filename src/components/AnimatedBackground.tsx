export function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating circles */}
      <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-gradient-to-br from-[#4ECDC4]/30 to-[#4ECDC4]/10 rounded-full animate-float"></div>
      <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-gradient-to-br from-[#FF9A76]/20 to-transparent rounded-full animate-float-delayed"></div>
      <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-gradient-to-br from-white/20 to-transparent rounded-full animate-float-slow"></div>
      
      {/* Rotating squares */}
      <div className="absolute top-1/2 right-1/3 w-12 h-12 border-2 border-[#4ECDC4]/30 animate-spin-slow"></div>
      <div className="absolute bottom-1/3 right-1/4 w-16 h-16 border-2 border-[#FF9A76]/20 rounded-lg animate-spin-reverse"></div>
      
      {/* Floating triangles */}
      <div className="absolute top-2/3 left-1/4 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[35px] border-b-[#4ECDC4]/20 animate-float-delayed"></div>
      <div className="absolute top-1/4 right-1/3 w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[26px] border-b-[#FF9A76]/30 animate-float"></div>
      
      {/* Pulsing dots */}
      <div className="absolute top-1/3 left-1/2 w-3 h-3 bg-[#4ECDC4] rounded-full animate-pulse-slow"></div>
      <div className="absolute bottom-1/2 right-1/2 w-4 h-4 bg-[#FF9A76] rounded-full animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-3/4 right-1/3 w-2 h-2 bg-white rounded-full animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
    </div>
  );
}
