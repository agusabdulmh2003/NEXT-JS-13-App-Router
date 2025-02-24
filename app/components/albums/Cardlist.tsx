import ViewUserButton from "./ViewUserButton";

interface CardListProps {
  title: string;
  id: number;
  userId: number;
}

const CardList: React.FC<CardListProps> = ({ title, id, userId }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 border border-gray-200 hover:shadow-lg transition">
      <h2 className="text-lg font-semibold text-gray-800">📀 Album {id}</h2>
      <p className="text-gray-600 mt-2 italic">"{title}"</p>
      <div className="mt-4">
        <ViewUserButton userId={userId} />
      </div>
    </div>
  );
};

export default CardList;
