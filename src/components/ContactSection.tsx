import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail } from "lucide-react";

const ContactSection = () => {

  return (
    <section id="contacts" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-zt-green">Контакти</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Є питання чи пропозиції? Зв'яжіться з нами!
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="bg-white border-2 border-zt-green shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center justify-center space-x-3 text-foreground text-2xl">
                <Mail className="w-8 h-8 text-zt-green" />
                <span>Email для зв'язку</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-6 text-lg">
                Надішліть нам листа, і ми обов'язково відповімо протягом 24 годин
              </p>
              <Button 
                size="lg"
                className="bg-zt-green hover:bg-zt-green-dark text-white font-bold px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
                onClick={() => window.location.href = 'mailto:info@ztgamers.ua'}
              >
                <Mail className="w-5 h-5 mr-2" />
                info@ztgamers.ua
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;