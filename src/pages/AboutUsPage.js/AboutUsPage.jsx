import React from 'react';
import './about-us-page.css';
import HeroSection from '../../components/About/HeroSection';
import MissionStatement from '../../components/About/MissionStatement';
import OfferSection from '../../components/About/OfferSection';
import VisitUs from '../../components/About/VisitUs';
import CommunityInvolvement from '../../components/About/CommunityInvolvement';
import PageFooter from '../../components/About/PageFooter';

function AboutUsPage() {
  return (
    <div className="about-us-page">
      <div className="container mt-4">
        <HeroSection />
        <MissionStatement />
        <OfferSection />
        <VisitUs />
        <CommunityInvolvement />
        <PageFooter />
      </div>
    </div>
  );
}

export default AboutUsPage;
