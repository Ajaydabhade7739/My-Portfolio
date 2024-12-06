import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { UserOutlined, LaptopOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import EducationalDetails from './EducationalDetails';
import Skills from './Skills';
import AcademicProjects from './AcademicProjects';
import ProjectOption4 from './ProjectOption4';
import AnimatedSkills from './AnimatedSkills';
import { CSSTransition } from 'react-transition-group';

const { Sider, Content } = Layout;
const { SubMenu } = Menu;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  // Toggle the sidebar collapse state on small screens
  const handleCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

  return (
    <Layout className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sider
        width={200}
        className="bg-gray-800 text-white shadow-md sm:w-48 md:w-60 lg:w-80 transition-all ease-in-out"
        collapsible
        collapsed={collapsed}
        onCollapse={handleCollapse}
        breakpoint="md" // Automatically collapse on medium (md) screens or smaller
        trigger={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      >
        <Menu
          mode="inline"
          className="text-gray-200"
          defaultSelectedKeys={['1']}
        >
          <SubMenu
            key="sub1"
            title={
              <span className="flex items-center gap-2">
                <UserOutlined />
                <CSSTransition in={!collapsed} timeout={300} classNames="fade" unmountOnExit>
                  <span className="hidden sm:inline">Profile</span>
                </CSSTransition>
              </span>
            }
          >
            <Menu.Item
              key="1"
              className="hover:bg-teal-500 transition-colors rounded-md"
              
            >
              <Link to="/educational-details">Educational Details</Link>
            </Menu.Item>
            <Menu.Item
              key="2"
              className="hover:bg-teal-500 transition-colors rounded-md"
            >
              <Link to="/skills">Skills</Link>
            </Menu.Item>
            <Menu.Item
              key="3"
              className="hover:bg-teal-500 transition-colors rounded-md"
            >
              <Link to="/skills-animated">Animated Skills</Link>
            </Menu.Item>
            <Menu.Item
              key="4"
              className="hover:bg-teal-500 transition-colors rounded-md"
            >
              <Link to="/academic-projects">Academic Projects</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span className="flex items-center gap-2">
                <LaptopOutlined />
                <CSSTransition in={!collapsed} timeout={300} classNames="fade" unmountOnExit>
                  <span className="hidden sm:inline">Certificates</span>
                </CSSTransition>
              </span>
            }
          >
            <Menu.Item
              key="5"
              className="hover:bg-teal-500 transition-colors rounded-md"
            >
              <Link to="/projects/option4">JAVA</Link>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>

      {/* Main Content Layout */}
      <Layout className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
        <Content className="bg-white p-6 sm:p-8 md:p-10 lg:p-12 rounded-lg shadow-lg w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/educational-details" element={<EducationalDetails />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/skills-animated" element={<AnimatedSkills />} />
            <Route path="/academic-projects" element={<AcademicProjects />} />
            <Route path="/projects/option4" element={<ProjectOption4 />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
