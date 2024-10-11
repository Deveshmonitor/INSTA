import React from "react";

function Home() {
  return (
    <div>
      <div className=" p-4 mt-5 flex h-11 justify-between items-center">
        <img className="h-20 w-40" src="../../log.png" alt="" />
        <p>
          {" "}
          <button className=" mt-7 bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition">
            Opne app
          </button>
        </p>
      </div>
      <div className="pt-16 flex flex-col justify-center items-center">
        <h2 className="font-bold text-center mt-4 text-lg">Soory, this page isn't available</h2>
        <p className=" text-center p-10 text-sm text font-semibold">The link you followed  may be broken, or the page may have been remove. <span className="text-xs text-sky-950">GO back to Instagram.</span></p>
      </div>
    </div>
  );
}

export default Home;
