import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';

const Navbar = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const location = useLocation();

  const showDrawer = () => setDrawerVisible(true);
  const closeDrawer = () => setDrawerVisible(false);

  const menuItems = [
    { key: '/', label: 'Home' },
    { key: '/about', label: 'About' },
    { key: '/services', label: 'Services' },
    { key: '/contact', label: 'Contact-Me' },
  ];

  return (
    <header className="bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="text-white font-bold text-2xl cursor-pointer transition-transform duration-300 hover:scale-110">
          My Portfolio
        </div>

        {/* Hamburger Icon (only visible on small screens) */}
        <div className="sm:hidden text-white text-2xl cursor-pointer" onClick={showDrawer}>
          <MenuOutlined />
        </div>

        {/* Main Menu (Desktop) */}
        <nav className="hidden sm:flex space-x-6">
          {menuItems.map((item) => (
            <Link
              key={item.key}
              to={item.key}
              className={`${
                location.pathname === item.key
                  ? 'bg-white text-indigo-700'
                  : 'text-white hover:text-yellow-300'
              } px-4 py-2 rounded-lg text-lg font-medium transition-transform duration-300 hover:scale-105`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Drawer (Mobile) */}
      {drawerVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={closeDrawer}>
          <div
            className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg transform transition-transform duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between p-4 border-b shadow-md">
              <h2 className="text-indigo-600 text-xl font-bold">Menu</h2>
              <button onClick={closeDrawer}>
                <CloseOutlined className="text-indigo-600 text-2xl" />
              </button>
            </div>

            {/* Drawer Menu Items */}
            <nav className="flex flex-col p-4 space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.key}
                  to={item.key}
                  className={`${
                    location.pathname === item.key
                      ? 'bg-indigo-200 text-indigo-700'
                      : 'text-gray-700 hover:text-indigo-500'
                  } block px-4 py-2 rounded-lg text-lg font-medium transition-transform duration-300 hover:scale-105`}
                  onClick={closeDrawer}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
