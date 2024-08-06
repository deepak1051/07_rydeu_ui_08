import Footer from './Footer/Footer';
import Header from './Header/Header';
import HeroSection from './HeroSection/HeroSection';
import OtherCities from './OtherCities/OtherCities';
import SearchBox from './SearchBox/SearchBox';

const Homepage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <SearchBox />
      <OtherCities />
      <Footer />
    </div>
  );
};

export default Homepage;
