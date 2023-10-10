import "../components/CardStyles.css";
import CardData from "./CardData";
import Project1 from "../assets/5.jpg";
import Project2 from "../assets/6.jpg";
import Project3 from "../assets/8.jpg";

function Card() {
  return (
    <div className="card-template">
      {/* <h1>Our Projects</h1> */}
      <div className="project-card">
        <CardData
          // image={Project1}
          heading="AI Augmented Serious Games - Quantum Cryptography Educator"
          para1="Quantum cryptography is a subject that is typically difficult to learn. One possible reason is that students are treated as passive recipients with linear and fragmented teaching classroom presentations providing limited opportunity to learn the discipline is a holistic manner. Further, quantum cryptography equipment is expensive and beyond the reach of most universities. Game-based learning environments in the area of CyberSecurity have proven more likely to meet the student learning objectives compared to traditional lectures. QuaSim is an AI-augmented pedagogical 3D game-based simulator that provides an immersive experience to students in order to improve learning by transforming subject-based lectures in quantum cryptography into engaging game-based virtual simulations with measurable outcomes."
          para2="The knowledge components in QuaSim are codified using a first-order logic based concept network which are then automatically mapped to a game scenario based on concept dependencies and concept freshness. A numeric metric integrating concept proficiency along with freshness is used to automatically select next game scenarios to maximize concept proficiency and freshness with minimal gaming effort. An abductive reasoner operating on the concept network generates explanations for player interactions and solutions and used to generate conceptual and gaming hints in different modes. QuaSim is perhaps the first game-based simulator that integrates abductive theorem proving along with data analysis to continuously adapt game scenarios based on player performance to measurably improve learning. Such adaptations enable instructors to empirically and quantifiably relate student performance to knowledge components and design lesson plans. QuaSim has been played by over 100 undergraduate/graduate students and the results show significant improvements in student learning outcomes upon using QuaSim along with classroom instruction in comparison to classroom lectures alone.
          "
        />
        <CardData
          image={Project2}
          heading="Project2"
          text="A series of PET and dopamine synthesis inhibition studies has allowed us to test both correlational and causal hypotheses in humans. Together, these studies addressed core issues in psychology, behavioral neurobiology, and addictions, indicating that (a) pleasure is not required for changes in motivational states, (b) the neurobiology is not the same, and (c) since dopamine affects motivation to seek drug reward but is not closely related to drug-induced pleasure, addiction treatments will likely benefit from a dopamine component and yet we now understand why this has not proven sufficient."
        />
        <CardData
          image={Project3}
          heading="Project3"
          text="A series of PET and dopamine synthesis inhibition studies has allowed us to test both correlational and causal hypotheses in humans. Together, these studies addressed core issues in psychology, behavioral neurobiology, and addictions, indicating that (a) pleasure is not required for changes in motivational states, (b) the neurobiology is not the same, and (c) since dopamine affects motivation to seek drug reward but is not closely related to drug-induced pleasure, addiction treatments will likely benefit from a dopamine component and yet we now understand why this has not proven sufficient."
        />
        <CardData
          image={Project3}
          heading="Project3"
          text="A series of PET and dopamine synthesis inhibition studies has allowed us to test both correlational and causal hypotheses in humans. Together, these studies addressed core issues in psychology, behavioral neurobiology, and addictions, indicating that (a) pleasure is not required for changes in motivational states, (b) the neurobiology is not the same, and (c) since dopamine affects motivation to seek drug reward but is not closely related to drug-induced pleasure, addiction treatments will likely benefit from a dopamine component and yet we now understand why this has not proven sufficient."
        />
        <CardData
          image={Project3}
          heading="Project3"
          text="A series of PET and dopamine synthesis inhibition studies has allowed us to test both correlational and causal hypotheses in humans. Together, these studies addressed core issues in psychology, behavioral neurobiology, and addictions, indicating that (a) pleasure is not required for changes in motivational states, (b) the neurobiology is not the same, and (c) since dopamine affects motivation to seek drug reward but is not closely related to drug-induced pleasure, addiction treatments will likely benefit from a dopamine component and yet we now understand why this has not proven sufficient."
        />
      </div>
    </div>
  );
}

export default Card;
