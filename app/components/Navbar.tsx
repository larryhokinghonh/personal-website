'use client'

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import styles from './navbar.module.css';
import Link from 'next/link';
import Image from 'next/image';

const hoverStyle = {
    textDecoration: "underline",
    textUnderlineOffset: "0.4em",
    textDecorationThickness: 1.5,
    textDecorationColor: "#2563eb"
}

export default function Navbar() {
    const pathname = usePathname();
    console.log(pathname);

    const [hovered, setHovered] = useState<string>();

    return (
        <>
        <div className="flex flex-row min-w-fit p-8">
            <div className="flex w-1/4">
                <p className="text-3xl">larry<span className={styles.blinking}>_</span></p>
            </div>
            <div className="flex ml-auto mr-0 w-3/4 justify-end">
                <ul onMouseLeave={() => setHovered(undefined)}>
                    <li className={`text-right ${pathname === '/' ? 'text-blue-600' : 'text-black'} mb-1`}
                        onMouseEnter={() => setHovered("experience")}
                        style={hovered === "experience" ? hoverStyle : undefined}
                    >
                        <Link href="/"><p>experience</p></Link>
                    </li>

                    <li className={`text-right ${pathname === '/about' ? 'text-blue-600' : 'text-black'} mb-1`}
                        onMouseEnter={() => setHovered("about")}
                        style={hovered === "about" ? hoverStyle : undefined}
                    >
                        <Link href="/about"><p>about</p></Link>
                    </li>
                    <li className="text-right mb-1"
                        onMouseEnter={() => setHovered("contact")}
                        style={hovered === "contact" ? hoverStyle : undefined}
                        >
                        <a href="mailto:2301174@sit.singaporetech.edu.sg"><p className="">contact</p></a>
                    </li>
                    <li onMouseEnter={() => setHovered("resume")}
                        style={hovered === "resume" ? hoverStyle : undefined}
                        >
                        <a className="flex items-center justify-end mb-1" href="/resume.pdf" target="_blank" >
                        <p className=" pr-2">resume</p>
                        <Image src="/resume.svg" alt="" width={24} height={24}/></a>
                    </li>
                </ul>
            </div>
        </div>
        </>
    )
}