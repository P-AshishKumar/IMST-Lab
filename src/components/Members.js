import "../components/MembersStyles.css";
import myImage from "../assets/avatar.png";
import { MemberDetails } from "./MemberDetails";
import { CollaboratorsDeatils } from "./CollaboratorsDetails";
import { AlumniDeatils } from "./AlumniDetails";
// import { Swiper, SwiperSlide } from "swiper/react";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

// import { EffectCoverflow, Pagination, Navigation } from 'swiper';

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
      {/* <div className="member-content">
      <h1>Our Lab</h1>
      <div className ="member-card-outline">
      <div className="member-card">
      <div className="m-card">
      <div className="m-image">
        <img src={myImage} alt="image" />
      </div>
      <h4>Dr Mahadevan Subramaniam</h4>
      <p>Professor, Computer Science, UNO</p>
    </div>
      </div>
      </div>
    </div> */}
      <div class="outline">
        <h1 className="heading-large">Current Members</h1>
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
      </div>
      <div class="outline1">
        <h1 className="heading-large">Collaborators</h1>
        <div class="container">
          {CollaboratorsDeatils.map((item, index) => {
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
      </div>
      <div class="outline1">
        <h1 className="heading-large">Alumni</h1>
        <div class="container">
          {AlumniDeatils.map((item, index) => {
            return (
              <div class="members-card">
                <div class="member-content">
                  <div class="imgBx">
                    {" "}
                    <img src={myImage} />{" "}
                  </div>
                  <div class="contentBx">
                    <h3> {item.name}</h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Members;
