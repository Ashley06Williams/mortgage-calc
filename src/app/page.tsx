export default function Home() {
  return (
    <main className="bg-white h-screen w-screen flex items-center justify-center">
      <div className="flex bg-blue-light h-3/4 w-3/4 shadow-2xl p-20 mx-auto ">
        <div className=" bg-white text-black w-1/2 h-full rounded-tl-3xl rounded-bl-3xl shadow-2xl"></div>
        <div className=" bg-blue-dark w-1/2 h-full rounded-br-3xl rounded-tr-3xl shadow-2xl"></div>
      </div>
    </main>
  );
}
