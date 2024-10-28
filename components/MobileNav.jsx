"use client"

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const links = [
    {
        name: "servicios",
        path: "/services",
    },
    {
        name: "experiencia",
        path: "/resume",
    },
    {
        name: "proyectos",
        path: "/work",
    },
    {
        name: "contacto",
        path: "/contact",
    },
]

const MobileNav = () => {

    const pathname = usePathname();
    return <Sheet>
        <SheetTrigger className="flex justify-center items-center">
            <CiMenuFries className="text-[32px] text-accent" />
        </SheetTrigger>
        <SheetContent className="flex flex-col">
            {/*logo*/}
            <div className='mt-32 mb-40 text-center text-2xl'>
                <Link href="/">
                    <h1 className='text-4xl fonts-semibold'>
                        <span className='text-accent'>Al</span>lan
                    </h1>
                </Link>
            </div>
            {/*nav*/}
            <nav className='flex flex-col justify-center items-center gap-5'>
                {links.map((link, index) => {
                    return (
                        <Link
                            href={link.path}
                            key={index}
                            className={`${link.path === pathname && "text-accent border-b-2 border-accent"
                                } text-xl capitalize hover:text-accent transition-all`}
                        >
                            {link.name}
                        </Link>
                    );
                })}
            </nav>
        </SheetContent>
    </Sheet>

}

export default MobileNav