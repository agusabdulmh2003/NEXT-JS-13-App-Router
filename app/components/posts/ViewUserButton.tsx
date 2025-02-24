"use client";

interface ViewUserButtonProps {
  userId: number;
}

const ViewUserButton: React.FC<ViewUserButtonProps> = ({ userId }) => {
  const handleClick = () => alert(`User ID: ${userId}`);

  return (
    <button
      onClick={handleClick}
      className="text-xs bg-blue-600 hover:bg-blue-700 text-white font-medium py-1 px-3 rounded-lg transition"
    >
      🔍 User {userId}
    </button>
  );
};

export default ViewUserButton;
