import Page from "./layouts/page";
import Navbar from "./components/navbar";
import Hero from "./components/Home/hero";
import Projects from "./components/Home/projects";
import Footer from "./components/Home/footer";
import Freelance from "./components/Home/freelancer";

export default function Home() {
  return (
    <Page
      title="巫女 Meysa - Web Developer"
      description="Saya adalah Miko Meysa Bima, Seorang junior web developer yang fokus dalam bidang frontend dan backend"
    >
      <Navbar />
      <Hero />
      <Freelance />
      <Projects />
      <Footer />
    </Page>
  );
}
