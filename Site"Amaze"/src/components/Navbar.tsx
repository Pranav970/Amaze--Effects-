import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md">
      <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <Image src="/images/apple-logo-white.svg" alt="Apple Logo" width={16} height={20} />
            </Link>
            <div className="hidden md:block ml-6">
              <span className="text-white font-semibold text-sm">iPhone 16 Pro</span>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <Link href="#overview" className="nav-link">Overview</Link>
            <Link href="#android-to-iphone" className="nav-link">Switch from Android to iPhone</Link>
            <Link href="#tech-specs" className="nav-link">Tech Specs</Link>
            <button className="apple-button text-xs px-3 py-1">Buy</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
