import './herosection.css';

function HeroSection() {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>Private Transfer & Taxi services in Geneva</h1>
        <p>
          Book airport transfers, city transfers and hourly disposal services
          with driver
        </p>
      </div>
      <div className="hero-buttons">
        {/* <button>Hire MiniBus & Coach/Bus</button> */}
        <img src="/group_card.png" height="100px" />
        <img src="/book_later_card.png" height="100px" />
        {/* <button>Book & Pay Later</button> */}
      </div>
    </div>
  );
}

export default HeroSection;
