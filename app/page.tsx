import Image from "next/image";

export default function Home() {
  return (
    <>
    <main className=" text-white bg-slate-900 overflow-hidden overflow-x-hidden">
    <header  className="  relative z-0">
    <img src="4160871_m.jpg" className="  z-0"/ >
      <div className="flex  absolute top-5  self-stretch w-full">
      <h1 className=" flex ml-20  italic text-black text-2xl font-serif font-medium">とある床屋</h1>
      <ul className=" text-black flex ml-auto">
        <li  className="flex ml-6">About</li>
        <li className="flex ml-6">News</li>
        <li className="flex ml-6 mr-20">map</li>
      </ul>
      </div>
    </header>
    <div className="  absolute top-1/3 mt-20 left-20 font self-stretch ">
    <h2 className="text-5xl  text-black    ">男らしく<br/>生きるために</h2>
    </div>
    <div className=" justify-center mt-32 flex ">
      <img src="1982551_s.jpg  " className=" relative"></img>
       
    </div>
     <div className=" mt-30  ">
      <h3 className=" pt-20  flex justify-center items-center">
        news
      </h3>
      <div className="flex justify-center items-center  ">
      <div className="mx-auto w-1/3 rounded shadow-lg border overflow-hidden mt-5 bg-white">
    <div className="relative pb-[60%]">
      <img src="https://picsum.photos/300/200" className="absolute object-cover h-full w-full" />
    </div>
    <div className="p-4 text-sm font-medium text-gray-700">あけましておめでとうございます。<br /> 本年度は1月3日より、再開いたします。</div>
</div>
<div className="mx-auto w-1/3 rounded shadow-lg border overflow-hidden mt-5 bg-white">
    <div className="relative pb-[60%]">
      <img src="https://picsum.photos/300/200" className="absolute object-cover h-full w-full" />
    </div>
    <div className="p-4 text-sm font-medium text-gray-700">夏本番ですね。<br /> 熱中症対策をしっかりしていきましょう。</div>
</div>
 
        
      </div>
     </div>
    <footer>
    <h2 className="flex justify-center items-center mt-30 pt-20 pb-20 font-30">map</h2>
    <div className="flex w-3/4 m-auto">
 
  <div className="flex-shrink-0 hidden md:block">
      <img className="rounded-lg   " src="https://picsum.photos/300/200"/>
  </div>
 
  <div className="ml-6">
   
      <div>
         <h3 className="text-2xl  font-semibold">とある床屋</h3>
      </div>

      <div className=" my-2">
       北九州市八幡西区茶売町18‐14　403号

      </div>
  </div>
</div>
<div>

</div>
    </footer>
    </main>
    </>
  );
}
