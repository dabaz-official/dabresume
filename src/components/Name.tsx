export default function Name() {
  return (
    <section>
      <div className="max-w-5xl px-8 py-24 pb-12 mx-auto 2xl:max-w-7xl md:px-lg:px-24 lg:pt-32">
        <div className="flex items-center">
          <div>
            <img className="inline-block object-cover w-24 h-48 rounded-full lg:w-64 lg:h-96" src="/dabaz.jpg" alt="" />
          </div>
          <div className="ml-4 md:ml-8">
            <p className="text-4xl font-semibold tracking-tighter text-gray-900 md:text-6xl lg:text-7xl">
              Michael Andreuzza
              <span className="block text-gray-500">Web developer</span>
            </p>
            <div className="flex mt-12 space-x-6 text-xs text-gray-500 uppercase">
              <a href="#_" className="duration-200 hover:text-gray-400"> Twitter</a><a href="#_" className="duration-200 hover:text-gray-400"> Linkedin</a><a href="#_" className="duration-200 hover:text-gray-400"> GitHub</a><a href="#_" className="duration-200 hover:text-gray-400"> PostsCV</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}