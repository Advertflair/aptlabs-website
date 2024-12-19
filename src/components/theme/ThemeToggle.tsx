import { useTheme } from './ThemeProvider'
import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-light-bg-secondary dark:bg-dark-bg-secondary 
                 text-light-text-primary dark:text-dark-text-primary
                 hover:bg-gray-200 dark:hover:bg-gray-700 
                 transition-colors duration-200"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <Moon className="w-5 h-5" />
      ) : (
        <Sun className="w-5 h-5" />
      )}
    </button>
  )
}