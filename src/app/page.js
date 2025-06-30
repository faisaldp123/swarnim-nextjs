'use client';
import Hero from '../../components/Hero';
import Section from '../../components/Section';
import Footer from '../../components/Footer';
import { FaBuilding, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import Header from '../../components/Header';
import OverviewSection from '../../components/Section';
import Location from '../../components/Location';
import Amenities from '../../components/Amenities';
import FloorPlan from '../../components/FloorPlan';
import Contact from '../../components/Contact';

export default function HomePage() {
  return (
    <main className="bg-gray-100">
      <Header/>
      <Hero />
      <OverviewSection/>
      <Location/>
      <Amenities/>
      <FloorPlan/>
      <Contact/>
      <Footer />
    </main>
  );
}
