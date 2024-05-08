import icon1 from '../assets/icon-1.png'
import icon2 from '../assets/icon-2.png'
import icon3 from '../assets/icon-3.png'
import CommunityItem from './CommunityItem'

const member = [
    {
        icon: icon1,
        title: 'Membership Organisations',
        text: 'Our membership management software provides full automation of membership renewals and payments'
    },
    {
        icon: icon2,
        title: 'National Association',
        text: 'Our membership management software provides full automation of membership renewals and payments'
    },
    {
        icon: icon3,
        title: 'Clubs And Gropus',
        text: 'Our membership management software provides full automation of membership renewals and payments'
    }
]

const Community = () => {
    return (
        <section className="font-inter text-center">
            <h2 className="text-subHeader font-medium leading-[14.69px] w-[180.956px] mx-auto text-[#4D4D4D]">Manage your entire community in a single system</h2>
            <p className="text-mobile mt-[2.36px]">Who is Nextcent suitable for?</p>

            <div className='flex justify-between mt-[5.34px]'>

                {member.map((item, index) => {
                    return (
                        <CommunityItem item={item} key={index} />
                    )
                })}
            </div>
        </section >
    )
}

export default Community