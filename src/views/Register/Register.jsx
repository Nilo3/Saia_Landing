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
        <section className="flex md:justify-start items-center w-full h-screen bg-center bg-cover" 
        style={{
            backgroundImage: `url(${registerImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}        
    >   
            <div className="flex relative  backdrop-filter-blur border-2  justify-center items-center ">
            <div style={{border: '4px solid white', borderRadius: '10px'}} >
                    <form action="#" onSubmit={submitHandler} >
                        <h2 className="text-xl text-white text-center landinginfo">Registrate</h2>
                        <div className="relative w-full  ">
                            <input type="text" required onChange={(e) => setUser({...user, u_username: e.target.value})} />
                            <label className="absolute top-1/2 left-1 transform -translate-y-1/2 text-white text-base pointer-events-none transition-all duration-200 font-bold" htmlFor="#">Nombre</label>
                        </div>
                        <div className="inputcontainer">
                            <MdEmail className="item" />
                            <input type="email" required onChange={(e) => setUser({...user, u_email: e.target.value})} />
                            <label className="label" htmlFor="#">Email</label>
                        </div>
                        <div className="inputcontainer">
                            <AiFillLock className="item" />
                            <input type="password" required onChange={(e) => setUser({...user, u_password: e.target.value})} />
                            <label className="label" htmlFor="#">Contraseña</label>
                        </div>
                        <div className="inputcontainer">
                            <MdOutlineMessage className="item" />
                            <input type="text" required onChange={(e) => setUser({...user, u_referralCode: e.target.value})} />
                            <label className="label" htmlFor="#">Codigo de Referido</label>
                        </div>

                        <button type="submit" className="btn">Registrarse</button>
                    </form>
                    <div>
                        <div className="register">
                            <p>Ya tengo Cuenta <a href="/login">Iniciar Sesion</a> </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Register