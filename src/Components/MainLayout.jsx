import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { UserOutlined, LaptopOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import EducationalDetails from './EducationalDetails';
import Skills from './Skills';
import AcademicProjects from './AcademicProjects';
import ProjectOption4 from './ProjectOption4';
import AnimatedSkills from './AnimatedSkills';

const { Sider, Content } = Layout;
const { SubMenu } = Menu;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  // Toggle the sidebar collapse state on small screens
  const handleCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

  return (
    <Layout className="v-screen overflow-auto">
      {/* Sidebar */}
      <Sider
        width={200}
        className="bg-gray-100 border-r-2 border-gray-200 shadow-md sm:w-40 md:w-40 lg:w-80 xl:w-80"
        collapsible
        collapsed={collapsed}
        onCollapse={handleCollapse}
        breakpoint="md"  // Automatically collapse on medium (md) screens or smaller
      >
        <Menu mode="inline" style={{ height: '100%' }} className="text-gray-800">
          <SubMenu key="sub1" title={<span className="flex items-center gap-2"><UserOutlined /> Profile</span>}>
            <Menu.Item key="1" className="hover:bg-blue-50 transition-colors">
              <Link to="/educational-details">Educational Details</Link>
            </Menu.Item>
            <Menu.Item key="2" className="hover:bg-blue-50 transition-colors">
              <Link to="/skills">Skills</Link>
            </Menu.Item>
            <Menu.Item key="3" className="hover:bg-blue-50 transition-colors">
              <Link to="/skills-animated" className="text-white">Animated Skills</Link>
            </Menu.Item>
            <Menu.Item key="4" className="hover:bg-blue-50 transition-colors">
              <Link to="/academic-projects">Academic Projects</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title={<span className="flex items-center gap-2"><LaptopOutlined /> Certificates</span>}>
            <Menu.Item key="5" className="hover:bg-blue-50 transition-colors">
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
            <Route path="skills-animated" element={<AnimatedSkills />} />
            <Route path="/academic-projects" element={<AcademicProjects />} />
            <Route path="/projects/option4" element={<ProjectOption4 />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
