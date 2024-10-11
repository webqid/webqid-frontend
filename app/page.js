import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        
        <div className="text-center w-full">
          <div className="text-[92px] lg:text-[192px]"><span className="text-blue-500">web</span><span className="text-pink-600">qid</span></div>
          <div className="text-xl lg:text-2xl text-blue-500">Unlocking the Power of Web3</div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        {/* <div className="text-blue-600">&copy; {new Date().getFullYear()}</div> */}
      </footer>
    </div>
  );
}
