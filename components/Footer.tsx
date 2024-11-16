
export default function Footer() {
  return (
    <footer className="flex flex-col w-full text-white">
        <div className="bg-red-600 px-[10%] py-28">
            <div className="text-white font-bold text-5xl mb-10">Develop with love by Adrian</div>
            <input type="text" placeholder="Your Email Addres" className="bg-red-500 p-4 placeholder:text-white rounded-md w-[25rem]" />
            <button className="bg-black uppercase py-4 px-8 ml-3 rounded-lg">get started</button>
        </div>
        <div className="bg-black flex p-20">
            <div className="flex-grow pl-[6%]">
                <div className="mb-10">
                    <h4 className="text-red-700 font-bold text-5xl mb-1">NEXTFLIX</h4>
                    <p className="text-gray-500">NEXTFlix Peru</p>
                </div>
                <select className="text-white bg-gray-800 py-3 px-6" name="" id="">
                    <option value="">English</option>
                </select>
            </div>
            <div className="flex gap-10 justify-around flex-grow-[2] px-10">
                <div>
                    <h4 className="text-gray-500 mb-4">Explore</h4>
                    <ul className="flex flex-col gap-2">
                        <li><a href="#">Help Center</a></li>
                        <li><a href="#">Account</a></li>
                        <li><a href="#">Ways to watch</a></li>
                        <li><a href="#">Only on NEXTFlix</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-gray-500 mb-4">Legal</h4>
                    <ul className="flex flex-col gap-2">
                        <li><a href="#">Cookies Preferences</a></li>
                        <li><a href="#">Privacy Police</a></li>
                        <li><a href="#">Terms of use</a></li>
                        <li><a href="">Gift Card Terms</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-gray-500 mb-4">Support</h4>
                    <ul className="flex flex-col gap-2">
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Speed Test</a></li>
                        <li><a href="#">Contact us</a></li>
                        <li><a href="#">Jobs</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}
