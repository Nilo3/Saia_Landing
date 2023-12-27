const RankingCards = ({id, photo, name, level, xp}) => {
    return (
        <div className="flex w-full rounded-lg shadow-2xl opacity-80">
            <div className="flex items-center h-36">
                <img className="ml-4 rounded-full h-6 w-6 md:h-24 md:w-24" src={photo} alt="userphoto" />
                <div className="flex flex-row justify-between ml-12">
                    <p className="text-l ml-12  md:text-3xl text-center landinginfo">{name.toUpperCase()}</p>
                    <p className="text-l ml-24 md:text-3xl text-center landinginfo">NIVEL: {level}</p>
                    <p className="text-l ml-24  md:text-3xl text-center landinginfo">XP: {xp}</p>
                </div>
            </div>
        </div>
    )
}

export default RankingCards