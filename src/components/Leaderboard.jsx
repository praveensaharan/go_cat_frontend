import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Logo from "../assets/logo.png";
import { useAuth0 } from "@auth0/auth0-react";

const port = "https://go-cat.onrender.com";

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const { user, isAuthenticated, isLoading } = useAuth0();

  useEffect(() => {
    fetchTopScores();
  }, [isAuthenticated, user, isLoading]);

  const fetchTopScores = async () => {
    try {
      const response = await fetch(`${port}/top-scores`);
      if (response.ok) {
        const data = await response.json();

        setLeaderboardData(data);
      } else {
        console.error("Failed to fetch top scores:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching top scores:", error);
    }
  };
  return (
    <section className="bg-gradient-to-br from-orange-50 to-orange-200 dark:bg-gray-900">
      <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-8 lg:px-4 rounded-lg">
        <div className="max-w-screen-md mb-4 lg:mb-8">
          <h2 className="mb-2 text-2xl sm:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Leaderboard
          </h2>
          <p className="text-sm sm:text-xl text-gray-500 dark:text-gray-400">
            Climb the Cat-astrophe Ladder! See who reigns supreme in our
            leaderboard.
          </p>
        </div>
        <Table className="w-full rounded-3xl">
          <TableHeader>
            <TableRow className="bg-slate-200 font-bold text-base sm:text-xl">
              <TableHead className="w-1/4 sm:w-[100px] pl-2 sm:pl-10">
                Rank
              </TableHead>
              <TableHead className="w-1/4 sm:w-[100px]">Avatar</TableHead>
              <TableHead className="w-1/4 sm:w-[100px]">Username</TableHead>
              <TableHead className="w-1/4 sm:w-[100px] text-right pr-2 sm:pr-10">
                Score
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-orange-50">
            {leaderboardData.map((row, index) => (
              <TableRow
                key={index}
                className="transition-all duration-500 ease-out opacity-100 hover:opacity-70 hover:bg-orange-300 hover:scale-110 font-bold text-xs sm:text-base"
              >
                <TableCell className="w-1/4 sm:w-[100px] font-medium pl-2 sm:pl-10">
                  {index + 1}
                </TableCell>
                <TableCell className="w-1/4 sm:w-[100px] pl-2 sm:pl-10">
                  <Avatar>
                    {row.image ? (
                      <AvatarImage src={row.image} />
                    ) : (
                      <AvatarImage src={Logo} />
                    )}
                    <AvatarFallback>
                      {row.nickname.substring(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                </TableCell>
                <TableCell className="w-1/4 sm:w-[100px]">
                  {row.nickname}
                </TableCell>
                <TableCell className="w-1/4 sm:w-[100px] text-right pr-2 sm:pr-10">
                  {row.score}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
};

export default Leaderboard;
