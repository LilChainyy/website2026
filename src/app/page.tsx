import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import MoreProjects from "@/components/MoreProjects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div
      style={{
        minHeight: "100%",
        fontFamily: "var(--sans)",
        color: "var(--ink-2)",
        background: "var(--paper)",
      }}
    >
      <Nav />
      <main>
        <Hero />
        <FeaturedProjects />
        <MoreProjects />
      </main>
      <Footer />
    </div>
  );
}
