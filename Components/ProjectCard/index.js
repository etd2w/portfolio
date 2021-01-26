export default function ProjectCard({ name, desc, links, tools }) {
  return (
    <div className="space-y-4 text-primary">
      <div className="flex justify-between items-end">
        <div>
          <h3 className="font-bold text-2xl text-ternary">{name}</h3>
          <p>{desc}</p>
        </div>

        <div>
          <div className="flex font-bold border-3 border-primary">
            <div className="px-4 py-1 bg-secondary-200">
              <a href={links.live} className="underline">
                Live
              </a>
            </div>
            <div className="px-4 py-1 bg-secondary-200 border-l-3 border-primary">
              <a href={links.source} className="underline">
                Source
              </a>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="h-64 bg-gray-500"></div>
      </div>

      <div className="flex">
        <div className="flex border-t-3 border-b-3 border-r-3 border-primary">
          {tools.map(tool => (
            <div
              key={tool.id}
              className="px-4 py-1 text-xs uppercase font-bold border-l-3 border-primary"
            >
              {tool.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
