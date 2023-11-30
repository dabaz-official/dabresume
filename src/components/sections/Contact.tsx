import { links } from "@dr/schemas/links";

export default function Contact() {
  return (
    <div>
      <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
        Contact
      </h2>
      <dl className="mt-4 space-y-4 text-md text-neutral-600 dark:text-neutral-400">
        {links.contact.map((link) => (
          <div key={link.name} className="flex items-center text-md text-neutral-600 dark:text-neutral-400 gap-x-4">
            <dt className="flex-none">
              <span className="sr-only">Website</span>
              <link.icon aria-hidden="true" />
            </dt>
            <dd>
              <a className="duration-200 hover:text-neutral-900 dark:hover:text-neutral-100" href={link.href} target="_blank">{link.content}</a>
            </dd>
          </div>     
        ))}
      </dl>
    </div>
  )
}