import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Welcome to My Shopping List!</h1>
      <p className="text-lg text-gray-700 mb-8">Never forget an item again with our easy-to-use shopping list app.</p>
      <Link to={"/shopping-list"}>
        <button className="py-4 px-6 bg-gradient-to-r from-teal-400 to-blue-500 hover:bg-gradient-to-r hover:from-teal-500 hover:to-blue-600 text-white font-bold rounded-lg shadow-md transition duration-300 ease-in-out">
          Go to Shopping List
        </button>
      </Link>
      <div className="mt-12 flex justify-center space-x-6">
        <div className="bg-pink-400 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg">
          F
        </div>
        <div className="bg-blue-400 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg">
          T
        </div>
        <div className="bg-green-400 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg">
          G
        </div>
      </div>
    </div>
  );
}



