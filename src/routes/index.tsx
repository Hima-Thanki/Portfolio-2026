import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  Mail, Phone, MapPin, Linkedin, Github, Download, ArrowRight, ExternalLink,
  Search, Megaphone, LayoutTemplate, Store, Boxes, LineChart, TrendingUp, FileText,
  Code2, Palette, Wrench, ShoppingCart, Layers, Star, Quote, Award, Briefcase, GraduationCap,
} from "lucide-react";
import certificate from "@/assets/certificate.jpg";
import heroIllustration from "@/assets/hero-illustration.png";
import aboutIllustration from "@/assets/about-illustration.png";
import web1 from "@/assets/web1.png.asset.json";
import web2 from "@/assets/web2.png.asset.json";
import web3 from "@/assets/web3.png.asset.json";
import web4 from "@/assets/web4.png.asset.json";
import web5 from "@/assets/web5-new.webp.asset.json";
import web6 from "@/assets/web6-new.webp.asset.json";
import web7 from "@/assets/web7-new.webp.asset.json";
import web8 from "@/assets/web8.png.asset.json";
import web9 from "@/assets/web9.png.asset.json";
import web10 from "@/assets/web10.png.asset.json";

export const Route = createFileRoute("/")({
  component: Portfolio,
  head: () => ({
    meta: [
      { title: "Hima Thanki | Web Developer, Graphic Designer & Amazon Specialist" },
      {
        name: "description",
        content:
          "Professional portfolio showcasing web development, graphic design, Shopify, WordPress, branding, and Amazon marketplace expertise.",
      },
      { property: "og:title", content: "Hima Thanki | Web Developer, Graphic Designer & Amazon Marketplace Specialist" },
      {
        property: "og:description",
        content:
          "Professional portfolio showcasing web development, graphic design, Shopify, WordPress, branding, and Amazon marketplace expertise.",
      },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "https://hima-thanki.lovable.app/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://hima-thanki.lovable.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Hima Thanki",
          jobTitle: "Web Developer, Graphic Designer & Amazon Marketplace Specialist",
          url: "https://hima-thanki.lovable.app/",
        }),
      },
    ],
  }),
});

/* ---------------------------------- data --------------------------------- */

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "20+", label: "Projects Completed" },
  { value: "60+", label: "Amazon Listings Managed" },
  { value: "100%", label: "Client Satisfaction" },
];

const experience = [
  {
    icon: Briefcase,
    company: "Splendour Signs LLC",
    role: "Web Developer • Graphic Designer • Amazon Executive",
    period: "Full-time",
    points: [
      "Developed and maintained company websites",
      "Designed marketing materials and brand collateral",
      "Managed Amazon product listings across categories",
      "Created Amazon A+ Content and brand storefronts",
      "Optimized product SEO for organic ranking",
      "Planned and managed PPC campaigns",
    ],
  },
  {
    icon: GraduationCap,
    company: "Jinou Trading LLC",
    role: "Web Developer Intern",
    period: "Internship",
    points: [
      "Website maintenance and content updates",
      "Frontend development with HTML, CSS & JavaScript",
      "UI improvements and responsive fixes",
    ],
  },
];

const projects = [
  {
    title: "Splendour Signs LLC Website",
    role: "Web Developer & Designer",
    desc: "Corporate website for an industrial signage manufacturer — services, catalogue and enquiry funnel.",
    tech: ["WordPress", "Elementor", "PHP", "SEO"],
    img: web9.url,
    demo: "#",
    github: "",
  },
  {
    title: "SIGNGARDS Shopify Store",
    role: "Shopify Developer",
    desc: "Safety signage e-commerce store with custom theme, collections and conversion-focused product pages.",
    tech: ["Shopify", "Liquid", "CSS", "CRO"],
    img: web8.url,
    demo: "#",
    github: "",
  },
  {
    title: "Amazon Product Listing Management",
    role: "Amazon Marketplace Executive",
    desc: "End-to-end listing creation, A+ content, keyword research and PPC for 60+ SKUs on Seller Central.",
    tech: ["Seller Central", "Helium 10", "A+ Content", "PPC"],
    img: web10.url,
    demo: "",
    github: "",
  },
  {
    title: "Corporate Website — TazZA",
    role: "Frontend Developer",
    desc: "Multi-page organic grocery brand site with hero, services, gallery and testimonial modules.",
    tech: ["WordPress", "Elementor", "HTML5", "CSS3"],
    img: web1.url,
    demo: "#",
    github: "",
  },
  {
    title: "Branding & Identity — IconStock",
    role: "UI/UX & Brand Designer",
    desc: "Icon marketplace brand system: logo, colour system, UI kit and marketing site built in React.",
    tech: ["React", "Tailwind CSS", "Figma", "Illustrator"],
    img: web3.url,
    demo: "#",
    github: "#",
  },
  {
    title: "E-Commerce Website — Special Offers",
    role: "Frontend Developer",
    desc: "Grocery deals storefront with category browsing, promo tiles and responsive product grids.",
    tech: ["HTML5", "CSS3", "JavaScript", "MySQL"],
    img: web5.url,
    demo: "#",
    github: "#",
  },
];

const extraShots = [
  { label: "TazZA — Gallery", img: web2.url },
  { label: "IconStock — Features", img: web4.url },
  { label: "Special Offers — Categories", img: web6.url },
  { label: "Special Offers — Deals", img: web7.url },
];

const designWork = [
  { title: "Company Profile", tag: "InDesign · Print", span: "row-span-2" },
  { title: "Product Catalogue", tag: "InDesign · Print" },
  { title: "Brochure Design", tag: "Illustrator" },
  { title: "Flyer Design", tag: "Photoshop", span: "row-span-2" },
  { title: "Corporate Branding", tag: "Brand System" },
  { title: "Business Card", tag: "Print · Identity" },
  { title: "Logo Design", tag: "Illustrator", span: "row-span-2" },
  { title: "Packaging Design", tag: "Dieline · 3D Mockup" },
  { title: "Amazon A+ Content", tag: "E-commerce" },
  { title: "Social Media Campaign", tag: "Canva · Photoshop" },
  { title: "Safety Signage Design", tag: "CorelDRAW · Vector" },
  { title: "Banner Design", tag: "Web & Print" },
];

const amazonSkills = [
  { icon: FileText, title: "Product Listing Optimization", desc: "SEO-driven titles, bullets and backend keywords.", metric: "60+ listings" },
  { icon: Search, title: "Keyword Research", desc: "Helium 10 & Jungle Scout high-intent keyword mapping.", metric: "1.5k+ keywords" },
  { icon: Megaphone, title: "PPC Campaign Management", desc: "Sponsored Products, Brands & Display with ACoS control.", metric: "ACoS ↓ 28%" },
  { icon: LayoutTemplate, title: "A+ Content Design", desc: "Enhanced brand content modules that lift conversion.", metric: "CVR ↑ 22%" },
  { icon: Store, title: "Brand Store Design", desc: "Multi-page storefronts with branded navigation.", metric: "5 storefronts" },
  { icon: Boxes, title: "Inventory Management", desc: "FBA shipments, restock planning and IPI health.", metric: "IPI 500+" },
  { icon: LineChart, title: "Competitor Analysis", desc: "Price, review and share-of-voice benchmarking.", metric: "Weekly reports" },
  { icon: TrendingUp, title: "SEO Optimization", desc: "Organic rank tracking and listing iteration.", metric: "Rank ↑ page 1" },
];

const skillGroups = [
  { icon: Code2, title: "Development", color: "text-primary", items: ["HTML5", "CSS3", "JavaScript", "React", "PHP", "MySQL"] },
  { icon: Layers, title: "CMS", color: "text-accent", items: ["WordPress", "Shopify", "Wix"] },
  { icon: Palette, title: "Design", color: "gold-text", items: ["Photoshop", "Illustrator", "CorelDRAW", "Figma"] },
  { icon: ShoppingCart, title: "Amazon", color: "text-accent", items: ["Seller Central", "Helium 10", "PPC", "SEO"] },
  { icon: Wrench, title: "Tools", color: "text-primary", items: ["Git", "GitHub", "VS Code", "ChatGPT", "Gemini"] },
];

const certifications = [
  { title: "Certificate of Appreciation", issuer: "Splendour Signs LLC", note: "Recognised for consistent quality and on-time delivery.", img: certificate },
  { title: "Amazon Seller Central Specialist", issuer: "Marketplace Training", note: "Listing, A+ content, PPC and account health management." },
  { title: "Web Development Certification", issuer: "Professional Course", note: "HTML5, CSS3, JavaScript, React and responsive design." },
  { title: "Graphic Design Certification", issuer: "Adobe Toolchain", note: "Photoshop, Illustrator and print production workflow." },
];

const testimonials = [
  { name: "Operations Manager", company: "Splendour Signs LLC", rating: 5, review: "Hima handled our website, print collateral and Amazon listings with equal confidence. Sales visibility improved noticeably within a few months." },
  { name: "Brand Owner", company: "E-commerce Client", rating: 5, review: "The A+ content and storefront redesign made our brand look far more premium. Conversion rate went up and ad spend went down." },
  { name: "Project Lead", company: "Jinou Trading LLC", rating: 5, review: "Reliable, detail-oriented and quick to pick up new tools. UI improvements were delivered ahead of schedule." },
];

const RESUME_URL = "/hima-thanki-resume.pdf";

/* --------------------------------- helpers -------------------------------- */

function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"} ${className}`}
    >
      {children}
    </div>
  );
}

function SectionHead({ index, label, title, sub, tone = "text-primary" }: { index: string; label: string; title: string; sub?: string; tone?: string }) {
  return (
    <div className="mb-12 max-w-2xl">
      <p className={`mono text-xs uppercase tracking-[0.3em] mb-4 ${tone}`}>{index} · {label}</p>
      <h2 className="font-display text-4xl md:text-5xl">{title}</h2>
      {sub && <p className="mt-4 text-muted-foreground">{sub}</p>}
    </div>
  );
}

/* ---------------------------------- page ---------------------------------- */

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground scroll-smooth">
      {/* NAV */}
      <header className="fixed top-0 z-50 w-full backdrop-blur-md bg-background/70 border-b border-border/40">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-display text-lg font-semibold tracking-tight">
            <span className="grad-text">HIMA THANKI</span>
            <span className="text-muted-foreground font-normal"> · Portfolio</span>
          </a>
          <ul className="hidden lg:flex items-center gap-6 text-sm text-muted-foreground">
            {[
              ["About", "#about"], ["Experience", "#experience"], ["Projects", "#work"],
              ["Design", "#graphics"], ["Skills", "#skills"], ["Contact", "#contact"],
            ].map(([l, h]) => (
              <li key={h}><a href={h} className="hover:text-primary transition-colors">{l}</a></li>
            ))}
          </ul>
          <a href={RESUME_URL} download className="hidden md:inline-flex items-center gap-2 rounded-lg border border-primary/50 px-4 py-2 text-xs font-medium text-primary hover:bg-primary/10 transition-colors">
            <Download className="h-3.5 w-3.5" /> Resume
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section id="top" className="relative flex min-h-screen items-center overflow-hidden">
        <AnimatedWorkspace />
        <div className="relative mx-auto max-w-6xl px-6 pt-32 pb-20 w-full grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
          <p className="mono text-xs uppercase tracking-[0.4em] text-primary mb-6 flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-accent anim-pulse-dot" />
            Available for opportunities
          </p>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.05] max-w-5xl font-semibold">
            Web Developer, <span className="grad-text">Graphic Designer</span> & Amazon Marketplace <span className="grad-text">Specialist</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            I build modern websites, create professional branding, and optimize Amazon stores to help businesses grow
            through technology, creativity, and digital marketing.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#work" className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity glow-blue">
              View Projects <ArrowRight className="h-4 w-4" />
            </a>
            <a href={RESUME_URL} download className="inline-flex items-center gap-2 rounded-lg border border-accent/60 bg-accent/10 px-6 py-3 text-sm font-medium text-accent hover:bg-accent/20 transition-colors">
              <Download className="h-4 w-4" /> Download Resume
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium hover:border-primary transition-colors">
              <Mail className="h-4 w-4" /> Contact Me
            </a>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-4 sm:max-w-3xl lg:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 90}>
                <div className="rounded-xl border border-border/70 bg-card/60 backdrop-blur-md p-5 hover:border-primary/60 transition-colors">
                  <div className="font-display text-3xl grad-text">{s.value}</div>
                  <div className="mt-1 mono text-[11px] uppercase tracking-widest text-muted-foreground">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute inset-8 rounded-full blur-3xl opacity-40"
              style={{ background: "radial-gradient(circle, color-mix(in oklab, var(--brand-blue) 45%, transparent), transparent 70%)" }} />
            <img
              src={heroIllustration}
              alt="3D illustration of a developer workspace with laptop, code editor and UI design screens"
              width={1024}
              height={1024}
              fetchPriority="high"
              decoding="async"
              className="relative w-full max-w-[520px] mx-auto anim-float drop-shadow-2xl"
            />
          </div>
        </div>
      </section>


      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-24 md:py-28">
        <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="mono text-xs uppercase tracking-[0.3em] text-primary mb-4">01 · About</p>
            <h2 className="font-display text-4xl md:text-5xl">About me.</h2>
            <Reveal delay={120}>
              <img
                src={aboutIllustration}
                alt="Illustration of web development, UI/UX design and creative tools"
                width={1024}
                height={1024}
                loading="lazy"
                decoding="async"
                className="mt-8 w-full max-w-[280px] anim-float-alt"
              />
            </Reveal>
          </div>

          <Reveal className="space-y-5 text-muted-foreground text-lg leading-relaxed">
            <div className="space-y-5">
              <p>
                I'm <span className="text-foreground font-medium">Hima Thanki</span> — a multidisciplinary professional working
                across <span className="text-primary">full stack web development</span>,
                <span className="text-accent"> design</span> and
                <span className="gold-text"> Amazon marketplace management</span>.
              </p>
              <p>
                On the development side I build responsive, accessible websites with HTML5, CSS3, JavaScript, React, PHP and
                MySQL, plus CMS builds on <span className="text-foreground">WordPress</span> and <span className="text-foreground">Shopify</span>.
              </p>
              <p>
                On the creative side I handle <span className="text-foreground">graphic design</span>, <span className="text-foreground">UI/UX design</span> and
                <span className="text-foreground"> branding</span> — from logos and print collateral to complete visual identities.
              </p>
              <p>
                On the commerce side I run <span className="text-foreground">Amazon Seller Central</span> end-to-end: listing creation,
                A+ content, <span className="text-foreground">SEO</span>, PPC and account health.
              </p>
              <p className="text-base">
                My focus is simple — clean code, sharp visuals and measurable business outcomes.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6"><div className="hairline" /></div>

      {/* EXPERIENCE */}
      <section id="experience" className="mx-auto max-w-6xl px-6 py-24 md:py-28">
        <SectionHead index="02" label="Experience" title="Professional experience." sub="Hands-on roles spanning development, design and marketplace operations." />
        <div className="relative border-l border-border/70 pl-8 md:pl-12 space-y-10">
          {experience.map((e, i) => (
            <Reveal key={e.company} delay={i * 120}>
              <div className="relative">
                <span className="absolute -left-[42px] md:-left-[58px] top-2 flex h-8 w-8 items-center justify-center rounded-full border border-primary/50 bg-card text-primary">
                  <e.icon className="h-4 w-4" />
                </span>
                <div className="rounded-2xl border border-border bg-card/70 backdrop-blur-sm p-6 shadow-lg shadow-black/20 hover:border-primary/60 hover:shadow-primary/10 transition-all">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-2xl">{e.company}</h3>
                    <span className="mono text-[11px] uppercase tracking-widest text-muted-foreground">{e.period}</span>
                  </div>
                  <p className="mt-1 mono text-xs uppercase tracking-widest text-primary">{e.role}</p>
                  <ul className="mt-5 grid gap-2.5 sm:grid-cols-2 text-sm text-muted-foreground">
                    {e.points.map((p) => (
                      <li key={p} className="flex items-start gap-3">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />{p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="work" className="mx-auto max-w-6xl px-6 py-24 md:py-28">
        <SectionHead index="03" label="Projects" title="Selected projects." sub="Client and in-house work delivered end-to-end — from wireframes to production." />
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 100}>
              <article className="group h-full flex flex-col overflow-hidden rounded-2xl border border-border bg-card/70 backdrop-blur-sm shadow-lg shadow-black/20 hover:-translate-y-1 hover:border-primary/60 hover:shadow-primary/10 transition-all duration-300">
                <div className="p-4 pb-0">
                  <div className="rounded-xl border border-border/80 bg-background/70 shadow-lg shadow-black/30 overflow-hidden">
                    <div className="flex items-center gap-1.5 border-b border-border/70 bg-secondary/60 px-3 py-2">
                      <span className="h-2 w-2 rounded-full bg-destructive/70" />
                      <span className="h-2 w-2 rounded-full bg-brand-gold/70" style={{ background: "var(--brand-gold)" }} />
                      <span className="h-2 w-2 rounded-full" style={{ background: "var(--brand-green)" }} />
                      <span className="ml-3 h-3 flex-1 rounded-full bg-background/70" />
                    </div>
                    <div className="aspect-[16/10] overflow-hidden bg-secondary">
                      <img src={p.img} alt={`${p.title} website mockup`} loading="lazy" width={1200} height={750}
                        className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.06]" />
                    </div>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl md:text-2xl">{p.title}</h3>
                  <p className="mt-1 mono text-[11px] uppercase tracking-widest text-accent">Role · {p.role}</p>
                  <p className="mt-3 text-sm text-muted-foreground">{p.desc}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <li key={t} className="rounded-md border border-border bg-background/50 px-2.5 py-1 mono text-[10px] uppercase tracking-wider text-muted-foreground">{t}</li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-3 pt-2">
                    {p.demo && (
                      <a href={p.demo} className="inline-flex items-center gap-2 rounded-lg bg-primary/15 border border-primary/40 px-4 py-2 text-xs font-medium text-primary hover:bg-primary/25 transition-colors">
                        <ExternalLink className="h-3.5 w-3.5" /> Live Demo
                      </a>
                    )}
                    {p.github && (
                      <a href={p.github} className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-xs font-medium hover:border-accent transition-colors">
                        <Github className="h-3.5 w-3.5" /> GitHub
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {extraShots.map((s, i) => (
            <Reveal key={s.label} delay={(i % 4) * 80}>
              <figure className="group overflow-hidden rounded-xl border border-border bg-secondary hover:border-primary/50 transition-colors">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={s.img} alt={s.label} loading="lazy" width={800} height={600}
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.06]" />
                </div>
                <figcaption className="border-t border-border px-4 py-2 mono text-[10px] uppercase tracking-widest text-muted-foreground">{s.label}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

      </section>

      {/* DESIGN PORTFOLIO */}
      <section id="graphics" className="mx-auto max-w-6xl px-6 py-24 md:py-28">
        <SectionHead index="04" label="Graphic Design" title="Design portfolio." tone="text-accent"
          sub="Professional brand, print and e-commerce design work across industries." />
        <div className="grid auto-rows-[140px] grid-cols-2 gap-4 md:grid-cols-4">
          {designWork.map((d, i) => (
            <div key={d.title}
              className={`group relative overflow-hidden rounded-2xl border border-border bg-card/70 p-5 flex flex-col justify-end hover:border-accent/60 hover:-translate-y-1 transition-all duration-300 ${d.span ?? ""}`}>
              <div className="absolute inset-0 opacity-70 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    i % 3 === 0
                      ? "linear-gradient(140deg, color-mix(in oklab, var(--brand-blue) 22%, transparent), transparent 70%)"
                      : i % 3 === 1
                        ? "linear-gradient(140deg, color-mix(in oklab, var(--brand-green) 22%, transparent), transparent 70%)"
                        : "linear-gradient(140deg, color-mix(in oklab, var(--brand-gold) 18%, transparent), transparent 70%)",
                }} />
              <div className="absolute inset-0 grid-bg opacity-[0.18]" />
              <div className="relative">
                <p className="mono text-[10px] uppercase tracking-widest text-accent">{d.tag}</p>
                <h3 className="mt-1 font-display text-lg leading-tight">{d.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* SKILLS */}
      <section id="skills" className="mx-auto max-w-6xl px-6 py-24 md:py-28">
        <SectionHead index="06" label="Skills" title="Tools & technologies." />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g, i) => (
            <Reveal key={g.title} delay={(i % 3) * 80}>
              <div className="h-full rounded-2xl border border-border bg-card/70 backdrop-blur-sm p-6 hover:border-primary/60 transition-colors">
                <div className="flex items-center gap-3 mb-5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background/50">
                    <g.icon className={`h-4 w-4 ${g.color}`} />
                  </span>
                  <h3 className={`font-display text-xl ${g.color}`}>{g.title}</h3>
                </div>
                <ul className="grid grid-cols-2 gap-2">
                  {g.items.map((t) => (
                    <li key={t} className="rounded-lg border border-border bg-background/50 px-3 py-2 mono text-[11px] hover:border-primary/60 hover:text-primary transition-colors">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>


      {/* CONTACT */}
      <ContactSection />

      {/* FOOTER */}
      <footer className="border-t border-border/40 bg-card/30">
        <div className="mx-auto max-w-6xl px-6 py-14 grid gap-10 md:grid-cols-4">
          <div>
            <p className="font-display text-lg"><span className="grad-text">HIMA THANKI</span></p>
            <p className="mt-3 text-sm text-muted-foreground">
              Web Developer, Graphic Designer & Amazon Marketplace Specialist.
            </p>
          </div>
          <div>
            <h3 className="mono text-[11px] uppercase tracking-widest text-primary mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {[["About", "#about"], ["Experience", "#experience"], ["Projects", "#work"], ["Skills", "#skills"], ["Contact", "#contact"]].map(([l, h]) => (
                <li key={h}><a href={h} className="hover:text-primary transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mono text-[11px] uppercase tracking-widest text-accent mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {["Web Development", "UI/UX Design", "Graphic Design", "Shopify & WordPress", "Amazon Management"].map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mono text-[11px] uppercase tracking-widest gold-text mb-4">Connect</h3>
            <div className="flex gap-3">
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border hover:border-primary hover:text-primary transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border hover:border-accent hover:text-accent transition-colors">
                <Github className="h-4 w-4" />
              </a>
              <a href="mailto:hima.thanki@example.com" aria-label="Email"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border hover:border-primary hover:text-primary transition-colors">
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-border/40 py-6 text-center mono text-xs text-muted-foreground">
          © 2026 Hima Thanki · Designed & Developed by Hima Thanki
        </div>
      </footer>
    </div>
  );
}

/* -------------------------------- contact -------------------------------- */

function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24 md:py-28">
      <SectionHead index="06" label="Contact" title="Let's Connect." sub="Open to full-time roles, freelance projects and collaborations." />
      <div className="max-w-md">
        <div className="flex items-center gap-4 rounded-2xl border border-border bg-card/70 backdrop-blur-sm p-5 hover:border-primary/60 transition-colors">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary/40 bg-primary/10 text-primary">
            <MapPin className="h-4 w-4" />
          </span>
          <div>
            <p className="mono text-[10px] uppercase tracking-widest text-muted-foreground">Location</p>
            <p className="text-sm">Dubai, UAE</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ hero backdrop ----------------------------- */

function AnimatedWorkspace() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-[oklch(0.18_0.04_240)]" />
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-primary/20 blur-3xl anim-float" />
      <div className="absolute -bottom-32 -right-32 h-[500px] w-[500px] rounded-full bg-accent/20 blur-3xl anim-float-alt" />
      <div className="absolute top-1/3 right-1/4 h-[300px] w-[300px] rounded-full bg-gold/10 blur-3xl anim-drift" />

      <div className="absolute inset-0 hidden lg:block">
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

      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
    </div>
  );
}
