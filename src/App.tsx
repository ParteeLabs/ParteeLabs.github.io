import { Hero } from './components/Hero';
import { Mission } from './components/Mission';
import { Members } from './components/Members';
import { Contribute } from './components/Contribute';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className='min-h-screen bg-[#4ECDC4]'>
      <Hero />
      <Mission />
      <Members />
      <Contribute />
      <Footer />
    </div>
  );
}
