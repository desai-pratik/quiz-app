import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="relative bg-gradient-to-r from-purple-500 to-pink-500 h-screen flex flex-col items-center justify-center text-white">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?nature,water')" }}
      />
      <div className="relative z-10 p-10 text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to the Quiz</h1>
        <p className="text-lg mb-6">Dive into our quizzes and discover the wonders of knowledge.</p>
        <div className="flex flex-wrap justify-center">
          {['generalKnowledge', 'react', 'maths', 'node', 'indianHistory', 'scienceAndTechnology'].map((type) => (
            <Link
              key={type}
              to={`/quiz?type=${type}`}
              className="bg-white text-purple-500 font-semibold px-4 py-2 rounded-lg shadow hover:bg-gray-100 transition duration-300 m-2"
            >
              {type.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
