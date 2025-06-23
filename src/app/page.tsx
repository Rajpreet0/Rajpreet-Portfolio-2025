import LandingPage from "@/components/LandingPage";
import ProfilePage from "@/components/ProfilePage";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center">
      <LandingPage/>
      <ProfilePage/>
    </div>
  );
}
