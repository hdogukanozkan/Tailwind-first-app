function App() {
  return (
    <div className="bg-[rgb(15,23,42)] text-white h-screen ">
      <div className="border-b-[1px] border-gray-500 shadow-lg border-opacity-30 mb-5">
        <div className="max-w-screen-2xl mx-auto px-4 py-8 flex flex-row justify-between items-center max-md:flex-col max-md:gap-5 max-md:text-center max-md:py-4 max-md:px-5">
          <h1 className=" text-5xl animate-slidedown font-semibold text-cyan-400 select-none max-md:text-4xl">
            Hanifi Doğukan Özkan
          </h1>
          <div>
            <ul className="flex gap-4 text-2xl animate-slidedown max-md:animate-slideup">
              <li className="cursor-pointer hover:text-cyan-200 duration-200">
                Anasayfa
              </li>
              <li className="cursor-pointer hover:text-cyan-200 duration-200">
                Blog
              </li>
              <li className="cursor-pointer hover:text-cyan-200 duration-200">
                Contact
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-screen-2xl mx-auto">
        <h1>TEXT</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique,
          tempore! Ad quo praesentium inventore, odit saepe doloremque illo
          corporis eligendi aut autem ducimus vero vel maxime similique omnis
          totam quam.
        </p>
      </div>
    </div>
  );
}

export default App;
