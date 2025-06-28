import LandingPage from "@/components/LandingPage";
import ProfilePage from "@/components/ProfilePage";
import TimelinePage from "@/components/TimelinePage";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center">
      <LandingPage/>
      <ProfilePage/>
      <TimelinePage/>
    </div>
  );
}
