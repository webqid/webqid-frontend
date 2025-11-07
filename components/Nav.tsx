"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "motion/react";
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

  return (
    <motion.nav
      aria-label="Main navigation"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 inset-x-0 z-50 backdrop-blur-md border-b border-neutral-800/50"
    >
      <div className="container flex items-center justify-between h-14">
        {/* Logo */}
        <Link href="/" className="font-medium tracking-tight text-2xl">
          webqid<span className="text-teal-500 font-serif">.</span>
        </Link>

        {/* Desktop navigation */}
        <div id="main-menu" className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/#philosophy">philosophy</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/#solutions">solutions</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/#studio">studio</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/#contact">contact</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile toggle */}
        <Button
          variant="ghost"
          size="icon"
          aria-label={open ? "Close main menu" : "Open main menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
          className="md:hidden text-neutral-400 hover:text-neutral-100 transition hover:bg-transparent"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </Button>
      </div>

      {/* Mobile menu panel */}
      <motion.div
        id="mobile-menu"
        initial={false}
        aria-hidden={!open}
        animate={open ? "open" : "closed"}
        variants={{
          open: { opacity: 1, y: 0, display: "block" },
          closed: {
            opacity: 0,
            y: -10,
            transitionEnd: { display: "none" },
          },
        }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="md:hidden border-t border-neutral-800/50 bg-[#0A0A0A]/95 backdrop-blur-md"
      >
        <div className="container py-6 flex flex-col space-y-4 text-neutral-400 text-base">
          <Link href="/#philosophy" onClick={() => setOpen(false)}>philosophy</Link>
          <Link href="/#solutions" onClick={() => setOpen(false)}>solutions</Link>
          <Link href="/#studio" onClick={() => setOpen(false)}>studio</Link>
          <Link href="/#contact" onClick={() => setOpen(false)}>contact</Link>
        </div>
      </motion.div>
    </motion.nav>
  );
}
