"use client";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import LandingPage from "@/components/LandingPage";
import ProfilePage from "@/components/ProfilePage";
import ProjectsPage from "@/components/ProjectsPage";
import TimelinePage from "@/components/TimelinePage";
import { useRef } from "react";


export default function Home() {
  const profileRef = useRef<HTMLDivElement>(null);

  const scrollToProfile = () => {
    profileRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="w-full min-h-screen flex flex-col justify-between items-center">
      <div className="w-full flex flex-col items-center">
        <LandingPage scrollToProfile={scrollToProfile} />
        <div ref={profileRef} className="w-full"> 
          <ProfilePage />
        </div>
        <TimelinePage />
        <ProjectsPage/>
        <ContactSection/>
      </div>
      <Footer />
    </div>
  );
}
