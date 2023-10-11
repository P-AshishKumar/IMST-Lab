import "../components/CardStyles.css";
import CardData from "./CardData";
import Project1 from "../assets/5.jpg";
import Project2 from "../assets/6.jpg";
import Project3 from "../assets/8.jpg";

function Card() {
    const ProjectMemberDetails = [
    {
      teamMember: "A. Parakh, M. Subramaniam, E. Ostler ",
      uni: "Colleges of IS&T and Education, UNO",
    },
    {
      teamMember: "Q. Nguyen, and M. Sohail",
      uni: "Byers Eye Institute, Stanford University, Ocular Image Research an Reading Center",
    },
    {
      teamMember: "Murat Hasanreisoglu ",
      uni: "Ophthalmology Department, Gaza University, Turkey.",
    },
  ];
  return (
    <div className="card-template">
      {/* <h1>Our Projects</h1> */}
      <div className="project-card">
        <CardData
          // image={Project1}
          id ="Project1"
          heading="AI Augmented Serious Games - Quantum Cryptography Educator"
          para1="Quantum cryptography is a subject that is typically difficult to learn. One possible reason is that students are treated as passive recipients with linear and fragmented teaching classroom presentations providing limited opportunity to learn the discipline is a holistic manner. Further, quantum cryptography equipment is expensive and beyond the reach of most universities. Game-based learning environments in the area of CyberSecurity have proven more likely to meet the student learning objectives compared to traditional lectures. QuaSim is an AI-augmented pedagogical 3D game-based simulator that provides an immersive experience to students in order to improve learning by transforming subject-based lectures in quantum cryptography into engaging game-based virtual simulations with measurable outcomes."
          para2="The knowledge components in QuaSim are codified using a first-order logic based concept network which are then automatically mapped to a game scenario based on concept dependencies and concept freshness. A numeric metric integrating concept proficiency along with freshness is used to automatically select next game scenarios to maximize concept proficiency and freshness with minimal gaming effort. An abductive reasoner operating on the concept network generates explanations for player interactions and solutions and used to generate conceptual and gaming hints in different modes. QuaSim is perhaps the first game-based simulator that integrates abductive theorem proving along with data analysis to continuously adapt game scenarios based on player performance to measurably improve learning. Such adaptations enable instructors to empirically and quantifiably relate student performance to knowledge components and design lesson plans. QuaSim has been played by over 100 undergraduate/graduate students and the results show significant improvements in student learning outcomes upon using QuaSim along with classroom instruction in comparison to classroom lectures alone. "
          studentNames="D. Abeyrathna, V. Bomanapally, S. Mcdermott, J. Robbins, S. Vadla."
          teamdetails={ProjectMemberDetails}
        />
        <CardData
          image={Project2}
          id ="Project2"
          heading="Learning Aided Medical Imaging for Diagnosis and Management of Retinal Uveitis "
          para1="Ocular toxoplasmosis (OT) is the most common cause of posterior uveitis in immunocompetent subjects and a frequent cause of infectious uveitis in many countries. The hallmark of OT is focal necrotizing retinochoroiditis, ultimately resulting in characteristic atrophic or pigmented scars. Usually, active lesions are seen along with one or more scars resulting from a prior affliction. While the relationship among the spatial distributions of the OT lesions across multiple affectations of the disease are unclear, it is crucial to recognize the high likelihood of second occurrence, which may be close to the fovea, optic disc or macula. Such recurrences necessitate timely intervention to prevent vision loss"
          para2="The diagnosis of OT involves synthesis of multiple factors including clinical history and laboratory serology along with findings on examination, which includes fundus imaging. A non-invasive and rapid pre-testing probability generated using Artificial Intelligence-based deep learning and other related methods will be of immense assistance to the clinicians in guiding the future management as well as preventing unnecessary evaluation. Based on de-identified fundus (color retinal) images and other clinical data collected from over 500 patients who are managed for OT at the academic centers in Argentina, England, Turkey, and United States, this project aims to analyze the features and characteristics of OT lesions across continents."
          studentNames="A. Chakravarthy, D. Abeyrathna, V. Bomanapally
          "
        />
      </div>
    </div>
  );
}

export default Card;
