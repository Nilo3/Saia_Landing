import { MdEmail } from "react-icons/md"
import { AiFillLock } from "react-icons/ai"
import { MdOutlineMessage } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";
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
            <form action="#" className="mt-4 mb-4 ml-24 mr-24" onSubmit={submitHandler} >
                <h2 className="text-3xl mb-8 text-white  text-center landinginfo">REGISTRATE</h2>
                  <div className=" w-full flex  ">
                  <IoMdPerson className="fill-white" />
                  <input placeholder="Nombre" className="text-center mb-6 ml-4" type="text" required onChange={(e) => setUser({...user, u_username: e.target.value})} />
                  </div>
                <div className="flex">
                <MdEmail className="fill-white" />
                <input className="text-center mb-6 ml-4" placeholder="Email" type="email" required onChange={(e) => setUser({...user, u_email: e.target.value})} />
        r        </div>
                        <div className="flex">
                            <AiFillLock className="fill-white" />
                            <input placeholder="Password" className="text-center ml-4 mb-6" type="password" required onChange={(e) => setUser({...user, u_password: e.target.value})} />
                        </div>
                        <div className="flex">
                            <MdOutlineMessage className="fill-white" />
                            <input className='text-white text-center mb-6 ml-4' placeholder="Codigo de Referido"  type="text" required onChange={(e) => setUser({...user, u_referralCode: e.target.value})} />
                        </div>

                        <button type="submit" className="text-white text-2xl landinginfo mt-4">CREAR CUENTA</button>
                    </form>
                    <div>
                        <div className="text-white text-l mt-12">
                            <a href="/login" className="landinginfo">YA TENGO CUENTA</a> 
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Register