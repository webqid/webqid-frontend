"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

interface NavItem {
  readonly label: string;
  readonly href: string;
}

const NAV_ITEMS: readonly NavItem[] = [
  { label: "solutions", href: "/#solutions" },
  { label: "studio", href: "/#studio" },
  { label: "workspace", href: "/#workspace" },
  { label: "contact", href: "/#contact" },
] as const;

/**
 * Main navigation header with responsive mobile menu.
 * Includes accessibility features: keyboard navigation, ARIA, focus management.
 */
export default function Nav(): React.JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  // Close on Escape key
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent): void {
      if (event.key === "Escape") {
        closeMenu();
      }
    }

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [isOpen, closeMenu]);

  const menuVariants = {
    open: { opacity: 1, y: 0, display: "block" },
    closed: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : -10,
      transitionEnd: { display: "none" },
    },
  };

  return (
    <motion.nav
      role="navigation"
      aria-label="Main navigation"
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 inset-x-0 z-50 backdrop-blur-md border-b border-neutral-800/50"
    >
      <div className="container flex items-center justify-between h-14">
        {/* Logo */}
        <Link
          href="/"
          className="font-medium tracking-tight text-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 rounded-sm"
        >
          webqid<span className="text-teal-500 font-serif">.</span>
        </Link>

        {/* Desktop navigation */}
        <div id="main-menu" className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              {NAV_ITEMS.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <Link href={item.href}>{item.label}</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile toggle */}
        <Button
          id="mobile-menu-button"
          variant="ghost"
          size="icon"
          aria-label={isOpen ? "Close main menu" : "Open main menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={toggleMenu}
          className="md:hidden text-neutral-400 hover:text-neutral-100 transition hover:bg-transparent focus-visible:ring-2 focus-visible:ring-teal-500 rounded-sm"
        >
          {isOpen ? (
            <X size={20} aria-hidden="true" />
          ) : (
            <Menu size={20} aria-hidden="true" />
          )}
        </Button>
      </div>

      {/* Mobile menu panel */}
      <motion.div
        id="mobile-menu"
        role="menu"
        aria-labelledby="mobile-menu-button"
        aria-hidden={!isOpen}
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
        transition={{ duration: shouldReduceMotion ? 0 : 0.25, ease: "easeOut" }}
        className="md:hidden border-t border-neutral-800/50 bg-[#0A0A0A]/95 backdrop-blur-md"
      >
        <div className="container py-6 flex flex-col space-y-4 text-neutral-400 text-base">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              role="menuitem"
              tabIndex={isOpen ? 0 : -1}
              onClick={closeMenu}
              className="focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 rounded-sm"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
}
