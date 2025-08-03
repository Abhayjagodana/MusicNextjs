

import Card from "../Componet/3Dcard";
import FeatureCourse from "../Componet/FeatureCourse";
import Footer from "../Componet/Footer";
import InfinityCard from "../Componet/Infinity-Card";
import Instructer from "../Componet/Instructer";
import Metros from "../Componet/Metros";
import StickyScoller from "../Componet/StickyScoller";
import HeroSection from "../Componet/ui/HeroSection";
import UpcominWebinar from "../Componet/UpcominWebinar";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96]    text-white">

      <HeroSection />
      <FeatureCourse />
      <StickyScoller />
      <InfinityCard />
      <UpcominWebinar />
      <Instructer />
      <Card></Card>
      <Metros></Metros>
     <Footer/>
    
    </main>
  );
}
