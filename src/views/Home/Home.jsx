import React from 'react';
import Banner from '../../components/Banner';
import TextAreas from '../../components/textAreas';
import TitlesEnum from '../../assets/texts/titles.enum';
import TextEnum from '../../assets/texts/text.enums';
import Values from '../../components/Values';

const Home = () => {
    return (
        <>
            <Banner />
            <TextAreas bg='white' textColor='black' title1={TitlesEnum.WHAT_IS_SAIA} text1={TextEnum.WHAT_TEXT} title2={TitlesEnum.HOW_CAN_SAIA_HELP} text2={TextEnum.HOW_CAN_SAIA_HELP_TEXT} />
            <TextAreas bg='radial-gradient(circle at bottom,  rgba(172, 127, 244, 0.5) 0%, #000000 30%)' textColor='white' title1={TitlesEnum.WHAT_SAIA_IS_DIFFERENT} text1={TextEnum.WHAT_SAIA_IS_DIFFERENT_TEXT} />
            <div className='bg-white h-1' />
            <Values />
            <TextAreas bg='white' textColor='black' title1={TitlesEnum.INNOVATION} text1={TextEnum.INNOVATION_TEXT} title2={TitlesEnum.COLABORATION} text2={TextEnum.COLABORATION_TEXT} />
            <TextAreas bg='radial-gradient(circle at bottom,  rgba(20,105,144,255) 0%, #000000 30%)' textColor='white' title1={TitlesEnum.TRANSPARENCY} text1={TextEnum.TRANSPARENCY_TEXT} title2={TitlesEnum.ETHIC} text2={TextEnum.ETHIC_TEXT} />
        </>
    );
};

export default Home;