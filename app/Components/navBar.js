import Link from 'next/link';
import Image from 'next/image';

function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-white p-4 sticky top-0">
      <div className="flex items-center space-x-10">
        <div className="mr-40">
          <Image src="logoAhead.svg" alt="Logo" width={60} height={60} />
        </div>
        <div className="flex space-x-8">
          <Link href="/emotions">
            <span className="cursor-pointer text-gray-600 hover:text-purple-600 font-medium text-l">Emotions</span>
          </Link>
          <Link href="/manifesto">
            <span className="cursor-pointer text-gray-600 hover:text-purple-600 font-medium text-l">Manifesto</span>
          </Link>
          <Link href="/self-awareness-test">
            <span className="cursor-pointer text-gray-600 hover:text-purple-600 font-medium text-l">Self-awareness test</span>
          </Link>
          <Link href="/work-with-us">
            <span className="cursor-pointer text-gray-600 hover:text-purple-600 font-medium text-l">Work With Us</span>
          </Link>
        </div>
      </div>
      <button className="bg-black text-white px-10 py-3 rounded-full hover:bg-gray-800 ml-40">
        Download app
      </button>
    </nav>
  );
}

export default Navbar;
