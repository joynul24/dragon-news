import { Outlet } from "react-router-dom";
import AuthAside from "../components/AuthAside";
import CategoryBtns from "../components/CategoryBtns";
import LatestNewsMarquee from "../components/LatestNewsMarquee";
import Header from "../components/shared/Header";
import Navber from "../components/shared/Navber";
import LatestNews from "../components/LatestNews";

export default function HomeLayout() {
  return (
    <div className="container mx-auto font-poppins px-2 md:px-4">
      <header>
        <Header></Header>
        <LatestNewsMarquee></LatestNewsMarquee>
      </header>
      <nav><Navber></Navber></nav>
      <main className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-5 md:mt-10">
        {/* News Category */}
        <aside className="md:col-span-3">
          <CategoryBtns></CategoryBtns>
          <LatestNews></LatestNews>
        </aside>
        {/* All News */}
        <section className="md:col-span-6">
          <Outlet></Outlet>
        </section>
        {/* Authentication */}
        <aside className="md:col-span-3">
          <AuthAside></AuthAside>
        </aside>
      </main>
    </div>
  )
}
