import rankingBack from "../../assets/ranking2.png"
import RankingCards from "../../components/RankingCards/RankingCards"
import users from "../../JSONS/ranking.json"

const Ranking = () => {
    return (
        <div className="md:justify-center bg-gradient-to-b w-screen bg-center bg-cover flex flex-col justify-center items-center md:h-full h-screen" 
    style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0.6), rgba(128,128,128,0.6)), url(${rankingBack})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top', 
    }}       
        >  <h1 className="text-yellow-500 mt-24 text-bold text-5xl md:text-9xl landinginfo text-center">CLASIFICACIÓN SEASON 1</h1> <div className="flex flex-col w-4/5 ">
 {users.map(user => ( 
                    <RankingCards 
                        key={user.id} 
                        id={user.id}
                        photo={user.photo}
                        name={user.name}
                        level={user.level}
                        xp={user.xp}
                    />
                ))}
   
        </div>
        </div>
    )
}

export default Ranking