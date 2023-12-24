const LandingCards = ({ id, photo, name, text }) => {
    return (
        <div className="flex flex-col items-center mb-24 ">
            <img className="rounded-full h-60 w-60 mt-12 border-16 border-gold border-solid " src={photo} alt="championphoto" />
            <h4 className=" landinginfo text-3xl mt-1 text-center text-yellow-500  ">{name}</h4>
            <p className="landinginfo text-white mt-2 text-center">{text}</p>
        </div>
      
    )
}

export default LandingCards