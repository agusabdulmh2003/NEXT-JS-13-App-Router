import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-fuchsia-600 text-white">
      <h1 className="text-4xl font-bold mb-6 animate-fade-in">📌 Welcome to My App</h1>
      <p className="text-lg text-gray-200 mb-10 text-center max-w-md">
        Temukan postingan menarik dan koleksi album keren di aplikasi ini!
      </p>

      <div className="space-y-4">
        <Link href="/posts" className="group block w-64 bg-white text-fuchsia-600 font-semibold py-3 px-6 rounded-xl shadow-lg hover:bg-fuchsia-600 hover:text-white transition duration-300 text-center">
          📝 Jelajahi Postingan  
        </Link>

        <Link href="/albums" className="group block w-64 bg-white text-purple-600 font-semibold py-3 px-6 rounded-xl shadow-lg hover:bg-purple-600 hover:text-white transition duration-300 text-center">
          📸 Lihat Album  
        </Link>
      </div>
    </div>
  );
}
