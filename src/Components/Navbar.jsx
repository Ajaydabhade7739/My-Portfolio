import React, { useState } from 'react';
import { Layout, Menu, Drawer } from 'antd';
import { Link } from 'react-router-dom';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';

const { Header } = Layout;

const Navbar = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const showDrawer = () => setDrawerVisible(true);
  const closeDrawer = () => setDrawerVisible(false);

  return (
    <Header className="bg-gradient-to-r from-blue-200 to-purple-700 p-4 flex justify-between items-center shadow-md">
      {/* Logo */}
      <div className="text-white font-bold text-2xl cursor-pointer transition duration-300 transform hover:scale-105">
        My Portfolio
      </div>

      {/* Hamburger Icon (only visible on small screens) */}
      <div className="sm:hidden text-white cursor-pointer" onClick={showDrawer}>
        <MenuOutlined />
      </div>

      {/* Main Menu (Desktop) */}
      <Menu
        theme="light"
        mode="horizontal"
        className="bg-transparent flex gap-8 items-center hidden sm:flex"
      >
        <Menu.Item key="1" className="transition-transform duration-300 hover:scale-105">
          <Link
            to="/"
            className="text-white hover:text-yellow-300 transition-colors duration-300 text-lg font-medium"
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
        <Menu.Item key="4" className="transition-transform duration-300 hover:scale-105">
          <Link
            to="/contact"
            className="text-white hover:text-yellow-300 transition-colors duration-300 text-lg font-medium"
          >
            Contact-Me
          </Link>
        </Menu.Item>
      </Menu>

      {/* Drawer (Mobile) */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={closeDrawer}
        visible={drawerVisible}
        closeIcon={<CloseOutlined />}
        width={250}
      >
        <Menu mode="vertical" className="text-gray-800">
          <Menu.Item key="1" className="transition-transform duration-300 hover:scale-105">
            <Link
              to="/"
              className="text-black hover:text-yellow-300 transition-colors duration-300 text-lg font-medium"
            >
              Home
            </Link>
          </Menu.Item>
          <Menu.Item key="2" className="transition-transform duration-300 hover:scale-105">
            <Link
              to="/about"
              className="text-black hover:text-yellow-300 transition-colors duration-300 text-lg font-medium"
            >
              About
            </Link>
          </Menu.Item>
          <Menu.Item key="3" className="transition-transform duration-300 hover:scale-105">
            <Link
              to="/services"
              className="text-black hover:text-yellow-300 transition-colors duration-300 text-lg font-medium"
            >
              Services
            </Link>
          </Menu.Item>
          <Menu.Item key="4" className="transition-transform duration-300 hover:scale-105">
            <Link
              to="/contact"
              className="text-black hover:text-yellow-300 transition-colors duration-300 text-lg font-medium"
            >
              Contact-Me
            </Link>
          </Menu.Item>
        </Menu>
      </Drawer>
    </Header>
  );
};

export default Navbar;
