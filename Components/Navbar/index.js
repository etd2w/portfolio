export default function Navbar() {
  return (
    <div className="border-4 border-indigo-700">
      <div className="grid grid-cols-2 lg:grid-cols-4">
        <div className="flex justify-center items-center col-span-2 lg:col-span-1 py-4 sm:py-6 font-bold text-4xl sm:text-6xl uppercase border-b-4 lg:border-b-0 border-indigo-700">
          Dmitry Y.
        </div>
        <div className="flex flex-col justify-center items-center lg:col-span-2 lg:border-l-4 lg:border-r-4 border-indigo-700">
          <div className="font-bold uppercase text-2xl sm:text-4xl">
            Front-end
          </div>
          <div className="font-bold uppercase text-2xl sm:text-4xl">
            developer
          </div>
        </div>
        <div className="border-l-4 lg:border-l-0 border-indigo-700">
          <div className="py-4 sm:py-6 text-center font-bold uppercase text-lg sm:text-2xl">
            <a href="#" className="underline">
              Contact me
            </a>
          </div>
          <div className="py-4 sm:py-6 text-center font-bold uppercase text-lg sm:text-2xl border-t-2 border-indigo-700">
            <a href="#" className="underline">
              My github
            </a>
          </div>
        </div>
      </div>

      <nav>
        <div className="grid grid-cols-3 border-t-4 border-indigo-700">
          <button className="py-4 sm:py-6 uppercase font-bold text-lg sm:text-2xl">
            Home
          </button>
          <button className="py-4 sm:py-6 uppercase font-bold text-lg sm:text-2xl border-l-2 border-r-2 border-indigo-700">
            About
          </button>
          <button className="py-4 sm:py-6 uppercase font-bold text-lg sm:text-2xl">
            Projects
          </button>
        </div>
      </nav>
    </div>
  );
}
