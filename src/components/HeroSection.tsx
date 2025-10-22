import { Button } from "@/components/ui/button";
import { ChevronDown, Trophy, Users } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import ztLogo from "@/assets/ztgamers-logo.png";

const HeroSection = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/90" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <div className="w-32 h-32 rounded-2xl flex items-center justify-center p-4">
              <img src={ztLogo} alt="ZTGAMERS Logo" className="w-full h-full object-contain" />
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="text-zt-green">ZTGAMERS</span>
          </h1>

          {/* Slogan */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Об'єднуємо геймерів Житомира
          </p>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Активна кіберспортивна спільнота, що розвиває ігрову культуру та підтримує талановитих геймерів нашого регіону
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-16">
            <div className="flex items-center space-x-2 text-zt-green">
              <Users className="w-6 h-6" />
              <span className="text-lg font-semibold">500+ Геймерів</span>
            </div>
            <div className="flex items-center space-x-2 text-neon-purple">
              <Trophy className="w-6 h-6" />
              <span className="text-lg font-semibold">50+ Турнірів</span>
            </div>
            <div className="flex items-center space-x-2 text-zt-green-light">
              <div className="w-6 h-6 flex items-center justify-center">
                <div className="w-4 h-4 bg-current rounded"></div>
              </div>
              <span className="text-lg font-semibold">10+ Ігор</span>
            </div>
          </div>

          {/* CTA Button */}
          <Button 
            onClick={scrollToAbout}
            size="lg"
            className="bg-zt-green hover:bg-zt-green-dark text-black font-bold px-8 py-6 text-lg neon-glow transition-all duration-300 hover:scale-105 border-2 border-zt-green"
          >
            Дізнатися більше
          </Button>
        </div>

        {/* Scroll indicator */}
      </div>
    </section>
  );
};

export default HeroSection;