import Footer from '@/components/Footer';
import Main from '@/components/Main';
import NavBar from '@/components/NavBar';

export default function Home() {
  return (
    <div className='w-screen h-screen'>
      <NavBar />
      <Main></Main>
      <Footer/>
    </div>
  );
}
