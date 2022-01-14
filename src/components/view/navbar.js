const Navbar = {
  render() {
    return /* html */ `
    <ul class="flex justify-between">
      <li>
        <a href="/"  class="text-base text-white px-2 hover:underline">Trang trủ</a>
      </li>
      <li>
        <a href="/product" class="text-base text-white px-2 hover:underline">Tuyển sinh</a>
      </li>
      <li>
        <a href="/about" class="text-base text-white px-2 hover:underline">Chương trình đào tạo</a>
      </li>
      <li>
       <a href="/" class="text-base text-white px-2 hover:underline">Góc sinh viên</a>
      </li>
      <li>
       <a href="/" class="text-base text-white px-2 hover:underline">Tuyển dụng</a>
      </li>
    </ul> 
    `;
  },
};

export default Navbar;
