import icon1 from '../assets/footer-1.png'
import icon2 from '../assets/footer-2.png'
import icon3 from '../assets/footer-3.png'
import icon4 from '../assets/footer-4.png'
import icon5 from '../assets/footer-5.png'
import icon6 from '../assets/footer-6.png'
import icon7 from '../assets/footer-7.png'

const imgFooter = [
    icon1, icon2, icon3, icon4, icon5, icon6, icon7
]

const Clients = () => {
    return (
        <section className='text-center py-[13.35px] font-inter'>
            <h2 className="text-subHeader font-medium text-[#4D4D4D]">Our Clients</h2>
            <p className="text-mobile text-[#717171]">We have been working with some Fortune 500+ clients</p>
            <footer className="w-full flex justify-between mt-[5.34px]">
                {imgFooter.map((icon, index) => <img className='object-contain' key={index} src={icon} alt="" />)}
            </footer>
        </section>
    )
}

export default Clients