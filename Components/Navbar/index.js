import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-5 border-primary text-primary">
      <div className="grid grid-cols-2 lg:grid-cols-4">
        <div className="flex justify-center items-center col-span-2 lg:col-span-1 py-4 sm:py-6 border-b-4 lg:border-b-0 border-primary">
          <h1 className="font-bold text-2xl sm:text-4xl uppercase text-center">
            Front-end developer
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center lg:col-span-2 lg:border-l-5 lg:border-r-5 border-primary">
          <span className="font-bold text-3xl sm:text-6xl uppercase">
            Dmitry Y.
          </span>
        </div>
        <div className="border-l-4 lg:border-l-0 border-primary bg-secondary-200">
          <div className="py-4 sm:py-6 text-center font-bold uppercase text-lg sm:text-2xl">
            <a href="#" className="underline hover:text-ternary">
              Contact me
            </a>
          </div>
          <div className="py-4 sm:py-6 text-center font-bold uppercase text-lg sm:text-2xl border-t-3 border-primary">
            <a href="#" className="underline hover:text-ternary">
              My github
            </a>
          </div>
        </div>
      </div>

      <nav>
        <div className="grid grid-cols-3 border-t-5 border-primary">
          <Link href="/">
            <button className="py-4 sm:py-6 uppercase font-bold text-lg sm:text-2xl bg-secondary-100 hover:text-ternary">
              Home
            </button>
          </Link>
          <Link href="/about">
            <button className="py-4 sm:py-6 uppercase font-bold text-lg sm:text-2xl bg-secondary-100 hover:text-ternary border-l-3 border-r-3 border-primary">
              About
            </button>
          </Link>
          <Link href="/projects">
            <button className="py-4 sm:py-6 uppercase font-bold text-lg sm:text-2xl bg-secondary-100 hover:text-ternary">
              Projects
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
}
