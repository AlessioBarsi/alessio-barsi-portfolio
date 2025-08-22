'use client';

import * as React from 'react';
import { useEffect, useState, useRef } from 'react';
import {
  NavigationMenu,
  NavigationMenuItem, NavigationMenuList
} from '../../navigation-menu';
import Link from 'next/link';
import Contacts from '@/components/Contacts';
// Utility to concatenate class names
function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ');
}

// Types
export interface Navbar01NavLink {
  href: string;
  label: string;
  active?: boolean;
}

export interface Navbar01Props extends React.HTMLAttributes<HTMLElement> {
  navigationLinks?: Navbar01NavLink[];
}

// Default navigation links
const defaultNavigationLinks: Navbar01NavLink[] = [
  { href: '#', label: 'Home', active: true },
  { href: '#projects', label: 'Projects' },
  { href: '#resume', label: 'Resume' },
  { href: '#contacts', label: 'Contacts' },
];

export const Navbar01 = React.forwardRef<HTMLElement, Navbar01Props>(
  (
    {
      className,
      navigationLinks = defaultNavigationLinks,
      ...props
    },
    ref
  ) => {
    const [isMobile, setIsMobile] = useState(false);
    const containerRef = useRef<HTMLElement>(null);

    useEffect(() => {
      const checkWidth = () => {
        if (containerRef.current) {
          const width = containerRef.current.offsetWidth;
          setIsMobile(width < 768); // 768px is md breakpoint
        }
      };

      checkWidth();

      const resizeObserver = new ResizeObserver(checkWidth);
      if (containerRef.current) {
        resizeObserver.observe(containerRef.current);
      }

      return () => {
        resizeObserver.disconnect();
      };
    }, []);

    // Combine refs
    const combinedRef = React.useCallback((node: HTMLElement | null) => {
      containerRef.current = node;
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
    }, [ref]);

    return (
      <header
        ref={combinedRef}
        className={cn(
          'sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 md:px-6 [&_*]:no-underline',
          className
        )}
        {...props}
      >
        <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between gap-4">
          {/* Left side */}
          <div className="flex items-center gap-2">
            {/* Mobile menu trigger */}
            {isMobile && (
              <div className="text-3xl font-bold">ALESSIO BARSI</div>
            )}
            {/* Main nav */}
            <div className="flex items-center gap-6">
              <button
                onClick={(e) => e.preventDefault()}
                className="flex items-center space-x-2 text-primary hover:text-primary/90 transition-colors cursor-pointer"
              >
                <div className="text-2xl">
                </div>
                <span className="hidden font-bold text-5xl sm:inline-block">ALESSIO BARSI</span>
              </button>
            </div>
          </div>
          {/* Right side */}
          <div className="flex items-center gap-3">
              {!isMobile && (
                <NavigationMenu className="flex">
                  <NavigationMenuList className="gap-1">
                    <Contacts />
                  </NavigationMenuList>
                </NavigationMenu>
              )}
          </div>
        </div>
      </header>
    );
  }
);

Navbar01.displayName = 'Navbar01';