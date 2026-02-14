import LatestNewsMarquee from "../components/LatestNewsMarquee";
import Header from "../components/shared/Header";
import Navber from "../components/shared/Navber";

export default function HomeLayout() {
  return (
    <div className="container mx-auto font-poppins px-2">
      <header>
        <Header></Header>
        <LatestNewsMarquee></LatestNewsMarquee>
      </header>
      <nav><Navber></Navber></nav>
      <main></main>
    </div>
  )
}
