const Button = {
  render() {
    return /* html */ `
            <div class="mt-2 flex lg:mt-0 lg:ml-4">
            <span class="hidden sm:block">
               <button
               type="button"
               class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
               >
               <!-- Heroicon name: solid/pencil -->
               <svg
                  class="-ml-1 mr-2 h-5 w-5 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
               >
                  <path
                     d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
                  />
               </svg>
               Edit
               </button>
            </span>

            <span class="hidden sm:block ml-3">
               <button
               type="button"
               class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
               >
               <!-- Heroicon name: solid/link -->
               <svg
                  class="-ml-1 mr-2 h-5 w-5 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
               >
                  <path
                     fill-rule="evenodd"
                     d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                     clip-rule="evenodd"
                  />
               </svg>
               View
               </button>
            </span>

            <span class="sm:ml-3">
               <button
               type="button"
               class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
               >
               <!-- Heroicon name: solid/check -->
               <svg
                  class="-ml-1 mr-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
               >
                  <path
                     fill-rule="evenodd"
                     d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                     clip-rule="evenodd"
                  />
               </svg>
               Publish
               </button>
            </span>

            <!-- Dropdown -->
            <span class="ml-3 relative sm:hidden">
               <button
               type="button"
               class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
               id="mobile-menu-button"
               aria-expanded="false"
               aria-haspopup="true"
               >
               More
               <!-- Heroicon name: solid/chevron-down -->
               <svg
                  class="-mr-1 ml-2 h-5 w-5 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
               >
                  <path
                     fill-rule="evenodd"
                     d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                     clip-rule="evenodd"
                  />
               </svg>
               </button>

               <!--
            Dropdown menu, show/hide based on menu state.

            Entering: "transition ease-out duration-200"
               From: "transform opacity-0 scale-95"
               To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
               From: "transform opacity-100 scale-100"
               To: "transform opacity-0 scale-95"
         -->
               <div
               class="origin-top-right absolute right-0 mt-2 -mr-1 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
               role="menu"
               aria-orientation="vertical"
               aria-labelledby="mobile-menu-button"
               tabindex="-1"
               >
               <!-- Active: "bg-gray-100", Not Active: "" -->
               <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabindex="-1"
                  id="mobile-menu-item-0"
                  >Edit</a
               >
               <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabindex="-1"
                  id="mobile-menu-item-1"
                  >View</a
               >
               </div>
            </span>
         </div>
      `;
  },
};

export default Button;
