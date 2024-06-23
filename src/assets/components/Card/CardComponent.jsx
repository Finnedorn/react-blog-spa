import c from "./Card.module.css";
import { Link, useSearchParams } from "react-router-dom";


const CardComponent = ({
  id,
  title,
  image,
  content,
  category,
  tags,
  published,
  slug,
  post
}) => {
  return (
    <div className={c.cardWrapper}>
      <div className={c.card}>
        <div className={c.cardBody}>
            <div>
              <div className={!published && "notPublished"}>
                <div className={c.cardImg}>
                  {image ? (
                    <img src={image} alt={`immagine di ${title}`} />
                  ) : (
                    <img
                      src="https://placehold.co/600x400"
                      alt={`immagine di ${title}`}
                    />
                  )}
                </div>
                <div className="p-5">
                  <div>
                    <h2 className={c.cardTitle}>{title}</h2>
                    <p
                      style={{
                        fontSize: "1.3rem",
                        padding: "10px 0px",
                      }}
                    >
                      {content.length > 50
                        ? content.substring(0, 50) + "..."
                        : content}
                    </p>
                  </div>
                  <div>
                    <div className="mb-3">
                      <span 
                      className="badge text-bg-primary fs-5 me-2 text-light"
                      >
                        {category.name}
                      </span>
                    </div>
                    {tags.map((tag, index) => (
                      <span
                        key={index}
                        className={`tag text-bg-secondary badge fs-5 me-2 text-light`}
                      >
                        {tag.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="ps-5 pb-2">
                <Link to={`/posts/${slug}`} state={{post}}>
                    <button className="btn btn-success me-2">
                      Leggi
                    </button>
                </Link>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
