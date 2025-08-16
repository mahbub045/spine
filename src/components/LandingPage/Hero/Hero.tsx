"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={"/images/heroBg.jpg"}
          alt="Government Building"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/40 via-primary/35 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 xl:px-0 py-20">
        <div className="max-w-2xl md:max-w-4xl">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-200 mb-6 md:mb-8 leading-tight">
            Shaping Political <span className="text-primary">Narratives</span>{" "}
            That Matter
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 md:mb-12 leading-relaxed max-w-xl md:max-w-3xl">
            Strategic communications that build trust, influence perception, and
            drive meaningful change in the political landscape.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <Button className="bg-primary px-6 py-4 sm:py-6 hover:cursor-pointer transition-transform duration-500 ease-in-out hover:scale-105">
              Transform Your Message
              <ArrowRight />
            </Button>

            <Button
              variant="outline"
              className="px-6 py-4 sm:py-6 border-2 border-primary bg-transparent text-white hover:bg-white/50 hover:cursor-pointer transition-all duration-500"
            >
              Crisis Support Available
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 md:mt-16 pt-6 md:pt-8 border-t border-primary-foreground/20">
            <p className="text-gray-300 text-xs sm:text-sm uppercase tracking-wider mb-4">
              Trusted by Political Leaders Across the Nation
            </p>
            <div className="flex flex-wrap gap-4 sm:gap-8 text-gray-400">
              <span className="text-xs sm:text-sm">Confidential</span>
              <span className="hidden sm:inline">•</span>
              <span className="text-xs sm:text-sm">Strategic</span>
              <span className="hidden sm:inline">•</span>
              <span className="text-xs sm:text-sm">Results-Driven</span>
              <span className="hidden sm:inline">•</span>
              <span className="text-xs sm:text-sm">24/7 Support</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-4 sm:w-6 h-8 sm:h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-2 sm:h-3 bg-primary-foreground/60 rounded-full mt-1 sm:mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
