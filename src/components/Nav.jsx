import React from "react";

function Nav({handleMoon, handleSun}) {
  return (
    <div>
      <div className="nav flex justify-between p-5 shadow-lg">
        <div className="font-bold text-xl">Where in the World?</div>
        <div className="flex">
            <svg
              id="moon"
              onClick={handleMoon}
              xmlns="http://www.w3.org/2000/svg"
              className="ionicon w-5"
              viewBox="0 0 512 512"
            >
              <path d="M152.62 126.77c0-33 4.85-66.35 17.23-94.77C87.54 67.83 32 151.89 32 247.38 32 375.85 136.15 480 264.62 480c95.49 0 179.55-55.54 215.38-137.85-28.42 12.38-61.8 17.23-94.77 17.23-128.47 0-232.61-104.14-232.61-232.61z" />
            </svg>
            <svg onClick={handleSun} id="sun" xmlns="http://www.w3.org/2000/svg" className="ionicon w-5" viewBox="0 0 512 512"><path d="M90.61 306.85A16.07 16.07 0 00104 293.6C116.09 220.17 169.63 176 232 176c57.93 0 96.62 37.75 112.2 77.74a15.84 15.84 0 0012.2 9.87c50 8.15 91.6 41.54 91.6 99.59 0 59.4-48.6 100.8-108 100.8H106c-49.5 0-90-24.7-90-79.2 0-48.47 38.67-72.22 74.61-77.95z" fill="none" stroke="#ffff" strokeLinejoin="round" strokeWidth="32"/><path d="M384.8 271.4a80 80 0 10-123.55-92M464 208h32M336 48v32M222.86 94.86l22.63 22.63M449.14 94.86l-22.63 22.63" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/></svg>
          <div className="font-bold mx-3" id="mode">Light Mode</div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
