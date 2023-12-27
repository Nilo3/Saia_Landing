import triviaImage from "../../assets/trivia.jpg"


const Trivia = () => {
    return (
        <div>
            <div className="md:justify-center  w-screen bg-center bg-cover flex justify-center items-center" 
            style={{
                backgroundImage: `url(${triviaImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center top', // Cambiado aquí
                height: '100vh'
            }}        
        >  
        <h1 className="landinginfo text-6xl">ACA VA LA PREGUNTA</h1>
        <div className="flex flex-col text-center justify-between ">  
  <button className="w-full opacity-60  h-24 bg-red-500">OPCION 1</button>
  <button className="w-full mt-4 h-24 bg-gradient-to-t opacity-75 from-green-900 to-green-400">OPCION 2</button>
  <button className="w-full h-24 mt-4 border border-black">OPCION 3</button>
  <button   className="w-full h-24 mt-4 border border-black">OPCION 4</button>
</div>
        </div>
    
        </div>
    )
}

export default Trivia