import CardList from "../components/albums/Cardlist";
import ViewUserButton from "../components/albums/ViewUserButton";

const base_url = "https://jsonplaceholder.typicode.com/albums";

interface IAlbums {
  userId: number;
  id: number;
  title: string;
}

const Albums = async () => {
  const response = await fetch(base_url, { cache: "no-store" });
  const albums: IAlbums[] = await response.json();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-fuchsia-600 mb-6">
        📸 Albums Collection
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {albums.map((album) => (
          <CardList key={album.id} title={album.title} id={album.id} userId={album.userId} />
        ))}
      </div>
    </div>
  );
};

export default Albums;
