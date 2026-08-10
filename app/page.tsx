import Navbar from '@/components/Navbar';
import HeroSlider from '@/components/HeroSlider';
import SearchTour from '@/components/SearchTour';
import WhyChooseUs from '@/components/WhyChooseUs';
import About from '@/components/About';
import PopularDestinations from '@/components/PopularDestinations';
import TourPackages from '@/components/TourPackages';
import ExploreByExperience from '@/components/ExploreByExperience';
import FeaturedTours from '@/components/FeaturedTours';
import Testimonials from '@/components/Testimonials';
import Statistics from '@/components/Statistics';
import Gallery from '@/components/Gallery';
import Blogs from '@/components/Blogs';
import FAQ from '@/components/FAQ';
import Newsletter from '@/components/Newsletter';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSlider />
      <SearchTour />
      <WhyChooseUs />
      <About />
      <PopularDestinations />
      <TourPackages />
      <ExploreByExperience />
      <FeaturedTours />
      <Testimonials />
      <Statistics />
      <Gallery />
      <Blogs />
      <FAQ />
      <Newsletter />
      <CTA />
      <Footer />
    </main>
  );
}
