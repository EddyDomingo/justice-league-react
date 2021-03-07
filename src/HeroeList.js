import { Link } from "react-router-dom";

const HeroeList = ({ heroes }) => {
    
    return ( 
        <div>
        {heroes.map(heroe =>
            <div className="heroe-preview" key={heroe.id}>
              <h2>{heroe.heroName}</h2>
              <img src={heroe.pic} alt="Heroe" />
              <p>Superpowers :{heroe.powers}</p>
              <p>Biography :{heroe.bio}</p>
              <Link to={`/GetItems/${heroe.id}`}>
              <button>Read more</button>
              </Link>              
            </div>
            )}
        </div>
     );
}
 
export default HeroeList;