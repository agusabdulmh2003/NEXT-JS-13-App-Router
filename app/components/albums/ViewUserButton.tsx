"use client";

interface ViewUserButtonProps {
  userId: number;
}

const ViewUserButton: React.FC<ViewUserButtonProps> = ({ userId }) => {
  const handleClick = () => alert(`User ID: ${userId}`);

  return (
    <button
      onClick={handleClick}
      className="mt-3 w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition"
    >
      🔍 Lihat User {userId}
    </button>
  );
};

export default ViewUserButton;
