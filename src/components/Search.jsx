import React from "react";

function Search({handleSearch}) {
  // const btnMenu = document.getElementById("btnMenu")
  // const menu = document.getElementById("menu")

  // btnMenu.addEventListener('click', () =>{
  //     if (menu.classList.contains="hidden"){
  //         menu.classList.remove="hidden";
  //     } else {
  //         menu.classList.add="hidden"
  //     }
  // })
  
  return (
    <div className="flex justify-between my-5 p-4">
      <div className="relative md:w-80">
        <label htmlFor="Search" className="sr-only">
          {" "}
          Search{" "}
        </label>

        <input
          type="text"
          id="Search"
          placeholder="Search for..."
          className="w-full rounded-md p-2 py-2.5 pe-10 outline-slate-200 shadow-md sm:text-sm"
          onChange={handleSearch}
        />

        <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
          <button type="button" className="text-gray-600 hover:text-gray-700">
            <span className="sr-only">Search</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </span>
      </div>
      <div className="relative">
        <div className="inline-flex items-center overflow-hidden rounded-md border bg-white">
          <a
            href="#"
            className="border-e px-4 py-2 text-sm/none text-gray-600 hover:bg-gray-50 hover:text-gray-700"
          >
            Filter by Reqion
          </a>

          <button
            className="h-full p-2 text-gray-600 hover:bg-gray-50 hover:text-gray-700"
            id="btnMenu"
          >
            <span className="sr-only">Menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        <div
          className="absolute end-0 z-10 mt-2 w-40~ text-left rounded-md border border-gray-100 bg-white shadow-lg"
          role="menu"
          id="menu"
        >
          <div className="p-2" id="Search">
            <a
              href="#"
              className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
              role="menuitem"
            >
              Africa
            </a>

            <a
              href="#"
              className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
              role="menuitem"
            >
              America
            </a>

            <a
              href="#"
              className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
              role="menuitem"
            >
              Asia
            </a>

            <a
              href="#"
              className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
              role="menuitem"
            >
              Europe
            </a>

            <a
              href="#"
              className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
              role="menuitem"
            >
              Ocenia
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
