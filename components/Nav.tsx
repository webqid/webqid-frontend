"use client";

import * as React from "react";
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

export default function Header() {
  const [open, setOpen] = React.useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Close on Escape key
  React.useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

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
          className="font-medium tracking-tight text-2xl focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-sm"
        >
          webqid<span className="text-teal-500 font-serif">.</span>
        </Link>

        {/* Desktop navigation */}
        <div id="main-menu" className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="/#solutions">solutions</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="/#studio">studio</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="/#workspace">workspace</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="/#contact">contact</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile toggle */}
        <Button
          id="mobile-menu-button"
          variant="ghost"
          size="icon"
          aria-label={open ? "Close main menu" : "Open main menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
          className="md:hidden text-neutral-400 hover:text-neutral-100 transition hover:bg-transparent focus:ring-2 focus:ring-teal-500 rounded-sm"
        >
          {/* Icons are decorative */}
          {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </Button>
      </div>

      {/* Mobile menu panel */}
      <motion.div
        id="mobile-menu"
        role="menu"
        aria-labelledby="mobile-menu-button"
        aria-hidden={!open}
        initial={false}
        animate={open ? "open" : "closed"}
        variants={menuVariants}
        transition={{ duration: shouldReduceMotion ? 0 : 0.25, ease: "easeOut" }}
        className="md:hidden border-t border-neutral-800/50 bg-[#0A0A0A]/95 backdrop-blur-md"
      >
        <div className="container py-6 flex flex-col space-y-4 text-neutral-400 text-base">
          <Link
            href="/#solutions"
            tabIndex={open ? 0 : -1}
            onClick={() => setOpen(false)}
            className="focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-sm"
          >
            solutions
          </Link>
          <Link
            href="/#studio"
            tabIndex={open ? 0 : -1}
            onClick={() => setOpen(false)}
            className="focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-sm"
          >
            studio
          </Link>
          <Link
            href="/#workspace"
            tabIndex={open ? 0 : -1}
            onClick={() => setOpen(false)}
            className="focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-sm"
          >
            workspace
          </Link>
          <Link
            href="/#contact"
            tabIndex={open ? 0 : -1}
            onClick={() => setOpen(false)}
            className="focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-sm"
          >
            contact
          </Link>
        </div>
      </motion.div>
    </motion.nav>
  );
}
