import Data from "../data";

const EditNews = {
  render(id) {
    const result = Data.find((post) => post.id == id);
    return /* html */ `
      <h1>${result.id}</h1>
      <input value="${result.title}"/>
    `;
  },
};

export default EditNews;
