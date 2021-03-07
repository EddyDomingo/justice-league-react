import { useState } from 'react';
import './App.css';
import HeroeList from './HeroeList';
import NavBar from './NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AddHero from './AddHero';
import HeroDetail from './HeroDetail';
import GetItems from './GetItems';

function App() {
  const [heroes, setHeroes] = useState([
    { heroName: 'Superman', pic: 'https://cosmicbook.news/sites/default/files/henry-cavill-justice-league-brhv.jpg', powers: 'Flight, Speed, Strength', bio: 'Superman was born on the planet Krypton and was given the name Kal-El at birth. As a baby, his parents sent him to Earth in a small spaceship moments before Krypton was destroyed in a natural cataclysm', id: 1 },
    { heroName: 'Flash', pic:'https://hdqwalls.com/wallpapers/flash-justice-league-unite-2017-on.jpg', powers: 'Super Speed, Time Travel', bio: 'Barry Allen is The Flash, the fastest man alive. Using his super-speed powers, he taps into the Speed Force and becomes a costumed crime-fighter', id: 2},
    { heroName: 'Wonder-Women', pic:'https://images.hdqwalls.com/download/justice-league-wonder-woman-2018-yy-1080x2160.jpg', powers: 'Strength, Speed, Lasso of truth', bio: 'Wonder Woman is the princess Diana, the daughter of Hippolyta, Queen of the Amazons and Zeus, the mightiest of the Gods of Olympus.', id: 3},
    { heroName: 'Batman',pic:'https://images.hdqwalls.com/download/batman-justice-league-unite-2017-qu-720x1280.jpg', powers: 'Super intelligence', bio:'Batman is the superhero protector of Gotham City, a tortured, brooding vigilante dressed as a sort of human bat who fights against evil and strikes fear into the hearts of criminals everywhere.', id: 4}
  ])
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/">
            <HeroeList heroes={heroes}/>
          </Route>
          <Route path="/AddHero">
            <AddHero heroes={heroes} setHeroes={setHeroes}/>
          </Route>
          <Route path="/HeroDetail/:id">
            <HeroDetail heroes={heroes}/>
          </Route>
          <Route path="/GetItems/:id">
            <GetItems heroes={heroes} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
