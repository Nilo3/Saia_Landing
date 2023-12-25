const RankingCards = ({id, photo, name, level, xp}) => {
    return (
        <div className="flex border-8 border-white bg-gold mt-12 w-full rounded-lg shadow-lg p-4 opacity-80 ">
            <div className="flex items-center ">
            <img className="rounded-full h-12 w-12 md:h-36 md:w-36 " src={photo} alt="userphoto" />
            <p className="text-l p-2 md:text-3xl text-center landinginfo  lg:p-24 ">{name.toUpperCase()}</p>
            <p className="text-l p-2 md:text-3xl landinginfo text-center  lg:p-24">NIVEL: {level}</p>
            <p className="text-l p-2 md:text-3xl landinginfo text-center  lg:p-24">XP: {xp}</p>
            </div>
            <div>

            </div>
        </div>
    )
}

export default RankingCards