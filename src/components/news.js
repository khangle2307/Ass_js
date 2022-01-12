import data from "../data";

const News = {
  render() {
    return /* html */ `
      <h2 class="text-xl py-4 text-blue font-semibold uppercase">Tin tức học tập</h2>
        <div  class="flex justify-between gap-2">
        ${data.map(function (post) {
          return `<div class="w-305 h-360 border-2 border-gray px-10 py-8">
                        <div>
                          <a>
                            <img src="${post.image}" class="w-255 h-175">
                          </a>
                        </div>
                        <h3 class="text-sm text-yellow font-semibold py-2"><a>${post.title}</a></h3>
                        <p class="text-xs">${post.desc}</p>
                      </div>`;
        })}
        </div>
      <h2 class="text-xl py-4 text-blue font-semibold uppercase">Hoạt động sinh viên</h2>
      <div  class="flex justify-between gap-2">
      ${data.map(function (post) {
        return `<div class="w-305 h-360 border-2 border-gray  px-10 py-8">
                      <div>
                        <a>
                          <img src="${post.image}" class="w-255 h-175">
                        </a>
                      </div>
                      <h3 class="text-sm text-yellow font-semibold py-2"><a>${post.title}</a></h3>
                      <p class="text-xs">${post.desc}</p>
                    </div>`;
      })}
      </div>
      `;
  },
};

export default News;
