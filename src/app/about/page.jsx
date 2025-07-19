import Link from 'next/link';
import { FaLeaf } from 'react-icons/fa';

export default function About() {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <h1 className="hero-title">About IFFCO</h1>
        <p className="hero-text">
          For over 54 years, IFFCO has stood beside farmers, helping them grow more, earn better, and live sustainably. It started as a cooperative, meaning it was built by farmers, for farmers — and today, it’s one of the world’s largest cooperatives.

IFFCO’s main goal is to provide affordable and high-quality fertilisers to farmers across India. But it hasn’t stopped there. Over the years, IFFCO has expanded into insurance, telecom, logistics, retail, organic farming, and more — creating an entire ecosystem that supports rural life.
        </p>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="mission-card">
          <h2 className="section-title">Our Mission</h2>
          <p className="text-content">
            Indian Farmers Fertiliser Cooperative Limited (IFFCO) was founded with a vision to uplift Indian farmers by providing innovative, high-quality fertilisers and agricultural support. With a network of over 10,000 dealers, we serve millions of farmers across India, ensuring they have access to the tools they need to thrive.
          </p>
          <p className="text-content">
            Our commitment to sustainability, transparency, and fairness drives everything we do. We aim to foster community growth and promote eco-friendly farming practices that benefit both the land and its people.
          </p>
          <div className="mission-icon">
            <FaLeaf size={48} className="benefit-icon" />
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="partner-section">
        <div className="partner-grid">
          <div className="partner-content">
            <h2 className="section-title">Why Partner with IFFCO?</h2>
            <p className="text-content">
              As an IFFCO dealer, you’ll join a trusted brand with a legacy of excellence. Benefit from competitive margins, extensive support, and a growing market presence. Our cooperative model ensures you’re part of a community dedicated to agricultural progress.
            </p>
          </div>
          <div className="partner-buttons">
            <Link href="/benefits">
              <button className="cta-button">Explore Benefits</button>
            </Link>
            <Link href="/#apply">
              <button className="cta-button">Apply Now</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}