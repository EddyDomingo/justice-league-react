import { useState } from 'react';
import { useParams } from "react-router-dom";

const GetItems = ({heroes}) => {
    const { id } = useParams();
    return ( 
        <div>
            {heroes.filter(superHero => superHero.id == id).map(newSuperArray =>(
                <div className="hero-preview">
                    <h2>{newSuperArray.heroName}</h2>
                    <img src={newSuperArray.pic} alt="picture" />
                    <p>{newSuperArray.powers}</p>
                    <p>{newSuperArray.bio}</p>
                </div>
            ))}
        </div>
     );
}
 
export default GetItems;