"use client"

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { Button } from './ui/button';


const MobileNav = ({ lang, toggleLanguage }) => {
    const pathname = usePathname();
    const links = {
      es: [
        { name: "Experiencia", path: "/resume" },
        { name: "Proyectos", path: "/work" },
        { name: "Contacto", path: "/contact" },
      ],
      en: [
        { name: "Experience", path: "/resume" },
        { name: "Projects", path: "/work" },
        { name: "Contact", path: "/contact" },
      ],
    };
  
    return (
      <Sheet>
        <SheetTrigger className="flex justify-center items-center">
          <CiMenuFries className="text-[32px] text-accent" />
        </SheetTrigger>
        <SheetContent className="flex flex-col">
          {/* Logo */}
          <div className="mt-32 mb-40 text-center text-2xl">
            <Link href="/">
              <h1 className="text-4xl font-semibold">
                <span className="text-accent">Al</span>lan
              </h1>
            </Link>
          </div>
  
          {/* Nav links */}
          <nav className="flex flex-col justify-center items-center gap-5">
            {links[lang].map((link, index) => (
              <Link
                href={link.path}
                key={index}
                className={`${link.path === pathname && "text-accent border-b-2 border-accent"}
                  text-xl capitalize hover:text-accent transition-all`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
  
          {/* Language toggle */}
          <Button onClick={toggleLanguage} className="mt-6">
            {lang === "es" ? "English" : "Español"}
          </Button>
        </SheetContent>
      </Sheet>
    );
  };
  
  export default MobileNav;