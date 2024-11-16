import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Header } = Layout;

const Navbar = () => {
  return (
    <Header className="bg-gradient-to-r from-blue-200 to-purple-700 p-4 flex justify-between items-center shadow-md">
      {/* Logo */}
      <div className="text-white font-bold text-2xl cursor-pointer transition duration-300 transform hover:scale-105">
        My Portfolio
      </div>

      {/* Main Menu */}
      <Menu
        theme="light"
        mode="horizontal"
        className="bg-transparent flex gap-8 items-center"
      >
        <Menu.Item key="1" className="transition-transform duration-300 hover:scale-105">
          <Link
            to="/"
            className="text-white  hover:text-yellow-300 
            transition-colors duration-300 text-lg font-medium"
          >
            Home
          </Link>
        </Menu.Item>
        <Menu.Item key="2" className="transition-transform duration-300 hover:scale-105">
          <Link
            to="/about"
            className="text-white hover:text-yellow-300 transition-colors duration-300 text-lg font-medium"
          >
            About
          </Link>
        </Menu.Item>
        <Menu.Item key="3" className="transition-transform duration-300 hover:scale-105">
          <Link
            to="/services"
            className="text-white hover:text-yellow-300 transition-colors duration-300 text-lg font-medium"
          >
            Services
          </Link>
        </Menu.Item>
        {/* Contact Menu Item */}
        <Menu.Item key="4" className="transition-transform duration-300 hover:scale-105">
          <Link
            to="/contact"
            className="text-white hover:text-yellow-300 transition-colors duration-300 text-lg font-medium"
          >
            Contact-Me
          </Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default Navbar;
