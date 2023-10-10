import "../components/PublicationStyles.css";
import PublicationImage from "../assets/publicationImage.jpg";

function Publication(props) {
  return (
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
                    transformStyle: "preserve-3d"
                  }}
                  className="header49_content-left"
                >
                  <div className="margin-bottom margin-small">
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
                  transformStyle: "preserve-3d"
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
          <img
            src={PublicationImage}
            // loading="lazy"
            // srcSet="https://uploads-ssl.webflow.com/61f197ba0760ae83eb65cf23/6294d7fbc15c3d1312705139_fig%205-12-p-500.webp 500w, https://uploads-ssl.webflow.com/61f197ba0760ae83eb65cf23/6294d7fbc15c3d1312705139_fig%205-12-p-800.webp 800w, https://uploads-ssl.webflow.com/61f197ba0760ae83eb65cf23/6294d7fbc15c3d1312705139_fig%205-12-p-1080.webp 1080w, https://uploads-ssl.webflow.com/61f197ba0760ae83eb65cf23/6294d7fbc15c3d1312705139_fig%205-12.webp 1641w"
            sizes="50vw"
            alt="nero_render_5-12"
            className="header-img"
          />
        </div>
      </div>
    </header>
  );
}

export default Publication;
