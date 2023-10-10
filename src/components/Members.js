import "../components/MembersStyles.css";
import myImage from "../assets/11.jpg";
import { MemberDetails } from "./MemberDetails";

// function Members(props) {
//   return (
//     <div className="">

//     </div>
//   );
// }

// export default Members;

const Members = () => {
  return (
    <section>
      <div class="container">
        {MemberDetails.map((item, index) => {
          return (
            <div class="members-card">
              <div class="member-content">
                <div class="imgBx">
                  {" "}
                  <img src={myImage} />{" "}
                </div>
                <div class="contentBx">
                  <h3>
                    {" "}
                    {item.name} <br />
                    <span> {item.education} </span>
                  </h3>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Members;
