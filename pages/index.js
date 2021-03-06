import Crafts from "./components/crafts";
import Footer from "./components/footer";
import Impact from "./components/impact";
import IntroCarousel from "./components/introCarousel";
import Nav from "./components/nav";
import ProductCarousel from "./components/productCarousel";
import Subscription from "./components/subscription";
export default function Home() {
  return (
    <>
      <Nav />
      <div className=" sm:mt-12 sm:pt-2 md:mt-16 md:pt-2 lg:mt-12 mb-10">
        <IntroCarousel />
        <ProductCarousel title="female" />
        <ProductCarousel title="male" />
        <Impact />
        <Crafts />
        <Subscription />
      </div>
      <Footer />
    </>
  );
}
