import NavBar from '@/components/navbar';
import MainContent from '@/components/mainContent';
import Footer from '@/components/footer';
import Contacts from '@/components/contacts';
import AboutUs from '@/components/aboutus';

export default function Home() {
  return (
    <>
      <NavBar />
      <MainContent />
      <AboutUs />
      <Contacts />
      <Footer />
    </>
  )
}
