// import React, { useState } from "react";
import Navbar from "@/components/Navbar";

export default function HeroSection() {
  return (
    <div>
      <div className="min-h-screen bg-background relative overflow-hidden transition-colors duration-300">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-br from-primary/20 via-accent/10 to-primary/20"></div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-125 h-125 bg-primary/20 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
          <div
            className="absolute w-125 h-125 bg-accent/15 rounded-full blur-3xl top-1/2 -right-48 animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute w-80 h-80 bg-primary/25 rounded-full blur-3xl bottom-0 left-1/3 animate-pulse"
            style={{ animationDelay: "0.5s" }}
          ></div>
        </div>

        {/* Navigation */}
        <Navbar />
      </div>
    </div>
  );
}
