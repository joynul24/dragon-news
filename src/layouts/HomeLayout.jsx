import LatestNewsMarquee from "../components/LatestNewsMarquee";
import Header from "../components/shared/Header";

export default function HomeLayout() {
  return (
    <div className="container mx-auto font-poppins px-2">
      <header>
        <Header></Header>
        <LatestNewsMarquee></LatestNewsMarquee>
      </header>
      <nav></nav>
      <main></main>
    </div>
  )
}
