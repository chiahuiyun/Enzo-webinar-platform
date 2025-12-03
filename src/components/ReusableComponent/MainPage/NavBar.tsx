import Spotlight from '@/icons/Spotlight'
import { navLinks } from '@/lib/data'

const NavBar = () => {
  return (
    <header className="sticky top-20 z-50 backdrop-blur-md">
      <nav className="flex items-center justify-between w-full h-10 px-8 gap-20">
        
        <Spotlight />

        <ul className="flex flex-row gap-20 items-center">
          {navLinks.map((item) => (
            <li key={item.title}>
              <a 
                href={`/#${item.link}`} 
                className="hover:text-gray-300 transition-colors"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>

      </nav>
    </header>
  )
}

export default NavBar
