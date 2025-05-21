import "./App.css";

function App() {
  const description =
    "Full stack web developer and teach at Udemy. When not coding or preparing a couse, i like to play board games, to cook( and eat), or to just enjoy the Portufuese sun at the beach";
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express.js",
  ];
  const name = "Jonas Schmedtmans";
  const imgSrc = "images/Recipe.jpg";
  return (
    <div>
      <CardProfile
        imgSrc={imgSrc}
        name={name}
        skills={skills}
        description={description}
      />
    </div>
  );
}

const CardProfile = (props) => {
  return (
    <div className="card">
      <img src={props.imgSrc} alt="logo" />
      <div className="container">
        <h4>{props.name}</h4>
        <p>{props.description}</p>
        <Skills skills={props.skills} />
      </div>
    </div>
  );
};

const Skills = (props) => {
  return (
    <div className="skills">
      {props.skills.map((skill, index) => (
        <span key={index}>{skill}</span>
      ))}
    </div>
  );
};

export default App;
