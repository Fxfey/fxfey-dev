import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';

interface NavbarProps {
  activePage: string;
}

export default function Navbar({ activePage }: NavbarProps) {
  const [hovered, setHovered] = useState('');

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="hidden pt-14 md:flex md:text-2xl md:gap-12 lg:text-3xl font-bold">
      {navItems.map((item) => {
        const isHovered = hovered === item.name;

        return (
          <Link
            key={item.name}
            href={item.path}
            onMouseEnter={() => setHovered(item.name)}
            onMouseLeave={() => setHovered('')}
            className={`${isHovered ? 'text-red-300' : 'text-text-base'}`}
          >
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
}
