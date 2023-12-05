import { projects } from "@dr/schemas/contents";

export default function Project() {
  return (
    <div>
      <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
        Projects
      </h2>
      <div className="flex flex-col gap-8">
        {projects.map((project) => (
          <div key={project.name}>
            <p className="mt-4 text-lg font-medium bg-gradient-to-r from-indigo-600 dark:from-indigo-400 from-10% via-sky-600 dark:via-sky-400 via-30% to-emerald-600 dark:to-emerald-400 to-90% bg-clip-text text-transparent">
              {project.name}
              <span className="text-neutral-600 dark:text-neutral-400"> - {project.occupation}</span><span className="block text-xs text-neutral-600 dark:text-neutral-400">{project.period}</span>
            </p>
            <p className="mt-4 text-md text-neutral-600 dark:text-neutral-400">
              {project.description}
            </p>
          </div>    
        ))}
      </div>
    </div>
  )
}