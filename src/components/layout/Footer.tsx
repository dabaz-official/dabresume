const today: Date = new Date();
const currentYear: number = today.getFullYear();

export default function Footer() {
  return (
    <footer>
      <div className="max-w-5xl px-8 py-12 mx-auto 2xl:max-w-7xl md:px-lg:px-24 lg:pt-48">
        <p className="max-w-2xl text-sm text-left text-neutral-600 dark:text-neutral-400">
          © {currentYear}
          <a href="https://dabaz.me" target="_blank"> DabAZ</a>.
        </p>
      </div>
    </footer>
  )
}