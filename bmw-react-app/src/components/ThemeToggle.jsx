import PropTypes from 'prop-types'

const ThemeToggle = ({ isDarkMode, toggleTheme }) => {
  return (
    <button 
      className="theme-toggle" 
      onClick={toggleTheme}
      title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      aria-label="Toggle theme"
    >
      {isDarkMode ? '☀️' : '🌙'}
    </button>
  )
}

ThemeToggle.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  toggleTheme: PropTypes.func.isRequired
}

export default ThemeToggle
