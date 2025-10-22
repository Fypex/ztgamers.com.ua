import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Facebook, Instagram, Youtube, Users, Building2 } from "lucide-react";

const SocialSection = () => {
  const socialLinks = [
    {
      name: "Facebook",
      icon: <Facebook className="w-6 h-6" />,
      description: "Стежте за нашими новинами та анонсами",
      url: "#",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30"
    },
    {
      name: "Instagram", 
      icon: <Instagram className="w-6 h-6" />,
      description: "Фото та відео з наших заходів",
      url: "#",
      color: "text-pink-500",
      bgColor: "bg-pink-500/10", 
      borderColor: "border-pink-500/30"
    },
    {
      name: "TikTok",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-.88-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
        </svg>
      ),
      description: "Короткі та цікаві відео про кіберспорт",
      url: "#",
      color: "text-red-500",
      bgColor: "bg-red-500/10",
      borderColor: "border-red-500/30"
    },
    {
      name: "YouTube",
      icon: <Youtube className="w-6 h-6" />,
      description: "Стріми турнірів та навчальний контент",
      url: "#", 
      color: "text-red-600",
      bgColor: "bg-red-600/10",
      borderColor: "border-red-600/30"
    }
  ];

  const partnerLinks = [
    {
      name: "Федерація кіберспорту України",
      icon: <Users className="w-6 h-6" />,
      description: "Офіційна федерація кіберспорту",
      url: "https://uesf.org.ua",
      color: "text-zt-green",
      bgColor: "bg-zt-green/10",
      borderColor: "border-zt-green/30",
      image: './hd-black.png'
    },
    {
      name: "Житомирська міська рада",
      icon: <Building2 className="w-6 h-6" />,
      description: "Офіційний сайт міської ради",
      url: "https://zt-rada.gov.ua",
      color: "text-zt-green-light",
      bgColor: "bg-zt-green-light/10", 
      borderColor: "border-zt-green-light/30",
      image: './logo-usms.png'
    }
  ];

  return (
    <section id="social" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-zt-green">Соціальні мережі</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Приєднуйтесь до нашої спільноти в соціальних мережах та стежте за останніми новинами кіберспорту
          </p>
        </div> */}

        {/* Social Media Links */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {socialLinks.map((social, index) => (
            <Card 
              key={index}
              className={`bg-card/50 backdrop-blur-sm border ${social.borderColor} hover:scale-105 transition-all duration-300 cursor-pointer group`}
            >
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 ${social.bgColor} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <span className={social.color}>
                    {social.icon}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  {social.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {social.description}
                </p>
                <Button 
                  variant="outline" 
                  size="sm"
                  className={`${social.borderColor} ${social.color} hover:${social.bgColor} transition-colors`}
                >
                  Перейти <ExternalLink className="w-4 h-4 ml-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div> */}

        {/* Partners Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-6">
            <span className="text-zt-green">Наші партнери</span>
          </h3>
          <p className="text-lg text-muted-foreground">
            Ми працюємо разом з провідними організаціями для розвитку кіберспорту в Україні
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {partnerLinks.map((partner, index) => (
            <Card 
              key={index}
              className={`bg-card/50 backdrop-blur-sm border ${partner.borderColor} hover:scale-105 transition-all duration-300 cursor-pointer group`}
              onClick={() => window.open(partner.url, '_blank')}
            >
              <CardContent className="p-8 text-center">
                <div className={`h-20 ${partner.bgColor} overflow-hidden rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="bg-secondary/50 rounded-xl p-6 flex items-center justify-center h-32">
                  <img 
                    src={partner.image} 
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {partner.name}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {partner.description}
                </p>
                <Button 
                  variant="outline"
                  className={`${partner.borderColor} ${partner.color} hover:${partner.bgColor} transition-colors`}
                >
                  Відвідати сайт <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialSection;