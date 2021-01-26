export default function BackEndCard() {
  return (
    <div className="font-bold text-primary">
      <div className="flex justify-end">
        <div className="py-2 px-4 border-t-5 border-r-5 border-b-2 border-l-5 border-primary bg-secondary-200">
          Back-end
        </div>
      </div>
      <div className="flex justify-end">
        <div className="py-2 px-4 border-l-3 border-t-3 border-b-3 border-primary">
          NodeJS
        </div>
        <div className="py-2 px-4 border-l-3 border-t-3 border-b-3 border-primary">
          Express
        </div>
        <div className="py-2 px-4 border-3 border-primary">Firebase</div>
      </div>
    </div>
  );
}
