import { useEffect, useState } from "react";
import Link from "next/link";

function LastedPromotion() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     try {
  //       const response = await fetch("http://34.143.152.92:8080/promotion");
  //       const data = await response.json();
  //       setPosts(data.data.promotions);
  //       setLoading(false);
  //     } catch (error) {
  //       console.error("Error fetching posts:", error);
  //     }
  //   };

  //   fetchPosts();
  // }, []);

  async function fetchPosts() {
    const response = await fetch("http://34.143.152.92:8080/promotion");
    const data = await response.json();
    setPosts(data.data.promotions);
    setLoading(false);
    return data;
  }

  async function fetchLatestPosts() {
    const posts = await fetchPosts();
    const sortedPosts = posts.sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
    return sortedPosts.slice(0, 3); // Get only the first 3 latest posts
  }


  return (
    <div className="flex justify-center">
      {loading ? (
        <div className="flex justify-center items-center h-full mt-32">
          <img
            className="h-16 w-16"
            src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif"
            alt="loading"
          />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 p-10">
          {posts.map((item, index) => (
            <Link
              href={`/promotions/${item.id}`}
              key={index}
              className="max-w-sm bg-white border border-gray-100 rounded-lg cursor-pointer p-1 flex flex-col"
              // onClick={() => handleClick(id)}
            >
              <div className="overflow-hidden h-[250px] ">
                <img
                  className="rounded-t-lg mb-5 object-cover"
                  src={item.image}
                  alt="bank image"
                  // width={1000}
                  // height={100}
                />
              </div>
              <div className="flex flex-row gap-1">
                <p className="bankName">{item.name}</p>
                <p className="bankName"> • {item.download_date}</p>
              </div>
              <p className="promotionName">{item.title}</p>
              <p
                className="promotionContent mb-5 truncate mx-h-sm
                "
              >
                {item.content}
              </p>
              <div className="mt-auto">
                {" "}
                <a
                  href="/landingPage"
                  className="inline-flex items-center gap-2 bankName"
                >
                  Read more
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.99999 13.3334L13.3333 10.0001M13.3333 10.0001L9.99999 6.66675M13.3333 10.0001H6.66666M18.3333 10.0001C18.3333 14.6025 14.6024 18.3334 9.99999 18.3334C5.39762 18.3334 1.66666 14.6025 1.66666 10.0001C1.66666 5.39771 5.39762 1.66675 9.99999 1.66675C14.6024 1.66675 18.3333 5.39771 18.3333 10.0001Z"
                      stroke="#E40109"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default LastedPromotion;

export async function getStaticProps() {
  const posts = await fetchLatestPosts();
  return {
    props: {
      posts,
    },
  };
}
