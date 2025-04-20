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

  const [isOpen, setIsOpen] = useState(false);

  const handleHamburger = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'My Work', path: '/work' },
    { name: 'Blog', path: '/blog' },
    { name: 'About', path: '/about' },
  ];

  return (
    <>
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
                  }  absolute w-screen h-screen z-50 top-0 left-0 transition duration-500 bg-loading-screen`}
                ></div>
              )}
            </div>
          );
        })}
      </nav>
      <nav className="w-full flex py-10 pr-5 justify-end md:hidden">
        <button
          onClick={handleHamburger}
          className="flex flex-col justify-center items-center z-30"
        >
          <span
            className={`bg-text-base block transition-all duration-300 ease-out h-1 w-8 rounded-sm
              ${isOpen ? 'rotate-45 translate-y-2.5' : '-translate-y-0.5'}`}
          ></span>
          <span
            className={`bg-text-base block transition-all duration-300 ease-out h-1 w-8 rounded-sm my-1.5
              ${isOpen ? 'opacity-0' : 'opacity-100'}`}
          ></span>
          <span
            className={`bg-text-base block transition-all duration-300 ease-out h-1 w-8 rounded-sm
              ${isOpen ? '-rotate-45 -translate-y-2.5' : 'translate-y-0.5'}`}
          ></span>
        </button>
      </nav>
      <div
        className={`w-full h-full bg-loading-screen fixed top-0 left-0 transition-transform duration-500 z-20 pt-20 flex flex-col items-center
          ${isOpen ? 'translate-y-0' : '-translate-y-full'}
        `}
      >
        {navItems.map((item) => {
          return (
            <div
              key={item.name}
              className="bg-text-base text-primary text-2xl mt-4 p-2 rounded-sm w-5/6"
            >
              <Link
                key={item.name}
                href={item.path}
                onMouseEnter={() => setHovered(item.name)}
                onMouseLeave={() => setHovered('')}
                className="block w-full"
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
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
