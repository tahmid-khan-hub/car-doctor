"use client"
import Banner from "./components/Banner";
import Features from "./components/Features";
import ServiceSection from "./components/ServiceSection";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <ServiceSection></ServiceSection>
      <Features></Features>
    </div>
  );
}
