export default function FrontEndCard() {
  return (
    <div className="font-bold text-primary">
      <div className="flex">
        <div className="py-2 px-4 border-t-5 border-r-5 border-b-2 border-l-5 border-primary bg-secondary-200">
          Front-end
        </div>
      </div>
      <div className="flex">
        <div className="py-2 px-4 border-l-3 border-t-3 border-b-3 border-primary">
          HTML
        </div>
        <div className="py-2 px-4 border-l-3 border-t-3 border-b-3 border-primary">
          CSS
        </div>
        <div className="py-2 px-4 border-l-3 border-t-3 border-b-3 border-primary">
          JS
        </div>
        <div className="py-2 px-4 border-l-3 border-t-3 border-b-3 border-r-3 border-primary">
          React
        </div>
      </div>
      <div className="flex">
        <div className="py-2 px-4 border-l-3  border-primary">
          Styled components
        </div>
        <div className="py-2 px-4 border-l-3 border-r-3  border-primary">
          Redux
        </div>
      </div>
      <div className="flex">
        <div className="py-2 px-4 border-l-3 border-t-3 border-b-3 border-primary">
          NextJS
        </div>
        <div className="py-2 px-4 border-l-3 border-t-3 border-b-3 border-primary">
          React router
        </div>
        <div className="py-2 px-4 border-l-3 border-r-3 border-b-3 border-t-3 border-primary">
          Tailwind
        </div>
      </div>
      <div className="flex">
        <div className="py-2 px-4 border-l-3 border-r-3 border-b-3  border-primary">
          SASS
        </div>
      </div>
    </div>
  );
}
