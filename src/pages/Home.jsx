import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Services from "../components/Services";
import About from "../components/About";
import Process from "../components/Process";
import Projects from "../components/Projects";
import VideoShowcase from "../components/VideoShowcase";
import Testimonials from "../components/Testimonials";
import Team from "../components/Team";
import Contact from "../components/Contact";
import CTABanner from "../components/CTABanner";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Stats />
      <Services />
      <About />
      <Process />
      <Projects />
      <VideoShowcase />
      <Testimonials />
      <Team />
      <Contact />
      <CTABanner />
    </Layout>
  );
}
