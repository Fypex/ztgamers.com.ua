import { Card, CardContent } from "@/components/ui/card";
import { Target, Award, Heart, Zap } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: <Target className="w-8 h-8 text-zt-green" />,
      title: "Наша місія",
      description: "Розвиваємо кіберспортивну культуру в Житомирі та об'єднуємо геймерів різних рівнів"
    },
    {
      icon: <Award className="w-8 h-8 text-neon-purple" />,
      title: "Досягнення",
      description: "Організували понад 50 турнірів та змагань з різних кіберспортивних дисциплін"
    },
    {
      icon: <Heart className="w-8 h-8 text-zt-green-light" />,
      title: "Спільнота",
      description: "Активна спільнота з більш ніж 500 учасників різного віку та досвіду"
    },
    {
      icon: <Zap className="w-8 h-8 text-zt-green-dark" />,
      title: "Інновації",
      description: "Використовуємо сучасні технології для проведення онлайн та офлайн заходів"
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-zt-green">Про ZTGAMERS</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            ZTGAMERS — це більше ніж просто кіберспортивна організація. Ми створюємо простір, 
            де кожен геймер може розвиватися, знаходити однодумців та досягати нових висот 
            у світі кіберспорту.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-white border-2 border-border hover:border-zt-green transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 border-2 border-zt-green shadow-lg">
          <h3 className="text-2xl font-bold mb-6 text-center text-zt-green">
            Наша історія
          </h3>
          <div className="text-center text-muted-foreground leading-relaxed space-y-4">
            <p>
              ZTGAMERS була заснована у 2020 році групою ентузіастів, які хотіли створити 
              активну кіберспортивну спільноту в Житомирі. Почавши з невеликих локальних 
              турнірів, ми виросли в одну з провідних кіберспортивних організацій регіону.
            </p>
            <p>
              Сьогодні ми гордимося нашими досягненнями: понад 500 активних учасників, 
              десятки успішних турнірів та міцні партнерські відносини з провідними 
              організаціями України.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;