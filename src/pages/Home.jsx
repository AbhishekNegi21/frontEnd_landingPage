import { ShoppingBag, Truck, RotateCcw, Shirt } from "lucide-react";

function Hero() {
  return (
    <div className="flex flex-col xl:flex-row">
      <section
        className="relative mt-[53px] flex h-[80vh] w-full items-center justify-center bg-cover bg-center bg-no-repeat xl:flex xl:w-[50vw] xl:flex-col"
        style={{
          backgroundImage: "url('/hero.jpg')",
        }}
      >
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold">Shirts</h1>

          <button className="mt-4 cursor-pointer rounded-lg px-6 py-3 underline hover:scale-102">
            SHOP NOW
          </button>
        </div>
      </section>
      <section
        className="relative flex h-[80vh] w-full items-center justify-center bg-cover bg-center bg-no-repeat xl:flex xl:w-[50vw] xl:flex-col"
        style={{ backgroundImage: "url('/hero2.jpg')" }}
      >
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold">Denims</h1>
          <button className="mt-4 cursor-pointer rounded-lg px-6 py-3 underline hover:scale-102">
            SHOP NOW
          </button>
        </div>
      </section>
    </div>
  );
}

function PricingSection() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-6 text-center text-4xl font-bold">
          Simple & Transparent Pricing
        </h2>
        <p className="mx-auto mb-12 max-w-xl text-center text-gray-600">
          Choose the perfect plan for your style. No hidden fees — ever.
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex transform flex-col rounded-2xl border border-gray-200 bg-white p-8 text-center shadow transition duration-300 hover:scale-101">
            <h3 className="mb-2 text-xl font-semibold">Basic</h3>
            <p className="mb-4 text-4xl font-bold">$19/month</p>
            <p className="mb-6 text-gray-600">For casual shoppers</p>
            <ul className="mb-6 space-y-2 text-gray-700">
              <li>✔ Free Shipping</li>
              <li>✔ 24/7 Support</li>
              <li>✔ Basic Discounts</li>
            </ul>
            <button className="w-full rounded-lg bg-gray-900 py-3 text-white transition hover:bg-gray-800">
              Choose Plan
            </button>
          </div>

          <div className="relative flex transform flex-col rounded-2xl border-2 border-gray-900 bg-white p-8 text-center shadow-xl transition duration-300 hover:scale-101">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gray-900 px-4 py-1 text-sm text-white">
              Most Popular
            </span>
            <h3 className="mb-2 text-xl font-semibold">Premium</h3>
            <p className="mb-4 text-4xl font-bold">$49/month</p>
            <p className="mb-6 text-gray-600">Best for frequent shoppers</p>
            <ul className="mb-6 space-y-2 text-gray-700">
              <li>✔ Free Express Shipping</li>
              <li>✔ Exclusive Deals</li>
              <li>✔ Premium Support</li>
            </ul>
            <button className="w-full rounded-lg bg-gray-900 py-3 text-white transition hover:bg-gray-800">
              Choose Plan
            </button>
          </div>

          <div className="flex transform flex-col rounded-2xl border border-gray-200 bg-white p-8 text-center shadow transition duration-300 hover:scale-101">
            <h3 className="mb-2 text-xl font-semibold">Royal</h3>
            <p className="mb-4 text-4xl font-bold">$99/month</p>
            <p className="mb-6 text-gray-600">For serious fashion lovers</p>
            <ul className="mb-6 space-y-2 text-gray-700">
              <li>✔ VIP Access</li>
              <li>✔ Exclusive Drops</li>
              <li>✔ Dedicated Stylist</li>
            </ul>
            <button className="w-full rounded-lg bg-gray-900 py-3 text-white transition hover:bg-gray-800">
              Choose Plan
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const features = [
    {
      icon: Shirt,
      title: "Premium Fabrics",
      description:
        "Carefully curated materials from the finest suppliers worldwide for unmatched comfort and durability.",
    },
    {
      icon: ShoppingBag,
      title: "Curated Collections",
      description:
        "Handpicked styles that blend contemporary design with timeless elegance for every occasion.",
    },
    {
      icon: Truck,
      title: "Fast Shipping",
      description:
        "Orders shipped within 24 hours. Free shipping on orders over $100 to the continental US.",
    },
    {
      icon: RotateCcw,
      title: "Easy Returns",
      description:
        "30-day return window with prepaid labels. No questions asked. Your satisfaction is guaranteed.",
    },
  ];

  return (
    <section className="bg-muted/30 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold tracking-tight text-balance sm:text-5xl">
            Why choose our collection
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg text-pretty">
            We're committed to delivering exceptional quality, style, and
            customer service with every purchase.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.title}
                className="flex flex-col items-start gap-4"
              >
                <div className="bg-accent/10 rounded-lg p-3">
                  <IconComponent className="text-accent h-6 w-6" />
                </div>

                <div>
                  <h3 className="text-foreground mb-2 text-lg font-semibold">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="border-border mt-16 border-t pt-16">
          <div className="grid gap-8 sm:grid-cols-3">
            <div className="text-center">
              <p className="text-foreground mb-2 text-3xl font-bold">50K+</p>
              <p className="text-muted-foreground text-sm">Happy customers</p>
            </div>
            <div className="text-center">
              <p className="text-foreground mb-2 text-3xl font-bold">98%</p>
              <p className="text-muted-foreground text-sm">Positive reviews</p>
            </div>
            <div className="text-center">
              <p className="text-foreground mb-2 text-3xl font-bold">24/7</p>
              <p className="text-muted-foreground text-sm">Customer support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductHighlights() {
  const highlights = [
    {
      title: "Premium Fabric",
      description:
        "Crafted from high-quality cotton for superior comfort and durability.",
      icon: "🧵",
    },
    {
      title: "Perfect Fit",
      description:
        "Tailored design that adapts to your body for a confident everyday look.",
      icon: "👌",
    },
    {
      title: "Long Lasting",
      description:
        "Fade-resistant stitching and colors that stay fresh after every wash.",
      icon: "⏳",
    },
    {
      title: "Eco-Friendly",
      description:
        "Sustainably sourced materials that are gentle on the environment.",
      icon: "🌿",
    },
  ];

  return (
    <section className="bg-slate-50 px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold">Product Highlights</h2>
          <p className="mt-2 text-gray-600">
            Discover what makes our collection stand out from the rest.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center rounded-xl bg-gray-50 p-6 text-center shadow-sm transition hover:scale-[1.03] hover:shadow-md"
            >
              <div className="text-4xl">{item.icon}</div>
              <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 py-6">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center px-6 text-sm text-gray-400">
        <h2 className="mb-2 text-lg font-semibold text-white">ProjectZero</h2>

        <p className="mb-4 text-center">
          Premium clothing crafted for comfort, quality, and everyday style.
        </p>

        <div className="mb-4 flex gap-6 text-gray-500">
          <a href="#" className="hover:text-gray-300">
            Shirts
          </a>
          <a href="#" className="hover:text-gray-300">
            Denims
          </a>
          <a href="#" className="hover:text-gray-300">
            Contact
          </a>
        </div>

        <p className="text-gray-600">
          © {new Date().getFullYear()} ProjectZero. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div>
      <Hero />
      <PricingSection />
      <FeaturesSection />
      <ProductHighlights />
      <Footer />
    </div>
  );
}
