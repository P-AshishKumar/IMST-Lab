import "../components/CardStyles.css";
import CardData from "./CardData";
import Project1 from "../assets/5.jpg";
import Project2 from "../assets/6.jpg";
import Project3 from "../assets/8.jpg";

function Card() {
  return (
    <div className="card-template">
      <h1>Our Projects</h1>
      <div className="project-card">
        <CardData
          image={Project1}
          heading="Project1"
          text="A series of PET and dopamine synthesis inhibition studies has allowed us to test both correlational and causal hypotheses in humans. Together, these studies addressed core issues in psychology, behavioral neurobiology, and addictions, indicating that (a) pleasure is not required for changes in motivational states, (b) the neurobiology is not the same, and (c) since dopamine affects motivation to seek drug reward but is not closely related to drug-induced pleasure, addiction treatments will likely benefit from a dopamine component and yet we now understand why this has not proven sufficient."
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
