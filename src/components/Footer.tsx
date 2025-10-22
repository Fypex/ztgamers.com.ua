import { Gamepad2 } from "lucide-react";

import ztLogo from "@/assets/ztgamers-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-darker border-t border-zt-green/20 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center">
                <img src={ztLogo} alt="ZTGAMERS Logo" className="w-8 h-8 object-contain" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-zt-green">ZTGAMERS</h3>
                <p className="text-sm text-muted-foreground">Кіберспорт Житомира</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Об'єднуємо геймерів Житомира та розвиваємо кіберспортивну культуру в нашому регіоні. 
            Приєднуйтесь до нас та станьте частиною великої спільноти!
          </p>

          {/* Divider */}
          <div className="w-24 h-px bg-zt-green mx-auto mb-8"></div>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            <p>&copy; {currentYear} ZTGAMERS. Всі права захищені.</p>
            <p className="mt-2">
              Створено з ❤️ для кіберспортивної спільноти Житомира
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;