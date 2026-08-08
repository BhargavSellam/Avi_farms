import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import logoAsset from "@/assets/anvi-logo.png.asset.json";
import processAsset from "@/assets/bilona-process.jpg.asset.json";
import jarAsset from "@/assets/anvi-ghee-jar-styled.jpg.asset.json";
import jarFlowersAsset from "@/assets/anvi-ghee-jar-flowers-v2.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Anvi Farms | Pure Bilona Cow Ghee" },
      {
        name: "description",
        content:
          "Anvi Farms crafts traditional Bilona ghee from fresh cow milk — hand-churned, slow-cooked on a wood flame, with no additives or preservatives.",
      },
      { property: "og:title", content: "Anvi Farms | Pure Bilona Cow Ghee" },
      {
        property: "og:description",
        content: "Traditional Bilona ghee made the authentic way. Pure goodness in every spoon.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const PHONE = "7780505418";
const WHATSAPP = `https://wa.me/91${PHONE}?text=${encodeURIComponent(
  "Hi Anvi Farms, I'd like to order your Bilona ghee.",
)}`;

const links = [
  { href: "#process", label: "Process" },
  { href: "#why", label: "Why Us" },
  { href: "#product", label: "Product" },
  { href: "#contact", label: "Contact" },
];

const steps = [
  { title: "Milk from healthy cows", text: "Fresh milk collected daily from grass-fed desi cows." },
  { title: "Heating of milk", text: "Gently heated in earthen pots over a slow wood flame." },
  { title: "Converting to curd", text: "Cultured overnight in clay pots to set into thick curd." },
  { title: "Bilona churning", text: "Hand-churned with a wooden bilona to retain nutrients." },
  { title: "Makkhan", text: "Fresh white butter is collected from the churned curd." },
  { title: "Slow-cooked ghee", text: "Simmered on a slow flame until golden, grainy ghee forms." },
];

const benefits = [
  { title: "Pure & Natural", text: "Only milk. Nothing else — no oils, colours or fillers." },
  { title: "Traditional Method", text: "The ancient Vedic Bilona process, never machine-shortcut." },
  { title: "No Additives", text: "Zero preservatives, zero chemicals, zero compromise." },
  { title: "Rich in Nutrients", text: "Naturally retains vitamins A, D, E, K and healthy fats." },
];

function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-border/70 bg-background/90 shadow-card backdrop-blur-md"
          : "border-transparent bg-background/60 backdrop-blur"
      }`}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3 sm:px-5 lg:grid-cols-[auto_1fr_auto]">
        <a href="#top" className="flex min-w-0 items-center gap-2.5 sm:gap-3">
          <img
            src={logoAsset.url}
            alt="Anvi Farms logo"
            className={`shrink-0 rounded-full transition-all duration-300 ${
              scrolled ? "h-9 w-9" : "h-11 w-11"
            }`}
          />
          <span className="truncate font-display text-base font-semibold text-primary sm:text-lg">
            Anvi Farms
          </span>
        </a>

        <nav className="hidden items-center justify-center gap-7 text-sm text-muted-foreground lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative py-1 transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:text-primary hover:after:origin-bottom-left hover:after:scale-x-100"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-2">
          <Button
            asChild
            size="sm"
            className="hidden surface-gold text-accent-foreground transition-transform hover:scale-105 hover:opacity-90 sm:inline-flex"
          >
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
              Order on WhatsApp
            </a>
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-border bg-card text-primary transition-transform active:scale-95 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t border-border/60 bg-background/95 backdrop-blur transition-[max-height,opacity] duration-300 lg:hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-auto flex max-w-6xl flex-col px-4 py-3 sm:px-5">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={open ? { animationDelay: `${i * 60}ms` } : undefined}
              className={`rounded-lg px-2 py-3 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-primary ${
                open ? "animate-rise" : ""
              }`}
            >
              {l.label}
            </a>
          ))}
          <Button
            asChild
            className="mt-2 surface-gold text-accent-foreground sm:hidden"
            onClick={() => setOpen(false)}
          >
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
              Order on WhatsApp
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
}

function Index() {
  return (
    <div className="min-h-screen surface-warm">
      <SiteHeader />

      <main id="top">
        {/* Hero */}
        <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-5 md:grid-cols-2 md:py-24">
          <div className="animate-rise">
            <span className="inline-block rounded-full bg-secondary px-4 py-1.5 text-xs font-medium tracking-wide text-olive uppercase">
              Ancient Superfood
            </span>
            <h1 className="mt-5 font-display text-4xl leading-tight text-primary sm:text-5xl md:text-6xl">
              Pure goodness in <span className="text-gold-deep">every spoon</span>
            </h1>
            <p className="mt-5 max-w-md text-base text-muted-foreground md:text-lg">
              Traditional Bilona ghee from Anvi Farms — made with fresh cow milk, hand-churned and
              slow-cooked the authentic way.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="surface-gold text-accent-foreground shadow-soft transition-transform hover:scale-105 hover:opacity-90"
              >
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                  Order on WhatsApp
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="transition-transform hover:scale-105">
                <a href={`tel:+91${PHONE}`}>Call {PHONE}</a>
              </Button>
            </div>
          </div>
          <div className="relative animate-rise [animation-delay:150ms]">
            <div className="absolute -inset-4 rounded-[2rem] surface-gold opacity-25 blur-2xl animate-glow" />
            <img
              src={jarAsset.url}
              alt="Anvi Farms Bilona ghee jar with the Anvi Farms sticker"
              width={1200}
              height={1600}
              className="relative w-full rounded-[1.75rem] object-cover shadow-soft animate-float"
            />
          </div>
        </section>

        {/* Benefits */}
        <section id="why" className="border-y border-border/60 bg-card/70 py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-5">
            <Reveal>
              <h2 className="text-center font-display text-3xl text-primary md:text-4xl">
                Why Anvi Farms Ghee
              </h2>
            </Reveal>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map((b, i) => (
                <Reveal
                  key={b.title}
                  delay={i * 90}
                  className="rounded-2xl border border-border bg-background p-6 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft"
                >
                  <h3 className="font-display text-lg text-primary">{b.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{b.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section id="process" className="mx-auto max-w-6xl px-4 py-16 sm:px-5 md:py-24">
          <Reveal className="text-center">
            <h2 className="font-display text-3xl text-primary md:text-4xl">The Bilona Method</h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Six unhurried steps, exactly as it has been done for generations.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-center">
            <ol className="space-y-5">
              {steps.map((s, i) => (
                <Reveal
                  as="li"
                  key={s.title}
                  delay={i * 80}
                  className="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full surface-gold font-display text-sm font-semibold text-accent-foreground">
                    {i + 1}
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display text-lg text-primary">{s.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{s.text}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
            <Reveal delay={120}>
              <img
                src={processAsset.url}
                alt="Illustrated Bilona ghee making process at Anvi Farms"
                loading="lazy"
                className="w-full rounded-[1.75rem] border border-border shadow-soft"
              />
            </Reveal>
          </div>
        </section>

        {/* Product */}
        <section id="product" className="border-y border-border/60 bg-card/70 py-16 md:py-24">
          <div className="mx-auto grid max-w-5xl items-center gap-10 px-4 sm:px-5 md:grid-cols-2">
            <Reveal className="group relative">
              <img
                src={jarFlowersAsset.url}
                alt="Open jar of Anvi Farms Bilona ghee with a wooden spoon, surrounded by fresh flowers"
                loading="lazy"
                width={1200}
                height={1600}
                className="w-full rounded-[1.75rem] object-cover shadow-soft transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </Reveal>
            <Reveal delay={120}>
              <h2 className="font-display text-3xl text-primary md:text-4xl">Bilona Cow Ghee</h2>
              <p className="mt-4 text-muted-foreground">
                Golden, grainy and aromatic. Ideal for everyday cooking, tempering dals, drizzling
                over rotis, and for traditional rituals.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                <li>• Available in 250 ml, 500 ml and 1 litre jars</li>
                <li>• Made fresh in small batches</li>
                <li>• Order directly on WhatsApp — no middlemen</li>
              </ul>
              <Button
                asChild
                size="lg"
                className="mt-8 surface-gold text-accent-foreground shadow-soft transition-transform hover:scale-105 hover:opacity-90"
              >
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                  Enquire on WhatsApp
                </a>
              </Button>
            </Reveal>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mx-auto max-w-6xl px-4 py-16 sm:px-5 md:py-24">
          <Reveal>
            <h2 className="text-center font-display text-3xl text-primary md:text-4xl">
              Get in Touch
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
            <Reveal className="rounded-2xl border border-border bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
              <h3 className="font-display text-lg text-primary">Phone</h3>
              <a href={`tel:+91${PHONE}`} className="mt-2 block text-muted-foreground hover:text-primary">
                +91 {PHONE}
              </a>
            </Reveal>
            <Reveal
              delay={90}
              className="rounded-2xl border border-border bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
            >
              <h3 className="font-display text-lg text-primary">WhatsApp</h3>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block text-muted-foreground hover:text-primary"
              >
                Chat with us
              </a>
            </Reveal>
            <Reveal
              delay={180}
              className="rounded-2xl border border-border bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-soft sm:col-span-2 md:col-span-1"
            >
              <h3 className="font-display text-lg text-primary">Address</h3>
              <p className="mt-2 text-sm text-muted-foreground">Coming soon</p>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/60 bg-background py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-5 text-center">
          <img src={logoAsset.url} alt="Anvi Farms" className="h-12 w-12 rounded-full" loading="lazy" />
          <p className="text-sm text-muted-foreground">
            Anvi Farms — Traditional Bilona Ghee made the authentic way.
          </p>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Anvi Farms. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full surface-gold shadow-soft transition-transform hover:scale-110 sm:bottom-6 sm:right-6 animate-float"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7 text-primary">
          <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.48-1.75-1.65-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.48-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47s1.06 2.86 1.21 3.06c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.75-.71 2-1.4.25-.69.25-1.28.17-1.4-.07-.13-.27-.2-.57-.35z" />
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2zm0 18.15a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.24-8.23a8.24 8.24 0 0 1 0 16.47z" />
        </svg>
      </a>
    </div>
  );
}
