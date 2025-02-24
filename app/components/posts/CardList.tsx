import ViewUserButton from "./ViewUserButton";

interface CardListProps {
  title: string;
  body: string;
  id: number;
  userId: number;
}

const CardList: React.FC<CardListProps> = ({ title, body, id, userId }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 border border-gray-200 hover:shadow-lg transition transform hover:scale-105">
      <h2 className="text-lg font-semibold text-gray-800 line-clamp-2">
        📌 {title}
      </h2>
      <p className="text-gray-600 mt-2 text-sm line-clamp-3">{body}</p>
      <div className="mt-4 flex justify-between items-center">
        <span className="text-xs text-gray-500">Post #{id}</span>
        <ViewUserButton userId={userId} />
      </div>
    </div>
  );
};

export default CardList;
