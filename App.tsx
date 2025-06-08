import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Header } from './components/Header';
import { CategoryFilter } from './components/CategoryFilter';
import { GameGrid } from './components/GameGrid';
import { GameModal } from './components/GameModal';
import { StatsPanel } from './components/StatsPanel';
import { useGames } from './hooks/useGames';
import { useGameStats } from './hooks/useGameStats';
import { Game } from './types/Game';
import { games } from './data/games';

function App() {
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const {
    games: filteredGames,
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory
  } = useGames();

  const {
    stats,
    incrementPlayCount,
    toggleFavorite,
    isFavorite
  } = useGameStats();

  const handlePlayGame = (game: Game) => {
    setSelectedGame(game);
    setIsModalOpen(true);
    incrementPlayCount(game.id);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedGame(null);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <Header
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        onMenuToggle={handleMenuToggle}
        isMenuOpen={isMenuOpen}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            Welcome to{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              GameHub
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover and play amazing browser games. From action-packed adventures to mind-bending puzzles,
            we have something for every gamer.
          </p>
        </motion.section>

        {/* Stats Panel */}
        <StatsPanel
          totalGames={games.length}
          playCount={stats.playCount}
          favoriteCount={stats.favorites.length}
          recentlyPlayedCount={stats.recentlyPlayed.length}
        />

        {/* Category Filter */}
        <CategoryFilter
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        {/* Games Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 shadow-xl"
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-800">
              {selectedCategory === 'all' ? 'All Games' : `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Games`}
            </h2>
            <span className="text-gray-600 font-medium">
              {filteredGames.length} game{filteredGames.length !== 1 ? 's' : ''} found
            </span>
          </div>

          <GameGrid
            games={filteredGames}
            onPlayGame={handlePlayGame}
            onToggleFavorite={toggleFavorite}
            isFavorite={isFavorite}
          />
        </motion.section>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center py-12 mt-16"
        >
          <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to Play?</h3>
            <p className="text-gray-600 mb-6">
              Join thousands of players enjoying our collection of free browser games.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('games')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Start Playing Now
            </motion.button>
          </div>
        </motion.footer>
      </main>

      {/* Game Modal */}
      <GameModal
        game={selectedGame}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}

export default App;