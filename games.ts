import { Game } from '../types/Game';

export const games: Game[] = [
  {
    id: 1,
    title: "Apocalypse Truck",
    description: "Drive through the apocalypse in this intense survival truck game!",
    category: "action",
    rating: 4.8,
    plays: "3.5M",
    icon: "🚛",
    url: "https://cloud.onlinegames.io/games/2021/1/apocalypse-truck/index-og.html"
  },
  {
    id: 2,
    title: "Space Shooter",
    description: "Defend Earth from alien invaders in this thrilling space adventure!",
    category: "action",
    rating: 4.5,
    plays: "2.3M",
    icon: "🚀"
  },
  {
    id: 3,
    title: "Block Puzzle",
    description: "Challenge your mind with this addictive block-matching puzzle game.",
    category: "puzzle",
    rating: 4.7,
    plays: "1.8M",
    icon: "🧩"
  },
  {
    id: 4,
    title: "Speed Racer",
    description: "Race through challenging tracks and become the ultimate champion!",
    category: "racing",
    rating: 4.3,
    plays: "3.1M",
    icon: "🏎️"
  },
  {
    id: 5,
    title: "Chess Master",
    description: "Test your strategic skills against AI opponents of varying difficulty.",
    category: "strategy",
    rating: 4.6,
    plays: "892K",
    icon: "♟️"
  },
  {
    id: 6,
    title: "Pac Adventure",
    description: "Navigate mazes and collect dots while avoiding colorful ghosts!",
    category: "arcade",
    rating: 4.8,
    plays: "4.2M",
    icon: "👻"
  },
  {
    id: 7,
    title: "Ninja Warrior",
    description: "Master the art of stealth and combat in this action-packed adventure.",
    category: "action",
    rating: 4.4,
    plays: "1.7M",
    icon: "🥷"
  },
  {
    id: 8,
    title: "Word Quest",
    description: "Expand your vocabulary and solve challenging word puzzles.",
    category: "puzzle",
    rating: 4.5,
    plays: "1.2M",
    icon: "📝"
  },
  {
    id: 9,
    title: "Drift King",
    description: "Master the art of drifting on challenging mountain roads.",
    category: "racing",
    rating: 4.2,
    plays: "2.5M",
    icon: "🏁"
  },
  {
    id: 10,
    title: "Tower Defense",
    description: "Build towers and defend your base from waves of enemies.",
    category: "strategy",
    rating: 4.7,
    plays: "1.9M",
    icon: "🏰"
  },
  {
    id: 11,
    title: "Bubble Pop",
    description: "Match colorful bubbles and clear the board in this relaxing game.",
    category: "arcade",
    rating: 4.3,
    plays: "3.8M",
    icon: "🫧"
  },
  {
    id: 12,
    title: "Zombie Survival",
    description: "Survive the zombie apocalypse with limited resources and weapons.",
    category: "action",
    rating: 4.6,
    plays: "2.1M",
    icon: "🧟"
  },
  {
    id: 13,
    title: "Sudoku Pro",
    description: "Solve number puzzles with multiple difficulty levels and hints.",
    category: "puzzle",
    rating: 4.8,
    plays: "967K",
    icon: "🔢"
  },
  {
    id: 14,
    title: "Cyber Runner",
    description: "Navigate through neon-lit cyberpunk cities in this endless runner.",
    category: "action",
    rating: 4.7,
    plays: "2.8M",
    icon: "🏃"
  },
  {
    id: 15,
    title: "Memory Master",
    description: "Test and improve your memory with increasingly challenging patterns.",
    category: "puzzle",
    rating: 4.4,
    plays: "1.5M",
    icon: "🧠"
  },
  {
    id: 16,
    title: "Formula Rush",
    description: "Experience high-speed Formula 1 racing with realistic physics.",
    category: "racing",
    rating: 4.6,
    plays: "3.7M",
    icon: "🏆"
  },
  {
    id: 17,
    title: "Empire Builder",
    description: "Build and manage your civilization from ancient times to the future.",
    category: "strategy",
    rating: 4.8,
    plays: "1.3M",
    icon: "🏛️"
  },
  {
    id: 18,
    title: "Retro Pinball",
    description: "Classic pinball action with modern physics and stunning visuals.",
    category: "arcade",
    rating: 4.5,
    plays: "2.1M",
    icon: "🎯"
  }
];

export const categories = [
  { id: 'all', name: 'All Games', icon: '🎮' },
  { id: 'action', name: 'Action', icon: '⚔️' },
  { id: 'puzzle', name: 'Puzzle', icon: '🧩' },
  { id: 'racing', name: 'Racing', icon: '🏎️' },
  { id: 'strategy', name: 'Strategy', icon: '🎯' },
  { id: 'arcade', name: 'Arcade', icon: '🕹️' }
];