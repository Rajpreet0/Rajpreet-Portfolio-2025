import Footer from "@/components/Footer";
import LandingPage from "@/components/LandingPage";
import ProfilePage from "@/components/ProfilePage";
import TimelinePage from "@/components/TimelinePage";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-between items-center">
      <div className="w-full flex flex-col items-center">
        <LandingPage />
        <ProfilePage />
        <TimelinePage />
      </div>
      <Footer />
    </div>
  );
}
