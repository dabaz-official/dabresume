import { links } from "@dr/schemas/links";

export default function Header() {
  return (
    <section>
      <div className="max-w-5xl px-8 py-24 pb-12 mx-auto 2xl:max-w-7xl md:px-lg:px-24 lg:pt-32">
        <div className="flex items-center">
          <div>
            <img className="inline-block object-cover w-24 h-48 rounded-full lg:w-64 lg:h-96" src="/dabaz.jpg" alt="DabAZ" />
          </div>
          <div className="ml-4 md:ml-8">
            <p className="text-4xl font-semibold tracking-tighter text-neutral-900 dark:text-neutral-100 md:text-6xl lg:text-7xl">
              DabAZ
              <span className="block text-neutral-600 dark:text-neutral-400">Cyber Security Engineer</span>
            </p>
            <div className="flex mt-12 space-x-6 text-md text-neutral-600 dark:text-neutral-400">
              {links.header.map((link) => (
                <div key={link.name}>
                  <a href={link.href} className="duration-200 hover:text-neutral-900 dark:hover:text-neutral-100">
                    {link.name}
                  </a>
                </div>     
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}