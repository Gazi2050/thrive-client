import { IoMdFitness } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa6";
import { FaRedditAlien } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <div className="p-10 bg-[#01161e]  text-amber-400">
            <footer className="footer">
                <aside>
                    <IoMdFitness className="text-7xl" />
                    <p className="text-2xl font-bold">Thrive</p>
                    <p>Elevate your fitness journey with Thrive,<br /> where wellness meets strength for a thriving you.</p>
                </aside>
                <nav>
                    <header className="footer-title">Social</header>
                    <div className="grid grid-flow-col gap-4 text-2xl">
                        <Link to={'https://www.facebook.com/'} className="hover:text-blue-500"><FaFacebookF /></Link>
                        <Link to={'https://www.reddit.com/'} className="hover:text-blue-500"><FaRedditAlien /></Link>
                        <Link to={'https://www.linkedin.com/'} className="hover:text-blue-500"><FaLinkedinIn /></Link>

                    </div>
                    <header className="footer-title pt-4"> contact</header>
                    <p className="text-xl"> Phone : +7265461277019</p>
                    <p className="text-xl"> Email : thrive@gmail.com</p>
                    <p className="text-xl"> Address : 23 Main Street,
                        Cityville, Bangladesh</p>
                </nav>

            </footer>
            <h1 className="text-center pt-5">© 2024 Thrive. All rights reserved.</h1>
        </div>
    );
};

export default Footer;