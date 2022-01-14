import Banner from "../../components/view/banner";
import Footer from "../../components/view/footer";
import Header from "../../components/view/header";
import ListNews from "../../components/view/listNews";

const HomePage = {
  render() {
    return /* html */ `
      <div class="w-1140">
        <div class="w-980 mx-auto">
          ${Header.render()}
          ${Banner.render()}
          ${ListNews.render()}
          ${Footer.render()}
        </div>
      </div>
    `;
  },
};

export default HomePage;
