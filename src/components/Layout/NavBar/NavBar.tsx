"use client";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    {
      name: "Services",
      href: "#services",
      submenu: [
        { name: "Diagnostics", href: "#" },
        { name: "Therapy", href: "#therapy" },
        { name: "Consultation", href: "#consultation" },
      ],
    },
    { name: "Approach", href: "#about" },
    { name: "Impact", href: "#impact" },
    { name: "Insights", href: "#insights" },
    { name: "Contact", href: "#contact" },
  ];
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div>
            <Link href="/" className="flex flex-col items-start">
              <span className="font-gilker text-2xl sm:text-3xl font-bold text-primary uppercase tracking-tight leading-none">
                SPINE
              </span>
              <span className="text-[6px] sm:text-[8px] uppercase tracking-widest text-foreground/60">
                FOR BETTER BANGLADESH
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 sm:space-x-8">
            {navItems.map((item) =>
              item.submenu ? (
                <div key={item.name} className="relative group inline-block">
                  <a
                    href={item.href}
                    className="nav-link hover:text-primary text_decoration_hover inline-flex items-center"
                  >
                    {item.name}
                  </a>

                  {/* Dropdown */}
                  <div className="absolute left-0 top-full mt-0 z-50 w-40 sm:w-48 bg-card text-card-foreground rounded-md shadow-lg opacity-0 invisible pointer-events-none group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto transition-opacity duration-150 ease-out">
                    <ul className="py-2">
                      {item.submenu.map((sub) => (
                        <li key={sub.name}>
                          <Link
                            href={sub.href}
                            className="block px-3 sm:px-4 py-1 sm:py-2 text-sm hover:bg-muted/40"
                          >
                            <span
                              className="text_decoration_hover opacity-50"
                              style={{ cursor: "not-allowed" }}
                            >
                              {sub.name}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="nav-link hover:text-primary text_decoration_hover"
                >
                  {item.name}
                </Link>
              )
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 hover:bg-muted rounded-lg "
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-3 sm:mt-4 pb-3 sm:pb-4 border-t border-border pt-3 sm:pt-4">
            <div className="flex flex-col space-y-3 sm:space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary text_decoration_hover font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default NavBar;
