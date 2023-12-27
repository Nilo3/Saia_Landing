const RankingCards = ({id, photo, name, level, xp}) => {
    return (
        <div className="flex  mt-6 w-full rounded-lg shadow-2xl p-4 opacity-80 ">
            <div className="flex items-center ">
            <img className="rounded-full h-6 w-6 md:h-36 md:w-36 " src={photo} alt="userphoto" />
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