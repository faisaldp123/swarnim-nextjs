'use client';
import { useEffect, useState } from 'react';
import Hero from '../../components/Hero';
import Section from '../../components/Section';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import OverviewSection from '../../components/Section';
import Location from '../../components/Location';
import Amenities from '../../components/Amenities';
import FloorPlan from '../../components/FloorPlan';
import Contact from '../../components/Contact';
import EnquiryForm from '../../components/EnquiryForm';
// import ModalEnquiry from '../../components/ModalEnquiry';

export default function HomePage() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const hasShown = sessionStorage.getItem('enquiryShown');
    if (!hasShown) {
      setTimeout(() => {
        setShowPopup(true);
        sessionStorage.setItem('enquiryShown', 'true');
      }, 1000); // show after 1 second
    }
  }, []);

  return (
    <main className="bg-gray-100">
      <Header />
      <Hero />
      <OverviewSection />
      <Location />
      <Amenities />
      <FloorPlan />
      <Contact />
      <Footer />

      {/* Enquiry Form Popup */}
      {/* <ModalEnquiry show={showPopup} onClose={() => setShowPopup(false)}> */}
        <EnquiryForm show={showPopup} onClose={() => setShowPopup(false)}/>
      {/* </ModalEnquiry> */}
    </main>
  );
}
