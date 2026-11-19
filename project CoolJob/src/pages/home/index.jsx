import Header from "../../components/header/index";
import Hero from "../../components/hero/index";
import BrandList from "../../components/brandList/index";
import CategoryCardList from "../../components/categoryCardList/index";
import VacancyCardList from "../../components/vacancyCardList/index";
import Footer from "../../components/footer/index";
import styles from "./style.module.css";

function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <BrandList />
      <CategoryCardList />
      <VacancyCardList />
      <Footer />
    </div>
  );
}
export default Home;
