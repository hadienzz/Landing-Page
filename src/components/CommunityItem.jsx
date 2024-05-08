const CommunityItem = ({ item }) => {
    return (
        <div className='p-[8.01px[ flex flex-col justify-center items-center shadow-md mb-[9.87px]'>
            <div className="rounded-[6.01px] rounded-tl-[1.669px] rounded-tr-[3.339px] rounded-br-[1.669px] bg-[#E8F5E9] w-[16.693px] h-[16.359px] flex justify-center items-center">
                <img src={item.icon} className='object-contain' alt="" />
            </div>
            <h2 className={`text-[9.348px] w-[77px] text-[#4D4D4D] font-bold`}>{item.title}</h2>
            <p className='text-[#717171] text-[4.674px] w-[83px] mt-[2.67px]'>{item.text}</p>
        </div>
    )
}

export default CommunityItem