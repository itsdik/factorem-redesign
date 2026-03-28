"use client";
import Nav from "@/components/Nav";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import TheProblem from "@/components/sections/TheProblem";
import HowItWorks from "@/components/sections/HowItWorks";
import ComparisonTable from "@/components/sections/ComparisonTable";
import Capabilities from "@/components/sections/Capabilities";
import Testimonials from "@/components/sections/Testimonials";
import TheTeam from "@/components/sections/TheTeam";
import Objections from "@/components/sections/Objections";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <TrustBar />
      <TheProblem />
      <HowItWorks />
      <ComparisonTable />
      <Capabilities />
      <Testimonials />
      <TheTeam />
      <Objections />
      <FinalCTA />
      <Footer />
    </>
  );
}
