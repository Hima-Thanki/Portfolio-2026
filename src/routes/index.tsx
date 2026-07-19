import { createFileRoute } from "@tanstack/react-router";
import heroBg from "@/assets/hero-bg.jpg";
import certificate from "@/assets/certificate.jpg";
import web1 from "@/assets/project-web1.jpg";
import web2 from "@/assets/project-web2.jpg";
import graphic1 from "@/assets/graphic1.jpg";
import graphic2 from "@/assets/graphic2.jpg";
import graphic3 from "@/assets/graphic3.jpg";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

const webTools = [
  "WordPress", "Wix", "Shopify", "Webflow", "Elementor",
  "HTML & CSS", "JavaScript", "React", "Tailwind CSS", "Framer",
];

const graphicTools = [
  "Adobe Photoshop", "Adobe Illustrator", "Adobe InDesign",
  "Figma", "Canva", "CorelDRAW", "Adobe XD", "Lightroom",
];

const amazonSkills = [
  { title: "Product Listing Optimization", desc: "SEO-driven titles, bullets, and A+ content that convert." },
  { title: "Keyword Research", desc: "Helium 10 & Jungle Scout research for high-intent keywords." },
  { title: "PPC Campaign Management", desc: "Sponsored Products, Brands, and Display ads with ACoS control." },
  { title: "Storefront Design", desc: "Custom Amazon storefronts with branded visuals and layouts." },
  { title: "Inventory & FBA", desc: "Shipment planning, FBA fees, and inventory health monitoring." },
  { title: "Account Health", desc: "Case management, policy compliance, and performance recovery." },
];

const websites = [
  { title: "Modern Portfolio Site", tag: "WordPress · Elementor", img: web1 },
  { title: "E-commerce Boutique", tag: "Shopify · Custom Theme", img: web2 },
];

const graphics = [
  { title: "Luxury Brand Identity", tag: "Logo · Illustrator", img: graphic1 },
  { title: "Social Media Kit", tag: "Instagram · Photoshop", img: graphic2 },
  { title: "Print Collateral", tag: "Business Cards · InDesign", img: graphic3 },
];

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="fixed top-0 z-50 w-full backdrop-blur-md bg-background/70 border-b border-border/40">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-display text-xl tracking-wide">
            <span className="gold-text">Studio</span>Folio
          </a>
          <ul className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <li><a href="#work" className="hover:text-primary transition-colors">Work</a></li>
            <li><a href="#graphics" className="hover:text-primary transition-colors">Graphics</a></li>
            <li><a href="#amazon" className="hover:text-primary transition-colors">Amazon</a></li>
            <li><a href="#certificate" className="hover:text-primary transition-colors">Certificate</a></li>
            <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
          </ul>
          <a href="#contact" className="hidden md:inline-flex items-center rounded-full border border-primary/60 px-4 py-2 text-xs uppercase tracking-widest text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
            Hire Me
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section id="top" className="relative flex min-h-screen items-center overflow-hidden">
        <img src={heroBg} alt="" width={1600} height={1200} className="absolute inset-0 h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        <div className="relative mx-auto max-w-6xl px-6 pt-32 pb-20">
          <p className="text-xs uppercase tracking-[0.4em] text-primary mb-6">Portfolio · 2026</p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.02] max-w-4xl">
            Crafting <span className="italic gold-text">websites</span>, graphics &<br />
            Amazon <span className="italic gold-text">experiences</span>.
          </h1>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground">
            A curated collection of the tools I command, the sites I've launched, the visuals I've designed, and the Amazon skills I bring to every brand.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#work" className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-accent transition-colors">
              View my work
            </a>
            <a href="#contact" className="inline-flex items-center rounded-full border border-border px-6 py-3 text-sm font-medium hover:border-primary transition-colors">
              Get in touch
            </a>
          </div>
        </div>
      </section>

      {/* TOOLS */}
      <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="grid gap-16 md:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">01 — Website Tools</p>
            <h2 className="font-display text-4xl md:text-5xl mb-6">Platforms & code I build with.</h2>
            <p className="text-muted-foreground mb-8">From no-code builders to hand-coded React, I choose the right tool for the goal.</p>
            <ul className="flex flex-wrap gap-2">
              {webTools.map((t) => (
                <li key={t} className="rounded-full border border-border bg-card px-4 py-2 text-sm hover:border-primary/60 transition-colors">
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">02 — Graphic Tools</p>
            <h2 className="font-display text-4xl md:text-5xl mb-6">Design software I've mastered.</h2>
            <p className="text-muted-foreground mb-8">Pixel-perfect, print-ready, and everything between.</p>
            <ul className="flex flex-wrap gap-2">
              {graphicTools.map((t) => (
                <li key={t} className="rounded-full border border-border bg-card px-4 py-2 text-sm hover:border-primary/60 transition-colors">
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6"><div className="hairline" /></div>

      {/* WEBSITES */}
      <section id="work" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Websites</p>
            <h2 className="font-display text-4xl md:text-5xl">Selected projects.</h2>
          </div>
          <p className="hidden md:block text-sm text-muted-foreground max-w-xs">A few sites I've shipped end-to-end.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {websites.map((w) => (
            <article key={w.title} className="group overflow-hidden rounded-2xl border border-border bg-card">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={w.img} alt={w.title} loading="lazy" width={1200} height={800} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-widest text-primary">{w.tag}</p>
                <h3 className="mt-2 font-display text-2xl">{w.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* GRAPHICS */}
      <section id="graphics" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Graphic Design</p>
          <h2 className="font-display text-4xl md:text-5xl">Files & artwork.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {graphics.map((g) => (
            <article key={g.title} className="group overflow-hidden rounded-2xl border border-border bg-card">
              <div className="aspect-square overflow-hidden">
                <img src={g.img} alt={g.title} loading="lazy" width={1000} height={1000} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <p className="text-xs uppercase tracking-widest text-primary">{g.tag}</p>
                <h3 className="mt-2 font-display text-xl">{g.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* AMAZON */}
      <section id="amazon" className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-card/40 to-transparent" />
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="mb-14 max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Amazon Central</p>
            <h2 className="font-display text-4xl md:text-5xl mb-4">Seller Central skills.</h2>
            <p className="text-muted-foreground">Hands-on with the Amazon Seller Central ecosystem — from listing to launch to scale.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {amazonSkills.map((s, i) => (
              <div key={s.title} className="rounded-2xl border border-border bg-card p-6 hover:border-primary/60 transition-colors">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-primary/40 text-primary font-display text-lg">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-display text-xl mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATE */}
      <section id="certificate" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Recognition</p>
            <h2 className="font-display text-4xl md:text-5xl mb-6">Appreciation certificate.</h2>
            <p className="text-muted-foreground mb-4">
              A token of recognition awarded for consistent quality, dedication, and client-focused delivery.
            </p>
            <p className="text-sm text-muted-foreground/80 italic">
              Replace this image with your own certificate — <span className="text-primary">src/assets/certificate.jpg</span>.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-primary/30 shadow-2xl shadow-primary/10">
            <img src={certificate} alt="Appreciation certificate" loading="lazy" width={1200} height={900} className="w-full" />
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-24 md:py-32 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Let's talk</p>
        <h2 className="font-display text-5xl md:text-7xl mb-6">
          Have a project <span className="italic gold-text">in mind?</span>
        </h2>
        <p className="mx-auto max-w-xl text-muted-foreground mb-10">
          Whether it's a new website, a brand refresh, or scaling your Amazon store — I'd love to hear about it.
        </p>
        <a href="mailto:hello@example.com" className="inline-flex items-center rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground hover:bg-accent transition-colors">
          hello@example.com
        </a>
      </section>

      <footer className="border-t border-border/40 py-8 text-center text-xs text-muted-foreground">
        © 2026 StudioFolio · Crafted with care
      </footer>
    </div>
  );
}
