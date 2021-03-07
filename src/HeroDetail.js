import { useParams } from "react-router-dom";

const HeroDetail = ({heroes}) => {
    
    const { id } = useParams();
    return ( 
        <div className="heroe-preview">
            {heroes.filter(heroe => heroe.id === id ).map(
                heroe =>
                <div className="heroe-preview" key={heroe.id}>
                  <h2>{heroe.heroName}</h2>
                </div>
            )}
           <h2>Hero id is { id }</h2> 
        </div>
     );
}
 
export default HeroDetail;