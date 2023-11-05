import "../components/CardStyles.css";

function CardData(props) {
  const ProjectMemberDetails = [
    {
      teamMember: "A. Parakh, M. Subramaniam, E. Ostler ",
      uni: "Colleges of IS&T and Education, UNO",
    },
  ];

  const ProjectMemberDetails2 = [
    {
      teamMember: "M. Subramaniam, P. Chundi",
      uni: "Computer Science Department, UNO",
    },
  ];

  const teamDetails =
    props.id == "Project1" ? ProjectMemberDetails : ProjectMemberDetails2;
  return (
    <div className="t-card">
      {/* <div className="t-image">
        <img src={props.image} alt="image" />
      </div> */}
      <h4>{props.heading}</h4>
      <div className="content-format">
        <div className="team">
          <h2 className="medium-font">Core Team:</h2>
          {teamDetails.map((item, index) => {
            return (
              <p>
                {" "}
                {item.teamMember} ({item.uni})
              </p>
            );
          })}
        </div>
        <div className="students">
          <h2 className="medium-font">Students:</h2>
          <p>{props.studentNames}</p>
        </div>

        <h2 className="medium-font">OverView</h2>
        <p className="project-para">
          {props.para1} <br className="parap-br" />
          {props.para2}{" "}
        </p>
      </div>
    </div>
  );
}

export default CardData;
