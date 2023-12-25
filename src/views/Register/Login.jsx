import { MdEmail } from "react-icons/md"
import { AiFillLock } from "react-icons/ai"
import { useState } from "react";
import registerImage from "../../assets/login.jpg"


const Login = () => {

    const [user, setUser] = useState({
        u_email: '',
        u_password: '',
    })

    const { u_email, u_password } = user;

    const submitHandler = (e) => {
        e.preventDefault();
        const newUser = {
            u_email,
            u_password,
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
            <div style={{border: '4px solid white', borderRadius: '10px'}} className="items-center text-center mt-4 md:mt-8">                     
            <form action="#" className="mt-4 mb-4 ml-12 mr-12" onSubmit={submitHandler} >
                <h2 className="text-3xl mb-8 text-white  text-center landinginfo">INGRESAR</h2>
                <div className="flex">
                <MdEmail className="fill-white" />
                <input className="text-center mb-6 ml-4" placeholder="Email" type="email" required onChange={(e) => setUser({...user, u_email: e.target.value})} />
        r        </div>
                        <div className="flex">
                            <AiFillLock className="fill-white" />
                            <input placeholder="Password" className="text-center ml-4 mb-6" type="password" required onChange={(e) => setUser({...user, u_password: e.target.value})} />
                        </div>
                        <button type="submit" className="text-white text-2xl landinginfo mt-4">ENTRAR</button>
                    </form>
                    <div>
                        <div className="text-white text-l mt-12">
                            <a href="/Registro" className="landinginfo mb-8">TODAVIA NO TENGO CUENTA</a> 
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Login
