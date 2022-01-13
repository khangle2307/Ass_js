import Data from "../data";

const DetailNews = {
  render(id) {
    const result = Data.find((post) => post.id == id);
    return `<h1>Hello ${result.title}</h1>`;
  },
};

export default DetailNews;
