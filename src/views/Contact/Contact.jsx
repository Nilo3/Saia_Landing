import { useState } from "react";
import contactImage from "../../assets/contact.jpg"


const Contact = () => {

    const [user, setUser] = useState({
        u_username: '',
        u_email: '',
        u_password: '',
        u_referralCode: '',
    })

    const { u_email, u_username, u_password, u_referralCode } = user;

    const submitHandler = (e) => {
        e.preventDefault();
        const newUser = {
            u_username,
            u_email,
            u_password,
            u_referralCode
        }
        console.log(newUser);
    }

    return (
        <section className=" md:justify-start items-center w-full h-screen bg-center bg-cover" 
        style={{
            backgroundImage: `url(${contactImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}        
    >   
            <div className="flex  border-2 justify-center items-center text-center w-full h-full ">
<<<<<<< HEAD
            <div style={{border: '4px solid white', borderRadius: '10px'}} className="items-center text-center mt-4 md:mt-8 bg-black opacity-75">                     
=======
            <div style={{border: '4px solid white', borderRadius: '10px'}} className="items-center text-center mt-4 md:mt-8 bg-black opacity-60 md:opacity-75">                     
>>>>>>> 8f6e7c595d66e5c2313c9685b7dab93d22743009
            <form action="#" className="mt-4 mb-4 ml-12 mr-12 flex flex-col" onSubmit={submitHandler} >
                <h2 className="text-3xl mb-8 text-white  text-center landinginfo">CONTACTANOS</h2>
                <h5 className=" landinginfo text-yellow-500 text-2xl mb-12">Cualquier sugerencia que quieras dejarnos, recomendacion o queja, este es el lugar. </h5>
                <select className="text-center mb-6 ml-4 mt-4 landinginfo" required onChange={(e) => setUser({...user, u_email: e.target.value})}>
                <option value="">Tipo de solicitud</option>
                <option value="opcion1">Premio</option>
                <option value="opcion2">Tengo un inconveniente</option>
                <option value="opcion3">Encontre un bug</option>
                <option value="opcion4">Felicitaciones</option>
            </select>      
                <input placeholder="Tu email" className="text-center ml-4 mb-6 landinginfo" type="email" required onChange={(e) => setUser({...user, u_password: e.target.value})} />      
                <textarea placeholder="Tu mensaje" className="text-center ml-4 mb-6 landinginfo" required onChange={(e) => setUser({...user, u_message: e.target.value})} />
                <button type="submit" className="text-white text-2xl landinginfo mt-4">ENVIAR</button>
                    </form>
                    <div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Contact
