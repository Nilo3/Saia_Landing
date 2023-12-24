import { MdEmail } from "react-icons/md"
import { AiFillLock } from "react-icons/ai"
import { MdOutlineMessage } from "react-icons/md";
import { useState } from "react";
import registerImage from "../../assets/login.jpg"


const Register = () => {

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
            backgroundImage: `url(${registerImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}        
    >   
            <div className="flex  border-2 justify-center items-center text-center w-full h-full ">
            <div style={{border: '4px solid white', borderRadius: '10px'}} className="items-center text-center">                     
            <form action="#" className="mt-4 mb-4" onSubmit={submitHandler} >
                <h2 className="text-3xl mb-8 text-white  text-center landinginfo">REGISTRATE</h2>
                  <div className=" w-full ">
                    <input placeholder="Nombre" className="text-center mb-2" type="text" required onChange={(e) => setUser({...user, u_username: e.target.value})} />
                  </div>
                <div className="inputcontainer">
                <MdEmail className="fill-white" />
                <input className="text-center mb-2" placeholder="Email" type="email" required onChange={(e) => setUser({...user, u_email: e.target.value})} />
        r        </div>
                        <div className="inputcontainer">
                            <AiFillLock className="fill-white" />
                            <input placeholder="Password" className="text-center mb-2" type="password" required onChange={(e) => setUser({...user, u_password: e.target.value})} />
                        </div>
                        <div className="inputcontainer">
                            <MdOutlineMessage className="fill-white" />
                            <input className='text-white text-center mb-2' placeholder="Codigo de Referido"  type="text" required onChange={(e) => setUser({...user, u_referralCode: e.target.value})} />
                        </div>

                        <button type="submit" className="text-white text-2xl">Registrarse</button>
                    </form>
                    <div>
                        <div className="text-white text-l ">
                            <p>Ya tengo Cuenta <a href="/login">Iniciar Sesion</a> </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Register