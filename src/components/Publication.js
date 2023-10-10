import "../components/PublicationStyles.css";
import PublicationImage from "../assets/publicationImage.jpg";
import { PublishedPapers } from "./PublishedPapers";
function Publication(props) {
  return (
    <div>
      <header className="section-header49">
        <div className="header-2col-img-bg">
          <div className="page-padding">
            <div className="container-medium">
              <div className="padding-vertical padding-xhuge nav-margin lateral-pad">
                <div className="max-width-medium">
                  <div
                    data-w-id="b5ed074a-cbd4-4ec7-134d-6c64bf907acd"
                    style={{
                      opacity: 1,
                      transform:
                        "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                      transformStyle: "preserve-3d",
                    }}
                    className="header49_content-left"
                  >
                    <div className="margin-bottom">
                      <h1 className="heading-large">Selected publications</h1>
                    </div>
                    <p className="text-size-medium">
                      Discover a selection of our most recent and insightful
                      publications.
                    </p>
                  </div>
                </div>
                <div
                  data-w-id="b5ed074a-cbd4-4ec7-134d-6c64bf907ad3"
                  style={{
                    opacity: 1,
                    transform:
                      "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d",
                  }}
                  className="img-sq-frame is--publications"
                />
              </div>
            </div>
          </div>
          <div
            id="w-node-b5ed074a-cbd4-4ec7-134d-6c64bf907ad4-d7e8499c"
            className="header-img-wrapper header-version"
          >
            <img src={PublicationImage} className="header-img" />
          </div>
        </div>
      </header>
      <div className="publication">
        <div className="publication-list">
          {PublishedPapers.map((item, index) => {
            return (
              <div className="paper-details">
                <a href={item.url} class="reference-link">
                  <h2 class="heading-small max-width-medium">{item.title}</h2>
                  <div class="formatted-reference">
                    <div class="text-size-regular">{item.author}</div>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Publication;
