import Banner from "../components/banner";
import Footer from "../components/footer";
import Header from "../components/header";

const HomePage = {
  render() {
    return /* html */ `
    <div class="w-1200">
      <div class="w-980 mx-auto">
      ${Header.render()}
      ${Banner.render()}
      ${Footer.render()}
      </div>
    </div>
   
    
    `;
  },
};

export default HomePage;
