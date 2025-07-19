'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/benefits', label: 'Benefits' },
    { href: '/contact', label: 'Contact' }
  ];

  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link href="/" className="nav-logo">
          <Image src="/logo.svg" alt="IFFCO Logo" width={150} height={60} />
        </Link>

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`nav-link ${pathname === href ? 'active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link href="/#apply" className="nav-apply" onClick={() => setMenuOpen(false)}>
            <button className="apply-now">Apply Now</button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
