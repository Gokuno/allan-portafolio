"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

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
  
  const Nav = ({ lang }) => {
    const pathname = usePathname();
    const navLinks = links[lang];
  
    return (
      <nav className="flex gap-8">
        {navLinks.map((link, index) => (
          <Link
            href={link.path}
            key={index}
            className={`${link.path === pathname && "text-accent border-b-2 border-accent"}
              capitalize font-medium hover:text-accent transition-all`}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    );
  };
  
  export default Nav;