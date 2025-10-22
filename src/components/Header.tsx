import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import ztLogo from "@/assets/ztgamers-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-zt-green/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src={ztLogo} alt="ZTGAMERS Logo" className="w-10 h-10 object-contain" />
            <div>
              <h1 className="text-2xl font-bold text-zt-green">ZTGAMERS</h1>
              <p className="text-sm text-muted-foreground">Об'єднуємо геймерів Житомира</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-zt-green transition-colors"
            >
              Про нас
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('clubs')}
              className="text-foreground hover:text-zt-green transition-colors"
            >
              Клуби-партнери
            </Button>
            {/* <Button 
              variant="ghost" 
              onClick={() => scrollToSection('social')}
              className="text-foreground hover:text-zt-green transition-colors"
            >
              Соціальні мережі
            </Button> */}
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('contacts')}
              className="text-foreground hover:text-zt-green transition-colors"
            >
              Контакти
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-zt-green/20">
            <div className="flex flex-col space-y-2 pt-4">
              <Button 
                variant="ghost" 
                onClick={() => scrollToSection('about')}
                className="justify-start text-foreground hover:text-zt-green"
              >
                Про нас
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => scrollToSection('clubs')}
                className="justify-start text-foreground hover:text-zt-green"
              >
                Клуби-партнери
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => scrollToSection('social')}
                className="justify-start text-foreground hover:text-zt-green"
              >
                Соціальні мережі
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => scrollToSection('contacts')}
                className="justify-start text-foreground hover:text-zt-green"
              >
                Контакти
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;