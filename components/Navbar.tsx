"use client";

import { FileText, Sun, Moon } from "lucide-react";
import Link from "next/link";
import SocialButton from "./SocialButtion";

export default function Navbar() {
  return (
    <>
      <nav className="relative z-10 w-full border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-md">
                <FileText className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-foreground text-xl font-bold tracking-tight">
                FormFlow
              </span>
            </div>

            <div className="flex items-center space-x-8">
              {/* Navigation Links */}
              <div className="hidden lg:flex items-center gap-8 text-muted-foreground font-medium">
                <Link
                  href="/"
                  className="hover:text-foreground transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/dashboard"
                  className="hover:text-foreground transition-colors"
                >
                  Dashboard
                </Link>
              </div>

              {/* Auth Buttons */}
              <SocialButton />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
