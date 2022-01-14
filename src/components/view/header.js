import Topheader from "./topheader";
import Navbar from "./navbar";
import Searchbar from "./searchbar";

const Header = {
  render() {
    return /* html */ `
    ${Topheader.render()}
    <Header class="bg-yellow h-9 flex justify-around items-center">
    ${Navbar.render()}
    ${Searchbar.render()}
    </Header>
    `;
  },
};

export default Header;
