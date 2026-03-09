"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Zap,
  TrendingUp,
  Target,
  Rocket,
  Shield,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import ConfettiEffect from "@/components/confetti";

const CHECKOUT_URL = "https://pay.hotmart.com/T104802295W";

export default function AccessDenied() {
  const features = [
    {
      icon: Zap,
      title: "Master the Faceless YouTube Automation",
      description:
        "Maximize your account's visibility and reach millions of viewers",
    },
    {
      icon: Target,
      title: "Optimize Your YouTube Profile",
      description:
        "Convert viewers into loyal followers with proven strategies",
    },
    {
      icon: Rocket,
      title: "Unlimited Content Creation",
      description:
        "Use Canva to create unlimited Shorts and Videos for YouTube",
    },
    {
      icon: TrendingUp,
      title: "Stay Ahead of Trends",
      description:
        "Discover trending sounds and concepts that go viral on YouTube",
    },
    {
      icon: Sparkles,
      title: "Viral Content Strategy",
      description:
        "Create compelling videos that earn thousands of views per video",
    },
    {
      icon: Shield,
      title: "Avoid Common Pitfalls",
      description: "Learn how to avoid penalties and ensure steady growth",
    },
  ];

  const benefits = [
    "Master the Faceless YouTube Automation and maximize your account's visibility!",
    "Optimize your YouTube profile to convert viewers into loyal followers",
    "How to use Canva to create unlimited Shorts and Videos for YouTube",
    "Stay up to date with the latest Faceless YouTube Automation trends",
    "Discover how to find and leverage trending sounds and concepts on YouTube.",
    "Create compelling videos that go viral on YouTube, earning you thousands of views per video.",
    "Develop a winning content strategy to become an influential YouTube creator.",
    "Use Canva to create Instagram branding elements including Profile Photos, Banners and more",
    "Harness the power of ChatGPT to enhance your YouTube video content and engage your audience.",
    "Avoid common pitfalls and penalties on Faceless YouTube, ensuring steady growth.",
    "Unleash growth hacks to land your content on the YouTube Home feed and achieve viral success.",
    "Unlock insider secrets of YouTube Marketing that industry experts rely on.",
    "Stay ahead of your competitors using advanced YouTube features and techniques.",
    "Optimize your YouTube content for search engine visibility through SEO strategies.",
    "Master the latest YouTube marketing methods to stand out in a crowded space",
    "Discover valuable tips and tricks to elevate your YouTube Shorts marketing game.",
    "Learn how to use ChatGPT effectively for content creation",
  ];

  return (
    <div
      className="w-full min-h-screen text-white relative overflow-x-hidden"
      style={{
        backgroundImage: `
          radial-gradient(
            circle at 20% 10%,
            rgba(0, 0, 0, 0.45) 0%,
            transparent 55%
          ),
          radial-gradient(
            circle at 80% 30%,
            rgba(0, 0, 0, 0.4) 0%,
            transparent 60%
          ),
          radial-gradient(
            circle at 15% 85%,
            rgba(0, 0, 0, 0.5) 0%,
            transparent 55%
          ),
          radial-gradient(
            circle at 90% 95%,
            rgba(0, 0, 0, 0.55) 0%,
            transparent 60%
          ),
          linear-gradient(
            to bottom,
            #500016 0%,
            #430012 30%,
            #36000f 60%,
            #29000c 100%
          )
        `,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        backgroundAttachment: "fixed",
      }}
    >

      {/* Red accent line (top of page) */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent pointer-events-none" />

      <main className="relative z-10 w-full">
        {/* HERO SECTION */}
        <section className="relative w-full">
          <div className="max-w-7xl mx-auto px-6 py-20 md:py-32 text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/50 bg-green-500/10 backdrop-blur-sm"
              >
                <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-medium text-green-300">
                  GOOD FACELESS CHANNELS
                </span>
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-black tracking-tight">
                <span className="bg-gradient-to-r from-green-400 via-green-600 to-green-400 bg-clip-text text-transparent">
                  GOOD FACELESS
                </span>
                <br />
                <span className="text-white">CHANNELS</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
                Master the Faceless YouTube Automation and{" "}
                <span className="text-green-700 font-semibold">
                  maximize your account&apos;s visibility!
                </span>
              </p>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="pt-6"
              >
                <button
                  onClick={() => window.open(CHECKOUT_URL, "_blank")}
                  className="group relative inline-flex items-center gap-3 px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold text-lg rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/50"
                >
                  <span>START YOUR JOURNEY</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 rounded-lg bg-green-500 blur-xl opacity-50 group-hover:opacity-75 transition-opacity -z-10" />
                </button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* FEATURES GRID */}
        <section className="relative z-10 w-full py-20 border-t border-red-600/20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                What You&apos;ll <span className="text-green-700">Master</span>
              </h2>
              <p className="text-gray-400 text-lg">
                Everything you need to dominate YouTube
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative p-6 rounded-xl border border-gray-800 bg-gradient-to-br from-gray-900/50 to-black hover:border-red-600/50 transition-all duration-300"
                  >
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-red-600/0 to-red-600/0 group-hover:from-red-600/10 group-hover:to-red-600/5 transition-all duration-300" />
                    <div className="relative z-10">
                      <div className="inline-flex p-3 rounded-lg bg-red-600/20 border border-red-600/30 mb-4">
                        <Icon className="w-6 h-6 text-red-500" />
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-white">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* BENEFITS LIST */}
        <section className="relative z-10 w-full py-20 border-t border-red-600/20">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Complete <span className="text-green-700">Learning Path</span>
              </h2>
              <p className="text-gray-400 text-lg">
                Everything included in the Good Faceless Channels
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-4 p-4 rounded-lg border border-gray-800 bg-gray-900/30 hover:border-red-600/50 hover:bg-gray-900/50 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-600 flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>
                  <p className="text-gray-300 leading-relaxed">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="relative z-10 w-full py-20 border-t border-red-600/20">
          <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-6xl font-black">
                Ready to <span className="text-green-700">Dominate</span> YouTube?
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Join the Good Faceless Channels program and transform your
                YouTube presence into a revenue-generating machine.
              </p>

              <div className="pt-8">
                <button
                  onClick={() => window.open(CHECKOUT_URL, "_blank")}
                  className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold text-xl rounded-lg transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-green-500/50"
                >
                  <span>GET STARTED NOW</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  <div className="absolute inset-0 rounded-lg bg-green-500 blur-2xl opacity-60 group-hover:opacity-80 transition-opacity -z-10" />
                </button>
              </div>

              <p className="text-sm text-gray-500 pt-4">
                Limited spots available • Join thousands of successful creators
              </p>
            </motion.div>
          </div>
        </section>

        <ConfettiEffect />
      </main>

      <footer className="relative z-10 w-full py-8 px-4">
        {/* Red divider line (footer boundary) */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent pointer-events-none" />
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <nav className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm text-white/70">
            <Link
              href="/#"
              className="hover:text-white hover:underline transition-colors"
            >
              Contact
            </Link>
            <span className="text-white/40" aria-hidden>
              |
            </span>
            <Link
              href="/#"
              className="hover:text-white hover:underline transition-colors"
            >
              Terms of Use
            </Link>
            <span className="text-white/40" aria-hidden>
              |
            </span>
            <Link
              href="/#"
              className="hover:text-white hover:underline transition-colors"
            >
              Disclaimer
            </Link>
            <span className="text-white/40" aria-hidden>
              |
            </span>
            <Link
              href="/#"
              className="hover:text-white hover:underline transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-white/40" aria-hidden>
              |
            </span>
            <Link
              href="/#"
              className="hover:text-white hover:underline transition-colors"
            >
              Refund Policy
            </Link>
          </nav>
          <p className="text-xs text-white/50">
            © 2025 by All rights reserved.
            <br />
            <br />
            This site has no affiliation with Hotmart or Hotmart Company. It is
            also neither sponsored nor endorsed by Hotmart in any way. HOTMART
            is a registered trademark of Hotmart Company.
          </p>
        </div>
      </footer>
    </div>
  );
}
