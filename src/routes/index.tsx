import { createFileRoute } from "@tanstack/react-router";
import certificate from "@/assets/certificate.jpg";
import web1 from "@/assets/project-web1.jpg";
import web2 from "@/assets/project-web2.jpg";
import de1 from "@/assets/de1.png.asset.json";
import de2 from "@/assets/de2.png.asset.json";
import de3 from "@/assets/de3.png.asset.json";
import de4 from "@/assets/de4.png.asset.json";
import de5 from "@/assets/de5.png.asset.json";
import de6 from "@/assets/de6.png.asset.json";
import de7 from "@/assets/de7.png.asset.json";

export const Route = createFileRoute("/")({
  component: Portfolio,
  head: () => ({
    meta: [
      { title: "Hima Thanki — Web Developer, Graphic Designer & Amazon Specialist" },
      { name: "description", content: "Resume portfolio of Hima Thanki — responsive web development, graphic design, and Amazon Seller Central expertise." },
      { property: "og:title", content: "Hima Thanki — Portfolio" },
      { property: "og:description", content: "Web Developer, Graphic Designer & E-commerce Specialist." },
    ],
  }),
});

const skills = {
  web: ["HTML & CSS", "JavaScript", "React", "Tailwind CSS", "WordPress", "Shopify", "Wix", "Elementor", "Webflow", "Framer"],
  graphic: ["Adobe Photoshop", "Adobe Illustrator", "Adobe InDesign", "Figma", "Canva", "CorelDRAW", "Adobe XD", "Lightroom"],
  amazon: ["Seller Central", "Listing Optimization", "SEO & Keywords", "PPC Campaigns", "A+ Content", "Storefront Design", "FBA Management", "Helium 10", "Jungle Scout"],
};

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
  { title: "Brand Identity", tag: "Logo · Illustrator", img: graphic1 },
  { title: "Social Media Kit", tag: "Instagram · Photoshop", img: graphic2 },
  { title: "Print Collateral", tag: "Business Cards · InDesign", img: graphic3 },
];

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="fixed top-0 z-50 w-full backdrop-blur-md bg-background/70 border-b border-border/40">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-display text-lg font-semibold tracking-tight">
            <span className="grad-text">HIMA THANKI</span>
            <span className="text-muted-foreground font-normal"> · Portfolio</span>
          </a>
          <ul className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
            <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
            <li><a href="#work" className="hover:text-primary transition-colors">Web</a></li>
            <li><a href="#graphics" className="hover:text-primary transition-colors">Graphics</a></li>
            <li><a href="#amazon" className="hover:text-primary transition-colors">Amazon</a></li>
            <li><a href="#skills" className="hover:text-primary transition-colors">Skills</a></li>
            <li><a href="#certificate" className="hover:text-primary transition-colors">Certificates</a></li>
            <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* HERO */}
      <section id="top" className="relative flex min-h-screen items-center overflow-hidden">
        <AnimatedWorkspace />
        <div className="relative mx-auto max-w-6xl px-6 pt-32 pb-20 w-full">
          <p className="mono text-xs uppercase tracking-[0.4em] text-primary mb-6 flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-accent anim-pulse-dot" />
            Available for opportunities
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.02] max-w-5xl font-semibold">
            Crafting <span className="grad-text">websites</span>, graphics &<br />
            Amazon <span className="grad-text">experiences</span>.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
            <span className="text-foreground font-medium">Hima Thanki</span> — Web Developer, Graphic Designer & E-commerce Specialist creating responsive websites, engaging designs, and optimized Amazon experiences.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#work" className="inline-flex items-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity glow-blue">
              View my work
            </a>
            <a href="#contact" className="inline-flex items-center rounded-lg border border-border px-6 py-3 text-sm font-medium hover:border-primary transition-colors">
              Contact me
            </a>
          </div>
          <div className="mt-14 flex flex-wrap gap-6 mono text-xs text-muted-foreground">
            <span><span className="gold-text">$</span> 3+ years experience</span>
            <span><span className="gold-text">$</span> 20+ projects delivered</span>
            <span><span className="gold-text">$</span> Amazon Seller Central certified</span>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-24 md:py-28">
        <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="mono text-xs uppercase tracking-[0.3em] text-primary mb-4">01 · About</p>
            <h2 className="font-display text-4xl md:text-5xl">About me.</h2>
          </div>
          <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
            <p>
              I'm <span className="text-foreground font-medium">Hima Thanki</span>, a multidisciplinary professional blending
              <span className="text-primary"> web development</span>,
              <span className="text-accent"> graphic design</span>, and
              <span className="gold-text"> Amazon e-commerce</span> into one focused workflow.
            </p>
            <p>
              I build responsive, accessible websites; design brand systems and marketing collateral; and manage
              Amazon Seller Central end-to-end — from listing optimization to PPC campaigns and storefront design.
            </p>
            <p>
              I care about clean code, sharp visuals, and measurable outcomes for the brands I work with.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6"><div className="hairline" /></div>

      {/* WEB DEVELOPMENT PROJECTS */}
      <section id="work" className="mx-auto max-w-6xl px-6 py-24 md:py-28">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <p className="mono text-xs uppercase tracking-[0.3em] text-primary mb-4">02 · Web Development</p>
            <h2 className="font-display text-4xl md:text-5xl">Selected projects.</h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-xs">Sites I've built end-to-end — from wireframes to production deployment.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {websites.map((w) => (
            <article key={w.title} className="group overflow-hidden rounded-2xl border border-border bg-card hover:border-primary/60 transition-colors">
              <div className="aspect-[4/3] overflow-hidden bg-secondary">
                <img src={w.img} alt={w.title} loading="lazy" width={1200} height={800} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <p className="mono text-xs uppercase tracking-widest text-primary">{w.tag}</p>
                <h3 className="mt-2 font-display text-2xl">{w.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* GRAPHIC DESIGN */}
      <section id="graphics" className="mx-auto max-w-6xl px-6 py-24 md:py-28">
        <div className="mb-12">
          <p className="mono text-xs uppercase tracking-[0.3em] text-accent mb-4">03 · Graphic Design</p>
          <h2 className="font-display text-4xl md:text-5xl">Design portfolio.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {graphics.map((g) => (
            <article key={g.title} className="group overflow-hidden rounded-2xl border border-border bg-card hover:border-accent/60 transition-colors">
              <div className="aspect-square overflow-hidden bg-secondary">
                <img src={g.img} alt={g.title} loading="lazy" width={1000} height={1000} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <p className="mono text-xs uppercase tracking-widest text-accent">{g.tag}</p>
                <h3 className="mt-2 font-display text-xl">{g.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* AMAZON */}
      <section id="amazon" className="relative overflow-hidden py-24 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-card/40 to-transparent" />
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="mb-14 max-w-2xl">
            <p className="mono text-xs uppercase tracking-[0.3em] gold-text mb-4">04 · Amazon Experience</p>
            <h2 className="font-display text-4xl md:text-5xl mb-4">Seller Central expertise.</h2>
            <p className="text-muted-foreground">Hands-on with the Amazon Seller Central ecosystem — from listing to launch to scale.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {amazonSkills.map((s, i) => (
              <div key={s.title} className="rounded-2xl border border-border bg-card p-6 hover:border-primary/60 transition-colors">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-primary/40 text-primary mono text-sm">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-display text-xl mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="mx-auto max-w-6xl px-6 py-24 md:py-28">
        <div className="mb-12">
          <p className="mono text-xs uppercase tracking-[0.3em] text-primary mb-4">05 · Skills</p>
          <h2 className="font-display text-4xl md:text-5xl">Tools & technologies.</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          <SkillGroup title="Web Development" color="text-primary" items={skills.web} />
          <SkillGroup title="Graphic Design" color="text-accent" items={skills.graphic} />
          <SkillGroup title="Amazon E-commerce" color="gold-text" items={skills.amazon} />
        </div>
      </section>

      {/* CERTIFICATES */}
      <section id="certificate" className="mx-auto max-w-6xl px-6 py-24 md:py-28">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="mono text-xs uppercase tracking-[0.3em] text-primary mb-4">06 · Certificates</p>
            <h2 className="font-display text-4xl md:text-5xl mb-6">Recognition & credentials.</h2>
            <p className="text-muted-foreground mb-4">
              Certificates of appreciation and completion earned for consistent quality, dedication, and client-focused delivery.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex items-start gap-3"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />Amazon Seller Central — Certified Specialist</li>
              <li className="flex items-start gap-3"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent" />Certificate of Appreciation — Web & Graphic Design</li>
              <li className="flex items-start gap-3"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold" />Client recognition for on-time, on-brand delivery</li>
            </ul>
          </div>
          <div className="overflow-hidden rounded-2xl border border-primary/30 shadow-2xl shadow-primary/10">
            <img src={certificate} alt="Appreciation certificate" loading="lazy" width={1200} height={900} className="w-full" />
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-24 md:py-28 text-center">
        <p className="mono text-xs uppercase tracking-[0.3em] text-primary mb-4">07 · Contact</p>
        <h2 className="font-display text-5xl md:text-7xl mb-6">
          Let's <span className="grad-text">Connect</span>.
        </h2>
        <p className="mx-auto max-w-xl text-muted-foreground mb-10">
          Open to full-time roles, freelance projects, and collaborations in web development, graphic design, and Amazon e-commerce.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="mailto:hello@example.com" className="inline-flex items-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity glow-blue">
            hello@example.com
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center rounded-lg border border-border px-6 py-3 text-sm font-medium hover:border-primary transition-colors">
            LinkedIn
          </a>
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center rounded-lg border border-border px-6 py-3 text-sm font-medium hover:border-accent transition-colors">
            GitHub
          </a>
        </div>
      </section>

      <footer className="border-t border-border/40 py-8 text-center mono text-xs text-muted-foreground">
        © 2026 Hima Thanki · Portfolio
      </footer>
    </div>
  );
}

function SkillGroup({ title, color, items }: { title: string; color: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <h3 className={`font-display text-xl mb-4 ${color}`}>{title}</h3>
      <ul className="flex flex-wrap gap-2">
        {items.map((t) => (
          <li key={t} className="rounded-md border border-border bg-background/50 px-3 py-1.5 mono text-xs hover:border-primary/60 transition-colors">
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}

function AnimatedWorkspace() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-[oklch(0.18_0.04_240)]" />
      {/* grid */}
      <div className="absolute inset-0 grid-bg opacity-40" />
      {/* glow blobs */}
      <div className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-primary/20 blur-3xl anim-float" />
      <div className="absolute -bottom-32 -right-32 h-[500px] w-[500px] rounded-full bg-accent/20 blur-3xl anim-float-alt" />
      <div className="absolute top-1/3 right-1/4 h-[300px] w-[300px] rounded-full bg-gold/10 blur-3xl anim-drift" />

      {/* Floating workspace cards — hidden on mobile */}
      <div className="absolute inset-0 hidden lg:block">
        {/* Code editor */}
        <div className="absolute top-24 right-8 w-[340px] rounded-xl border border-border bg-card/80 backdrop-blur-md shadow-2xl anim-float">
          <div className="flex items-center gap-1.5 border-b border-border px-3 py-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
            <span className="ml-3 mono text-[10px] text-muted-foreground">portfolio.tsx</span>
          </div>
          <pre className="mono text-[11px] leading-relaxed p-4 text-muted-foreground">
{`const `}<span className="text-primary">dev</span>{` = {
  `}<span className="text-accent">name</span>{`: `}<span className="gold-text">"Hima Thanki"</span>{`,
  `}<span className="text-accent">stack</span>{`: [`}<span className="gold-text">"React"</span>{`, `}<span className="gold-text">"Tailwind"</span>{`],
  `}<span className="text-accent">ships</span>{`: `}<span className="text-primary">true</span>{`,
};`}<span className="anim-caret text-primary">▍</span>
          </pre>
        </div>

        {/* UI design panel */}
        <div className="absolute bottom-32 right-40 w-[240px] rounded-xl border border-border bg-card/80 backdrop-blur-md shadow-2xl anim-float-alt">
          <div className="border-b border-border px-3 py-2 flex items-center justify-between">
            <span className="mono text-[10px] text-muted-foreground">Design · Figma</span>
            <span className="h-1.5 w-1.5 rounded-full bg-accent anim-pulse-dot" />
          </div>
          <div className="p-3 space-y-2">
            <div className="h-2 w-3/4 rounded bg-primary/40" />
            <div className="h-2 w-1/2 rounded bg-accent/40" />
            <div className="mt-3 grid grid-cols-3 gap-1.5">
              <div className="h-8 rounded bg-primary/30" />
              <div className="h-8 rounded bg-accent/30" />
              <div className="h-8 rounded bg-gold/40" />
            </div>
          </div>
        </div>

        {/* Amazon dashboard */}
        <div className="absolute top-1/2 right-96 w-[220px] rounded-xl border border-border bg-card/80 backdrop-blur-md shadow-2xl anim-drift">
          <div className="border-b border-border px-3 py-2 flex items-center gap-2">
            <span className="mono text-[10px] gold-text">Amazon · Sales</span>
          </div>
          <div className="p-3">
            <div className="mono text-lg font-semibold gold-text">+42.8%</div>
            <div className="mt-2 flex items-end gap-1 h-12">
              {[0.5, 0.7, 0.4, 0.9, 0.6, 1, 0.8].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t bg-gradient-to-t from-primary to-accent anim-bar"
                  style={{ height: `${h * 100}%`, animationDelay: `${i * 0.15}s` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
    </div>
  );
}
