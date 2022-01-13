import Banner from "../components/banner";
import Footer from "../components/footer";
import Header from "../components/header";
import News from "../components/news";

const HomePage = {
  render() {
    return /* html */ `
      <div class="w-1140">
        <div class="w-980 mx-auto">
          ${Header.render()}
          ${Banner.render()}
          ${News.render()}
          ${Footer.render()}
        </div>
      </div>
      
    
   
    
    `;
  },
};

export default HomePage;
