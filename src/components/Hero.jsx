import illustration from '../assets/Illustration.png'
import Button from './UI/Button'

const Hero = () => {
    return (
        <section className=" py-[32.05px] font-inter flex justify-between">
            <article className='w-[219.350px]'>
                <h1 className="text-[#4D4D4D] font-semibold text-[21.367px]">Lessons and insight <br /> <span className="text-green">from 8 years</span> </h1>
                <p className="text-mobile mb-[10.68px]">Where to grow your business as a photographer: site or social media?</p>
                <Button>Register</Button>
            </article>
            <aside>
                <img src={illustration} className='w-[130.542px] h-[130.542px] object-contain' />
            </aside>
        </section>
    )
}

export default Hero