import image from "../../assets/dossier.jpg";
import dossierPdf from "../../assets/dossier_saia.pdf";

const Press = () => {
    return (
        <div className="w-full h-[50vh] flex flex-col lg:flex-row justify-center items-center">
            <div className="ellipsis" />
            <div>
                <img src={image} alt="dossier" className="w-48 h-64 md:w-60 md:h-80 2xl:w-[300px] 2xl:h-[400px] rounded-2xl mb-4 border-2 border-white" />
            </div>
            <div className="flex flex-col items-center justify-center lg:ml-24 lg:mb-36">
                <div className="text-white text-2xl md:text-4xl font-bold mt-4">
                    Dossier de prensa
                </div>
                <div className="mt-8" >
                    <a href={dossierPdf} download="dossier_saia.pdf" className='rounded-full text-center mt-36 mb-12 md:mt-4 bg-transparent px-5 py-2 md:py-3 lg:py-2 lg:px-20 w-60 text-md font-semibold text-white shadow-sm ring-2 ring-inset ring-white hover:bg-white hover:text-black'>Descargar</a>
                </div>
            </div>

        </div>
    )
}

export default Press;


