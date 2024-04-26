import React from "react";

const TextAreas = ({ bg, textColor, title1, title2, text1, text2 }) => {
    return (
        <div className="flex flex-col md:flex-row max-h-[500px]" style={{ background: bg, color: textColor }}>
            <div className="p-2 mt-4 lg:p-8 xl:ml-36 2xl:ml-60 four-k:ml-[550px]">
                <h1 className="text-2xl font-bold text-center lg:text-start 2xl:text-4xl">{title1}</h1>
                <p className="text-center text-sm mt-2 lg:text-start xl:w-[500px] 2xl:text-xl 2xl:mt-12 mb-4">{text1}</p>
            </div>
            <div className="p-2 mt-4 lg:p-8 xl:ml-12 2xl:ml-60">
                <h2 className="text-2xl font-bold text-center lg:text-start 2xl:text-4xl">{title2}</h2>
                <p className="text-center text-sm mt-2 lg:text-start xl:w-[500px] 2xl:text-xl 2xl:mt-12 mb-4">{text2}</p>
            </div>

        </div>
    );
}

export default TextAreas;