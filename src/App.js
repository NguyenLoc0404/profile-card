import "./App.css";

function App() {
  const description =
    "Full stack web developer and teach at Udemy. When not coding or preparing a couse, i like to play board games, to cook( and eat), or to just enjoy the Portufuese sun at the beach";
  const skills = [
    { name: "HTML+CSS", level: "advanced", color: "orange" },
    { name: "JavaScript", level: "advanced", color: "yellow" },
    { name: "React", level: "beginer", color: "blue" },
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

const Skills = ({ skills }) => {
  return (
    <div className="skills">
      {skills.map((skill, index) => (
        <Skill key={index} skill={skill} />
      ))}
    </div>
  );
};

const Skill = ({ skill }) => {
  const style = {
    backgroundColor: skill.color,
  };
  return (
    <div>
      <p style={style}>
        <span>skill.name</span>
        <span>{skill.level === "advanced" && "👍"}</span>
        <span>{skill.level !== "advanced" && "😢"}</span>
      </p>
    </div>
  );
};

export default App;
