import Image from "next/image";
import { FaGamepad, FaLevelUpAlt, FaCheckCircle, FaTimesCircle } from "react-icons/fa";

interface Table {
  rank: number;
  userName: string;
  level: number;
  gamesPlayed: number;
  status: string;
  imgSrc: string;
}

const tableData: Table[] = [
  { rank: 1, userName: "GamerGuru", imgSrc: "/images/Table/avatar5.svg", level: 55, gamesPlayed: 220, status: "Active" },
  { rank: 2, userName: "PixelPrincess", imgSrc: "/images/Table/avatar4.svg", level: 52, gamesPlayed: 210, status: "Active" },
  { rank: 3, userName: "XPWarrior", imgSrc: "/images/Table/avatar3.svg", level: 50, gamesPlayed: 195, status: "Active" },
  { rank: 4, userName: "LuckyLynx", imgSrc: "/images/Table/avatar2.svg", level: 49, gamesPlayed: 185, status: "Active" },
];

const Table = () => {
  return (
    <div className="mx-auto max-w-7xl pt-40 px-6 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2" id="ranking-section">
      <h3 className="col-span-full text-3xl text-center font-bold text-white mb-10">Social Casino Game User Ranking</h3>
      {tableData.map((user, i) => (
        <div
          key={i}
          className="flex items-center bg-gradient-to-br from-purple-600 to-red-600 shadow-lg rounded-2xl p-5 transition duration-300 hover:shadow-2xl hover:scale-105"
        >
          <div className="flex-shrink-0">
            <Image src={user.imgSrc} alt={user.userName} height={90} width={90} className="rounded-full border-4 border-white" />
          </div>
          <div className="ml-6 flex-1">
            <h4 className="text-2xl font-semibold text-white mb-2">{user.userName}</h4>
            <div className="flex justify-between text-white text-sm mb-2">
              <div className="flex items-center gap-1">
                <FaGamepad className="text-indigo-300" />
                <span>{user.gamesPlayed} Games</span>
              </div>
              <div className="flex items-center gap-1">
                <FaLevelUpAlt className="text-green-300" />
                <span>Level {user.level}</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-white text-sm">
              {user.status === "Active" ? (
                <FaCheckCircle className="text-green-300" />
              ) : (
                <FaTimesCircle className="text-red-300" />
              )}
              <span>{user.status}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Table;
