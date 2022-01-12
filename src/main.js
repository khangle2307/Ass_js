import Navigo from "navigo";
import HomePage from "./pages/home";
import About from "./pages/about";
import Product from "./pages/product";

const router = new Navigo("/", { linksSelector: " a" });
const print = (content) => {
  document.querySelector("#app").innerHTML = content;
};

router.on({
  "/": () => {
    print(HomePage.render());
  },
  "/about": () => {
    print(About.render());
  },
  "/product": () => {
    print(Product.render());
  },
});

router.notFound(() => console.log("not Found"));

router.resolve();
// var menuList = ["menu 1", "menu 2", "menu 3"];

// const menuElement = document.querySelector("#menu");
// if (menuElement) {
//   for (let i = 0; i < menuList.length; i++) {
//     menuElement.innerHTML += `<li>${menuList[i]}</li>`;
//   }
// }
// template string
