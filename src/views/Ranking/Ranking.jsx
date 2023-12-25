import rankingImage from "../../assets/ranking.jpg"
import RankingCards from "../../components/RankingCards/RankingCards"
import users from "../../JSONS/ranking.json"

const Ranking = () => {
    return (
        <div>
            <div className="md:justify-center  w-screen bg-center bg-cover flex justify-center items-center" 
            style={{
                backgroundImage: `url(${rankingImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center top', // Cambiado aquí
                height: '60vh'
            }}        
        >  
        <h1 className="text-yellow-500 text-bold text-5xl md:text-9xl landinginfo text-center">CLASIFICACIÓN SEASON 1</h1>
        </div>
        <div className="md:justify-center bg-gradient-to-b from-gray-400 to-gray-900 via gray  w-screen bg-center bg-cover flex flex-col justify-center items-center" 
            style={{
               
                backgroundSize: 'cover',
                backgroundPosition: 'center top', 
                height: '100%'
            }}        
        >  <div className="flex flex-col w-4/5">
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
        </div>
    )
}

export default Ranking