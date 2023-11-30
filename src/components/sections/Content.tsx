import Contact from "@dr/components/sections/Contact";
import Education from "@dr/components/sections/Education";

export default function Content() {
  return (
    <section>
      <div className="max-w-5xl px-8 py-12 mx-auto 2xl:max-w-7xl md:px-lg:px-24">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          <div className="flex flex-col gap-12">
            <Contact />
            <Education />
          </div>
        </div>
      </div>
    </section>
  )
}