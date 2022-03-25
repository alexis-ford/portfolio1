import logo from './logo.svg';
import './App.css';
import Example from './components/Example';
import Heading from './components/Heading';
import ShowInfo from './components/ShowInfo';
import FavCharacter from './components/FavCharacter';
import './fonts/Blacklisted.ttf';

function App() {
  return (
    <div className="App">
      <Heading title="The Blacklist" />
      <Example show="The Blacklist" character="Reddington"/>
      <ShowInfo summary="Blacklist is a crime thriller television show. The show follows a mastermind criminal turned FBI informant, Raymond Reddington, and a team of FBI agents: Elizabeth Keen, Donald Ressler, Harold Cooper and Aram Mojtabai. Each episode follows a similar outline: Raymond gives the FBI team a case to catch a high-profile criminal and once they solve it, they realize there is an alternative motive to why Raymond gave them the case." />
      <FavCharacter ray="Out of all the characters, Raymond Reddigton is my favorite. I say this because he is very intelligent and has old school ways. For example, he stays away from a lot of modern day technology to avoid getting tracked. In addition, he often finds a way to be a step ahead of his competition and even when he does get in a rough situation he is able to magnificently get himself out."/>
    </div>

  );
}



export default App;
