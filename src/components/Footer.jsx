import footLogo from "../assets/logo-xl.png"
import facebookIcon from "../assets/facebook.png"
import instagramIcon from "../assets/instagram.png"
import twitterIcon from '../assets/twitter.png'
const Footer = () => {
    return (

        <div className="bg-green-950 text-center pt-10 md:pt-20 px-3">
            <img src={footLogo} alt="Footer Logo " className="inline-block mb-4" />
            <p className="text-white">Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
            <p className="text-xl text-white font-medium mt-6">Social Links</p>
            <div className="mt-4 pb-10">
                <img src={facebookIcon} alt="Facebook" className="inline-block mx-2" />
                <img src={instagramIcon} alt="Instagram" className="inline-block mx-2" />
                <img src={twitterIcon} alt="Twitter" className="inline-block mx-2" />
            </div >
            <div className=" h-px "></div>
            <div className="flex justify-between gap-5  py-8 w-10/12 mx-auto border-t border-green-900">
                <p className="text-white opacity-50">© 2026 KeenKeeper. All rights reserved.</p>
                <div className="flex flex-wrap  sm:gap-3 md:gap-5 ">
                    <p className="text-white opacity-50">Privacy Policy</p>
                    <p className="text-white opacity-50">Terms of Service</p>
                    <p className="text-white opacity-50">Cookies</p>
                </div>

            </div>
        </div>
    )
}
export default Footer;