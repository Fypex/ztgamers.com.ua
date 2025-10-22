import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Facebook, Instagram, Globe } from "lucide-react";

const PartnerClubsSection = () => {
  const clubs = [
    {
      name: "Cyberion",
      description: "Кіберспортивний клуб та ігрова зона в центрі Житомира",
      website: "https://cyberion.ua",
      telegram: "https://t.me/+HGu1Tdq5jLIyNDE6",
      instagram: "https://www.instagram.com/cyberion.ua",
      logo: "./NCCA.png"
    }
  ];

  return (
    <section id="clubs" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-zt-green">Клуби-партнери</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ми співпрацюємо з найкращими кіберспортивними клубами Житомира
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {clubs.map((club, index) => (
            <Card 
              key={index}
              className="bg-white border-2 border-border hover:border-zt-green transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <CardContent className="p-8">
                {/* Club Logo */}
                <div className="bg-secondary/50 rounded-xl p-6 mb-6 flex items-center justify-center h-32">
                  <img 
                    src={club.logo} 
                    alt={`${club.name} Logo`}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                {/* Club Name */}
                <h3 className="text-2xl font-bold mb-3 text-center text-foreground">
                  {club.name}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-center mb-6">
                  {club.description}
                </p>

                {/* Social Links */}
                <div className="flex flex-wrap justify-center gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(club.website, '_blank')}
                    className="border-zt-green text-zt-green hover:bg-zt-green hover:text-white transition-colors"
                  >
                    <Globe className="w-4 h-4 mr-2" />
                    Сайт
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(club.telegram, '_blank')}
                    className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#2f2cffff" width="800px" height="800px" viewBox="0 0 32 32">
                      <path d="M16 0.5c-8.563 0-15.5 6.938-15.5 15.5s6.938 15.5 15.5 15.5c8.563 0 15.5-6.938 15.5-15.5s-6.938-15.5-15.5-15.5zM23.613 11.119l-2.544 11.988c-0.188 0.85-0.694 1.056-1.4 0.656l-3.875-2.856-1.869 1.8c-0.206 0.206-0.381 0.381-0.781 0.381l0.275-3.944 7.181-6.488c0.313-0.275-0.069-0.431-0.482-0.156l-8.875 5.587-3.825-1.194c-0.831-0.262-0.85-0.831 0.175-1.231l14.944-5.763c0.694-0.25 1.3 0.169 1.075 1.219z"/>
                    </svg>
                    Telegram
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(club.instagram, '_blank')}
                    className="border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white transition-colors"
                  >
                    <Instagram className="w-4 h-4 mr-2" />
                    Instagram
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerClubsSection;
