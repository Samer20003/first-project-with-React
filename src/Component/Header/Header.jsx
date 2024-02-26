import reactImg from "../../assets/react-core-concepts.png"; // each ../ meant that we moveout one lever 
import "./Header.css"
const reactDescription = ["Fundamental", "Crucial", "Core"];
function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1)); // function that changed the word randomly every time
}
export default function Header() {
  // the name should start with captile latter
  const discrption = reactDescription[getRandomInt(2)];
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {discrption} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  ); // when we have a multiple line of code insde the component we should put them inside ()
}
