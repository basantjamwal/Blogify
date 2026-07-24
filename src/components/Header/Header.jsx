import React from 'react'
import Container from '../container/Container'
import Logo from '../Logo'
import LogoutBtn from './LogoutBtn'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    { name: 'Home', slug: "/", active: true },
    { name: 'Login', slug: "/login", active: !authStatus },
    { name: 'Signup', slug: "/signup", active: !authStatus },
    { name: 'All Posts', slug: "/all-posts", active: authStatus },
    { name: 'Add Post', slug: "/add-post", active: authStatus }
  ]

  return (
    <header className="py-3 bg-black shadow-md">
      <Container>
        <nav className="flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <Logo width="50px" />
            <span className="ml-2 text-white font-bold text-lg">Blogify</span>
          </Link>

          {/* Navigation */}
          <ul className="flex items-center space-x-6 text-white font-medium">
            {navItems.map(
              (item) =>
                item.active && (
                  <li key={item.name}>
                    <button
                      onClick={() => navigate(item.slug)}
                      className={`px-4 py-2 rounded-full font-medium transition-all duration-200
                          ${location.pathname === item.slug
                          ? 'bg-white text-black shadow-md'
                          : 'text-white hover:bg-gray-700 hover:text-gray-200'}`}
                    >
                      {item.name}
                    </button>
                  </li>

                )
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header
