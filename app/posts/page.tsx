import CardList from "../components/posts/CardList";
import ViewUserButton from "../components/posts/ViewUserButton";

const base_url = "https://jsonplaceholder.typicode.com/posts";

interface IPosts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Posts = async () => {
  const response = await fetch(base_url, { cache: "no-store" });
  const posts: IPosts[] = await response.json();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-fuchsia-600 mb-6">
        📝 Blog Posts
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {posts.map((post) => (
          <CardList key={post.id} title={post.title} body={post.body} userId={post.userId} id={post.id} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
