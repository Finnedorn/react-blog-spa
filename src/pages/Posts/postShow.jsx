import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useLocation, useParams } from "react-router-dom";

const apiUrl = import.meta.env.VITE_BASE_API_URL;

const PostShow = () => {
  const { slug } = useParams();
  const location = useLocation();
  const initialPost = location.state?.post || null;
  const initialSlug = initialPost?.slug || slug; 
  const [post, setPost] = useState(initialPost);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchSinglePost = async () => {
    try {
      setLoading(true);
      setError(null); // Clear any previous errors
      const response = await axios.get(`${apiUrl}/posts/${initialSlug}`);
      setPost(response.data);
    } catch (error) {
      console.error("Error fetching post:", error);
      if (error.response && error.response.status === 422) {
        setError("Invalid request. Please check the slug and try again.");
      } else {
        setError("An unexpected error occurred. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!post) {
      fetchSinglePost();
    } else {
      setLoading(false);
    }
  }, [initialSlug]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!post) {
    return <div>No post found</div>;
  }

  return (
    <div className="container">
      <div className=" bg-light d-flex justify-content-center rounded-3 overflow-hidden my-5">
        <div
          style={{
            overflow: "hidden",
          }}
        >
          {post.image ? (
            <img src={post.image} alt={`Image of ${post.title}`} />
          ) : (
            <img
              src="https://placehold.co/600x400"
              alt={`Image of ${post.title}`}
            />
          )}
        </div>
        <div className=" d-flex justify-content-center w-75">
          <div className="p-5">
            <div>
              <h2
                style={{
                  marginBottom: "10px",
                }}
              >
                {post.title}
              </h2>
              <p
                style={{
                  fontSize: "1.3rem",
                  padding: "10px 0px",
                }}
              >
                {post.content}
              </p>
            </div>
            <div>
              <div className="mb-3">
                <span className="badge text-bg-primary fs-5 me-2 text-light">
                  {post.category.name}
                </span>
              </div>
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className={`tag text-bg-secondary badge fs-5 me-2 text-light`}
                >
                  {tag.name}
                </span>
              ))}
            </div>
          <div className="pt-5">
            <Link to="../" relative="path">
              <button className="btn btn-success me-2">Torna alla Pagina Precedente</button>
            </Link>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostShow;
