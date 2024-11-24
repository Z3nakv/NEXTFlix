import Image from "next/image";

export default function Footer() {
    return (
        <footer className="flex flex-col justify-self-end w-full text-white" aria-labelledby="footer-heading">
            <div id="footer-heading" className="px-[10%] py-28 relative">
                <Image
                src="/netflix-bg.jpg"
                alt="netflix bg"
                sizes="80vw"
                fill
                className="object-cover z-[-1] "
                />
            <div className="absolute inset-0 bg-[#E50914] opacity-60 z-[-1]"></div>
                <h2 className="font-bold text-5xl mb-10">Develop with love by Adrian</h2>
                <form className="flex items-center">
                    <label htmlFor="email" className="sr-only">Your Email Address</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Your Email Address"
                        className="bg-[#fff] p-4 placeholder:text-gray-400 placeholder:font-bold rounded-md h-[4rem] w-[25rem] py-3.5 placeholder:px-3 focus:outline-none focus:ring-2 focus:ring-white"
                    />
                    <button
                        type="submit"
                        aria-label="Start your journey with NEXTFlix"
                        className="bg-[#000000] text-sm font-bold h-[4rem] max-w-[25rem] text-white uppercase py-3.5 px-8 ml-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 hover:bg-gray-800"
                    >
                        Get Started
                    </button>
                </form>
            </div>
            <div className="bg-[#000000] flex flex-col-reverse items-center gap-10 py-10 px-5">
                <div className="flex flex-col justify-center items-center flex-grow md:pl-[6%]">
                    <div className="mb-10 text-center">
                        <h3 className="text-[#E50914] font-bold text-5xl mb-1">NEXTFLIX</h3>
                        <p className="text-gray-400">NEXTFlix Peru</p>
                    </div>
                    <label htmlFor="language-select" className="sr-only">Select Language</label>
                    <select
                        id="language-select"
                        aria-label="Select your preferred language"
                        className="border text-sm rounded-lg block px-6 py-3 bg-[#141414] text-white border-gray-600 focus:border-[#E50914] focus:ring-2 focus:ring-[#E50914]"
                    >
                        <option value="en">English</option>
                    </select>
                </div>
                <nav aria-labelledby="footer-links" className="flex gap-10 justify-between flex-grow-[2] px-5">
                    {/* <h4 id="footer-links" className="sr-only">Footer Navigation Links</h4> */}
                    <div>
                        <h4 className="text-gray-400 mb-4">Explore</h4>
                        <ul className="flex flex-col gap-2 text-sm ">
                            <li><a href="#" className="text-white text-opacity-70 hover:underline" aria-label="Frequently Asked Questions">Help Center</a></li>
                            <li><a href="#" className="text-white text-opacity-70 hover:underline" aria-label="Check your internet speed">Account</a></li>
                            <li><a href="#" className="text-white text-opacity-70 hover:underline" aria-label="Contact our support team">Ways to watch</a></li>
                            <li><a href="#" className="text-white text-opacity-70 hover:underline" aria-label="See available job opportunities">Only on NEXTFlix</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-gray-400 mb-4">Legal</h4>
                        <ul className="flex flex-col gap-2 text-sm">
                            <li><a href="#" className="text-white text-opacity-70 hover:underline" aria-label="Frequently Asked Questions">Cookies Preferences</a></li>
                            <li><a href="#" className="text-white text-opacity-70 hover:underline" aria-label="Check your internet speed">Privacy Police</a></li>
                            <li><a href="#" className="text-white text-opacity-70 hover:underline" aria-label="Contact our support team">Terms of use</a></li>
                            <li><a href="#" className="text-white text-opacity-70 hover:underline" aria-label="See available job opportunities">Gift cards term</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-gray-400 mb-4">Support</h4>
                        <ul className="flex flex-col gap-2 text-sm">
                            <li><a href="#" className="text-white text-opacity-70 hover:underline" aria-label="Frequently Asked Questions">FAQ</a></li>
                            <li><a href="#" className="text-white text-opacity-70 hover:underline" aria-label="Check your internet speed">Speed Test</a></li>
                            <li><a href="#" className="text-white text-opacity-70 hover:underline" aria-label="Contact our support team">Contact Us</a></li>
                            <li><a href="#" className="text-white text-opacity-70 hover:underline" aria-label="See available job opportunities">Jobs</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </footer>
    );
}
