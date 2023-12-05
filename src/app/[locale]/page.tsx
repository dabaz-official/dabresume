import Header from "@dr/components/sections/Header";
import Footer from "@dr/components/layout/Footer";
import Content from "@dr/components/sections/Content";

export default function Home() {
  return (
    <main className="bg-white dark:bg-black">
      <Header />
      <Content />
      <Footer />
    </main>
  )
}