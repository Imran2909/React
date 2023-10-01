import './App.css';
import Avatar from './components/Avatar';
import Button from './components/Button';
import Styles from "./components/Button.module.css";

const userData=[
  {url:"https://avatars.githubusercontent.com/u/112754652?v=4", name:"Imran Sutar", post:" full stack web developer"},
  {url:"https://avatars.githubusercontent.com/u/115461893?s=100&v=4", name:"Pankaj jain", post:"backend developer"}
]

const data= userData.map((el,i)=> <Avatar key={i} url={el.url} name={el.name} post={el.post} /> )

function App() {
  return (

    <div className="App">
      {
        userData.map((el,i)=> <Avatar key={i} url={el.url} name={el.name} post={el.post} /> )
        // data
      }
    
      <Button text="<-- go back" styl={Styles.back} />
      <Button text="go next -->" styl={Styles.next} />
      <h1>
        {1+1==2 ? 'yes it is true':'no it is false' }
      </h1>
    </div>
  );
}

export default App;
