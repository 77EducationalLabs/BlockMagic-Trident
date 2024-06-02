import React, { useState, useEffect } from "react";
import '../styles/Dashboard.css';
import MyGames from "../components/MyGames";
import tridentAbi from "../utils/Trident.json";
import tridentFunctionsAbi from "../utils/TridentFunctions.json";
import { ethers } from "ethers";
import bellumGame from "../assets/bellum-game.webp";
import { useDynamicContext, useUserWallets } from '@dynamic-labs/sdk-react-core';

const contractAddress = "0x873C0df305D75b078f002a81e2e8571021AC7e13";
const functionsAddress = "0x955386e624Ebc9439737Ec157df6A6ad5B16e892";
const alchemyApiKey = process.env.REACT_APP_ALCHEMY_API_KEY;

const games = [
  {
    id: 1,
    title: "Bellum Galaxy Game",
    image: require("../assets/game-images/game-01.png"),
    category: "Sci-Fi",
    subcategory: "Space",
    rating: 8.0,
    description:
      "Embark on an exhilarating journey through the cosmos, where strategic prowess meets boundless exploration.",
    downloads: 2500000,
  },
  {
    id: 2,
    title: "MADDEN 24",
    image: require("../assets/game-images/game-06.jpg"),
    category: "Sports",
    subcategory: "Football",
    rating: 7.5,
    description: "Enjoy the latest in American football simulation.",
    downloads: 1800000,
  },
  {
    id: 3,
    title: "Forza Horizon 4",
    image: require("../assets/game-images/game-07.jpg"),
    category: "Racing",
    subcategory: "Simulation",
    rating: 9.2,
    description: "Experience the open-world racing adventure.",
    downloads: 3200000,
  },
  {
    id: 4,
    title: "Sea of Thieves",
    image: require("../assets/game-images/game-08.jpg"),
    category: "Adventure",
    subcategory: "Pirates",
    rating: 8.3,
    description:
      "Live the life of a pirate in this open-world multiplayer game.",
    downloads: 2800000,
  },
  {
    id: 5,
    title: "Rust",
    image: require("../assets/game-images/game-09.jpg"),
    category: "Survival",
    subcategory: "Open World",
    rating: 7.8,
    description: "Survive and thrive in a harsh environment.",
    downloads: 1400000,
  },
  {
    id: 6,
    title: "Valheim",
    image: require("../assets/game-images/game-10.jpg"),
    category: "Survival",
    subcategory: "Vikings",
    rating: 8.7,
    description:
      "Explore the mystical Viking world in this open-world survival game.",
    downloads: 1200000,
  },
  {
    id: 7,
    title: "HELLDIVERS™ 2",
    image: require("../assets/game-images/game-11.jpg"),
    category: "Action",
    subcategory: "Shooter",
    rating: 7.5,
    description: "Fight against aliens in this cooperative action shooter.",
    downloads: 900000,
  },
  {
    id: 8,
    title: "Warframe",
    image: require("../assets/game-images/game-12.jpg"),
    category: "Action",
    subcategory: "MMO",
    rating: 9.0,
    description: "Experience the fast-paced action in this multiplayer MMO.",
    downloads: 3500000,
  },
];
  
  function generateHash() {
    const hexChars = '0123456789abcdef';
    let hash = '0x';
    for (let i = 0; i < 40; i++) { // Endereço Ethereum tem 40 caracteres após '0x'
      const randomIndex = Math.floor(Math.random() * hexChars.length);
      hash += hexChars[randomIndex];
    }
    return hash;
  }
  
  function maskHash(hash) {
    const prefix = hash.slice(0, 4);
    const suffix = hash.slice(-4);
    return `${prefix}...${suffix}`; 
  }
  
  const transactions = [
    { id: 1, date: '2024-04-01', type: 'BUY', gameTitle: 'FC24', price: 59.99, hash: generateHash() },
    { id: 2, date: '2024-03-25', type: 'SELL', gameTitle: 'Rust', price: 29.99, hash: generateHash() },
    { id: 3, date: '2024-03-30', type: 'SWAP', gameTitle: 'Forza Horizon 4', price: 39.99, hash: generateHash() },
    { id: 4, date: '2024-04-05', type: 'BUY', gameTitle: 'Sea of Thieves', price: 29.99, hash: generateHash() },
    { id: 5, date: '2024-04-10', type: 'SELL', gameTitle: 'Valheim', price: 25.99, hash: generateHash() },
    { id: 6, date: '2024-04-12', type: 'BUY', gameTitle: 'Warframe', price: 19.99, hash: generateHash() },
    { id: 7, date: '2024-04-15', type: 'SWAP', gameTitle: 'MADDEN 24', price: 49.99, hash: generateHash() },
    { id: 8, date: '2024-04-18', type: 'SELL', gameTitle: 'HELLDIVERS™ 2', price: 39.99, hash: generateHash() },
    { id: 9, date: '2024-04-20', type: 'BUY', gameTitle: 'Valorant', price: 0.00, hash: generateHash() },
    { id: 10, date: '2024-04-25', type: 'SWAP', gameTitle: 'Genshin Impact', price: 0.00, hash: generateHash() },
  ];
  
  
  function Dashboard() {
    const { primaryWallet } = useDynamicContext();
    const userWallets = useUserWallets();

    const [gameName, setGameName] = useState("");
    const [gameAddress, setGameAddress] = useState("");
    const [buyingTime, setBuyingTime] = useState("");
    const [gamePrice, setGamePrice] = useState("");
    const [gameRating, setGameRating] = useState("");

    const fetchData = async () => {
      const provider = new ethers.providers.JsonRpcProvider(
        `https://eth-sepolia.g.alchemy.com/v2/${alchemyApiKey}`
      );
      const contract = new ethers.Contract(
        contractAddress,
        tridentAbi,
        provider
      );

      try {
        const result = await contract.getGamesCreated(1);
        setGameName(result[1]);
        setGameAddress(result[2]);
        setBuyingTime(result[3]);
        setGamePrice(result[4]);
      } catch (error) {
        console.error("Erro ao ler dados do contrato:", error);
      }
    };

    const fetchRating = async () => {
      try {
        const provider = new ethers.providers.JsonRpcProvider(
          `https://eth-sepolia.g.alchemy.com/v2/${alchemyApiKey}`
        ); // Substitua pelo endereço correto do contrato TridentFunctions
        const contract = new ethers.Contract(
          functionsAddress,
          tridentFunctionsAbi,
          provider
        );

        const result = await contract.getScoreDailyHistory(gameName);

        if (result.length > 0) {
          const total = result.reduce(
            (acc, rating) => acc + rating.toNumber(),
            0
          );
          const averageRating = total / result.length;
          setGameRating(averageRating.toString());
        } else {
          setGameRating("N/A");
        }
      } catch (error) {
        console.error("Erro ao buscar o rating do jogo:", error);
      }
    };

    const formatPrice = (price) => {
      return price.toString().replace(/0+$/, "");
    };

    useEffect(() => {
      if (primaryWallet) {
        console.log("Endereço da carteira principal:", primaryWallet.address);
        }
    }, [primaryWallet]);

    return (
      <div className="dashboard">
        <h2>My Games</h2>
        <div className="game-list">
          {games.map((games) => (
            <MyGames
              key={games.id}
              title={games.title}
              image={games.image}
              category={games.category}
              subcategory={games.subcategory}
              rating={games.rating}
              downloads={games.downloads}
            />
          ))}
        </div>

        <div className="transaction-list">
          <h2>Transactions</h2>
          <table className="transaction-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Type</th>
                <th>Game</th>
                <th>Price</th>
                <th>Hash</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td>{transaction.date}</td>
                  <td>{transaction.type}</td>
                  <td>{transaction.gameTitle}</td>
                  <td>{transaction.price}</td>
                  <td className="hash-wrap">{maskHash(transaction.hash)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
}
export default Dashboard;


