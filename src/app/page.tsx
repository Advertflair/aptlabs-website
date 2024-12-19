import Header from '@/components/layout/Header';
import Hero from '@/components/landing/Hero';
import TargetGroups from '@/components/landing/TargetGroups';
import Features from '@/components/landing/Features';
import CTA from '@/components/landing/CTA';
import Footer from '@/components/layout/Footer';

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <TargetGroups />
      <Features />
      <CTA />
      <Footer />
    </main>
  );
}