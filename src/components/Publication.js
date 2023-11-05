import "../components/PublicationStyles.css";
import PublicationImage from "../assets/publicationImage.jpg";
import { PublishedPapers } from "./PublishedPapers";
function Publication(props) {
  return (
    <div>
      {/* <header className="section-header49">
        <div className="margin-bottom">
          <h1 className="pu-heading">Selected publications</h1>
        </div>
        <p className="text-size-medium">
          Explore a curated collection of our latest and thought-provoking
          publications.
        </p>
      </header> */}
      <div className="publication">
        <div className="publication-list">
          {PublishedPapers.map((post) => (
            <div key={post.year}>
              <h2 class="year-heading">Year: {post.year}</h2>
              {post.papers.map((paper, index) => (
                <div className="paper-details">
                  <a href={paper.url} class="reference-link">
                    <div class="text-size-regular">
                      {paper.authors}{" "}
                      <div className="cursive-text">{paper.title}</div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Publication;
