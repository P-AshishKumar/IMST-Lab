import "./FacultyStyles.css";
import facultyImage from "../assets/Mahadevan Subramaniam.png";

function Faculty() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box  background-color-midnight">
        <div className="hero--section--img">
          <img src={facultyImage} alt="Hero Section" />
        </div>
        <div className="hero--section--content">
          <h1 className="hero--section--title"> Mahadevan Subramaniam, Ph.D</h1>
          <p className="hero--section-description">
            Professor and Chairperson
            <br />
            Charles W. Margre H. Distinguished
            <br />
            Professor of Information Technology
            <br />
            Director, Modeling and Simulation Lab
            <br />
            Department Computer Science
            <br />
            University of Nebraska Omaha
            <br />
            Omaha, NE.
            <br />
            msubramaniam@unomaha.edu
          </p>
        </div>
      </div>

      <div className="reserach-padding ">
        <div className="container-small">
          <div className="reserach-content">
            <p className="faculty-about">
              Mahadevan Subramaniam (Subu) is the Chairperson of the Computer
              Science Department in the College of Information Science and
              Technology in the University of Nebraska at Omaha, UNO. He is a
              Professor of Computer Science and the Director of the Intelligent
              Modeling, Simulation, and Testing Laboratory at the Peter Kiewit
              Institute. Prior to joining UNO, Subu worked in the high-tech
              industrial corridor in Silicon Valley, Bay Area, as a research
              scientist, computer architect, and an entrepreneur. He was a
              member of the team designing one of the first production quality
              compiler-compilers for programming language, CHILLTM and was
              involved in designing compiler for the hardware programming
              language, VerilogTM . He was a founding member of the Automated
              Software Engineering Group at NASA Ames Research Center,
              architected a distributed shared memory system, and was a
              principal architect for one of the first Infiniband Target Channel
              adapter in a successful start-up company.
              <br /> <br />
              As the chairperson, his overarching objective is to make the
              computer science department at UNO a welcoming space for all,
              fostering a positive, student-centric learning environment while
              promoting high quality teaching, research, and scholarship. The
              department consists of world class faculty in core and applied
              areas of computer science including artificial intelligence,
              computing systems, human centered computing, and computer science
              education. The department offers ABET/CAC accredited undergraduate
              program in computer science with concentration areas in artificial
              intelligence, internet technologies, and computer games. It also
              offers a Master's program in computer science with concentrations
              and graduate certificates in several emerging areas including an
              online certificate in machine learning. Department faculty also
              actively supervise doctoral students in the college wide doctoral
              program.
              <br /> <br />
              His research interests are in the areas of AI-driven simulation,
              and application of qualitative, quantitative inference to Medical,
              Computer Systems, and Augmented Learning applications. Over the
              past decade, he has been collaborating with physicians and
              clinical researchers from the University of Nebraska Medical
              Center, the Beyer Eye Institute, Stanford, Ocular Imaging Research
              and Reading Center, and from Turkey, and Argentina to design
              devices, software applications, and Deep Learning methods for the
              diagnosis and management of retinal diseases. With colleagues, he
              has developed a device and a software application to measure and
              automatically correct the visual impairments perceived by
              Age-related Macular Degeneration (AMD) subjects. He is currently
              developing a deep learning based diagnosis application for
              uveitis. He also created adaptive, intelligent serious games for
              Construction Engineering and Quantum Cryptography education. As a
              director of the Intelligent Modeling, Simulation, and Testing
              (IMST) laboratory at UNO, his research projects have been
              supported by several federal, state, and local agencies including
              NASA, NSA, NSF, VA, NRI and the Nebraska Foundation.
              <br /> <br />
              He obtained my PhD in Computer Science from the University of
              Albany, NY in Artificial Intelligence and Automated Reasoning and
              my MSc(Tech) Computer Science from BITS Pilani, India.
              <br /> <br />
              He likes running and has completed several 5ks, 10Ks, Half and
              Full Marathons.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faculty;
