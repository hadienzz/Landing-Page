import unlock from '../assets/unlock.png'
import Button from './UI/Button'

const Unlock = () => {
    return (
        <section className='flex justify-between font-inter items-center'>
            <div className='w-[480.768px]'>
                <img src={unlock} alt="Unlock" className='' />
            </div>
            <div className=''>
                <h2 className='text-subHeader text-[#4D4D4D] font-semibold '>The unseen of spending three years at Pixelgrade</h2>
                <p className='text-[4.674px] pt-[5.34px] pb-[10.68px] text-[#717171]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
                <Button>Learn More</Button>
            </div>
        </section>
    )
}

export default Unlock