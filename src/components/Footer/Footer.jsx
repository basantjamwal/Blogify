import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="mt-auto bg-black border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col items-center space-y-6">

        <ul className="flex flex-wrap justify-center space-x-6 text-sm text-gray-400">
          <li><Link to="/" className="hover:text-white">About</Link></li>
          <li><Link to="/" className="hover:text-white">Help</Link></li>
          <li><Link to="/" className="hover:text-white">Press</Link></li>
          <li><Link to="/" className="hover:text-white">API</Link></li>
          <li><Link to="/" className="hover:text-white">Jobs</Link></li>
          <li><Link to="/" className="hover:text-white">Privacy</Link></li>
          <li><Link to="/" className="hover:text-white">Terms</Link></li>
        </ul>


        <div className="border-t border-gray-700 w-full"></div>

        <p className="text-xs text-gray-500">© 2026 Blogify. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
