
import "./App.css";
import Card from "./components/Card";
import Nav from "./components/Nav";


function App() {

  const handleMoon = (event) =>{
    event.target.style.display = "none";
    document.getElementById("sun").style.display = "block";
    document.getElementById("mode").innerText = "Dark Mode";
    document.getElementById("root").style.backgroundColor = "hsl(207, 26%, 17%)";
    document.getElementById("Search").style.backgroundColor = "hsl(207, 26%, 17%)";
    document.getElementById("root").style.color = "hsl(0, 0%, 100%)";
  }

  const handleSun = (event) =>{
    event.target.style.display = "none";
    document.getElementById("moon").style.display = "block";
    document.getElementById("mode").innerText = "Light Mode";
    document.getElementById("root").style.backgroundColor = "hsl(0, 0%, 100%)";
    document.getElementById("Search").style.backgroundColor = "hsl(0, 0%, 100%)";
    document.getElementById("root").style.color = "hsl(200, 15%, 8%)";
  }

  return (
    <div>
      <div>
          <Nav 
          handleMoon={handleMoon}
          handleSun={handleSun}
          />
          <Card />
      </div>
    </div>
  );
}

export default App;
