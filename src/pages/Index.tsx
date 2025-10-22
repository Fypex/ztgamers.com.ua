import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PartnerClubsSection from "@/components/PartnerClubsSection";
import SocialSection from "@/components/SocialSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <PartnerClubsSection />
        <SocialSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
