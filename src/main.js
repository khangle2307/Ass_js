import Navigo from "navigo";
import HomePage from "./pages/home";
import About from "./pages/about";
import Product from "./pages/product";
import Signup from "./pages/signup";
import Signin from "./pages/signin";
import Admin from "./pages/admin";
import Dashboard from "./pages/dashboard";
import News from "./pages/news";
import AddNews from "./pages/addNews";
import EditNews from "./pages/editNews";
import DetailNews from "./pages/detailNews";

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
  "/signup": () => {
    print(Signup.render());
  },
  "/signin": () => {
    print(Signin.render());
  },
  "/admin": () => {
    print(Admin.render());
  },
  "/admin/dashboard": () => {
    print(Dashboard.render());
  },
  "/admin/news": () => {
    print(News.render());
  },
  "/news/:id": ({ data }) => {
    const { id } = data;
    print(DetailNews.render(id));
  },
  "/admin/news/add": () => {
    print(AddNews.render());
  },
  "/admin/news/:id/edit": ({ data }) => {
    const { id } = data;
    print(EditNews.render(id));
  },
});

router.notFound(() => console.log("not Found"));

router.resolve();
