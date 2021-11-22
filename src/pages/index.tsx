import { NextPage } from 'next';
import ContactInfo from '../components/ContactInfo';
import Header from '../components/Header';
import HeroBanner from '../components/HeroBanner';
import LogoBar from '../components/LogoBar';
import OurSolutionsSection from '../components/OurSolutionsSection/index';
import NewsLetter from '../components/NewsLetter/index';
import JussiSession from '../components/JussiSession';
import Footer from '../components/Footer';
import { useSearch } from '../services/hooks/useSearch';
import ProductsList from '../components/ProductsList';

const Home: NextPage = () => {
  const { searchedText } = useSearch();

  return (
    <>
      <Header />

      {searchedText !== '' ? (
        <ProductsList />
      ) : (
        <>
          <HeroBanner />
          <LogoBar />

          <OurSolutionsSection />

          <JussiSession />
          <ContactInfo />

          <NewsLetter />
        </>
      )}

      <Footer />
    </>
  );
};

export default Home;
