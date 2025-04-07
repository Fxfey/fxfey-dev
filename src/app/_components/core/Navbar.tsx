import { useState } from 'react';
import Link from 'next/link';

interface NavbarProps {
  activePage: string;
}

export default function Navbar({ activePage }: NavbarProps) {
  const [hovered, setHovered] = useState('');
  const [showDiv, setShowDiv] = useState(false);
  const [transition, setTransition] = useState(false);

  const handleClick = () => {
    setShowDiv(true);
    setTimeout(() => {
      setTransition(true);
    }, 5);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'My Work', path: '/work' },
    { name: 'Blog', path: '/blog' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav className="hidden pt-14 md:flex md:text-2xl md:gap-12 lg:text-3xl font-bold mb-12">
      {navItems.map((item) => {
        const isHovered = hovered === item.name;

        return (
          <div key={item.name}>
            <Link
              key={item.name}
              href={item.path}
              onMouseEnter={() => setHovered(item.name)}
              onMouseLeave={() => setHovered('')}
              className="transition-all duration-300"
              onClick={(e) => {
                // Optionally prevent navigation
                e.preventDefault();
                handleClick();
                setTimeout(() => {
                  window.location.pathname = '/' + item.path;
                }, 500);
              }}
            >
              {item.name}
              <span
                className={`${
                  isHovered ? 'scale-x-100' : 'scale-x-0'
                } block w-full h-1 bg-secondary rounded-sm transition-all`}
              ></span>
            </Link>

            {/* Transition element */}
            {showDiv && (
              <div
                className={`${
                  transition ? 'translate-y-0' : 'translate-y-full'
                }  absolute w-screen h-screen z-10 top-0 left-0 transition duration-500 bg-loading-screen`}
              ></div>
            )}
          </div>
        );
      })}
    </nav>
  );
}
