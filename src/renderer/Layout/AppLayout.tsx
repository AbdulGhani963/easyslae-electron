import React, { ReactNode } from 'react';

import {
  HomeOutlined,
  ShoppingCartOutlined,
  SettingOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { Link, useMatch } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;

interface LayoutProps {
  children: ReactNode;
}

const App: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Layout>
        <Layout>
          <Header
            style={{
              padding: 0,
              background: '#808080',
              height: 50,
              lineHeight: 'initial',
              display: 'flex',
            }}
          >
            <div className="md:pt-4 md:pl-20 pt-2 max-w-96 text-white font-comfortaa font-bold">
              <span className='text-[16px]'>Easy Sale | </span> 
              <span className='text-[13px]'> OpticHut </span>
            </div>
          </Header>
        </Layout>
        <Layout>
          <Sider
            width={230}
            style={{
              overflow: 'auto',
              height: '100vh',
              position: 'sticky',
              width: '',
              left: 0,
              top: 0,
              bottom: 0,
              backgroundColor: '#dbdbdb',
            }}
          >
            <div className="demo-logo-vertical" />
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              style={{ backgroundColor: '#dbdbdb', marginTop: 10, }}
            >
              <Menu.Item
                className={`min-w-[230px] !rounded-none !m-0 border-[#808080] !text-[#808080] 
                  !bg-[#dbdbdb] font-comfortaa font-bold !pl-4 ${
                  useMatch('/') ? '!bg-white !border-l-[7px]' : ''
                }`}
              >
                <Link
                  to="/"
                  className="flex gap-1 items-center"
                >
                  <HomeOutlined style={{ fontSize: 18}} />
                  <span className='text-[16px] mt-[5px]'>Home</span>
                </Link>
              </Menu.Item>
              <Menu.Item
                className={`min-w-[230px] !rounded-none !m-0 border-[#808080] !text-[#808080] 
                  !bg-[#dbdbdb] font-comfortaa font-bold !pl-4 ${
                  useMatch('/sale') ? '!bg-white !border-l-[7px]' : ''
                }`}
              >
                <Link
                  to="/sale"
                  className="flex gap-1 items-center"
                >
                  <ShoppingCartOutlined style={{ fontSize: 18 }} />
                  <span className='text-[16px] mt-[5px]'>Sale</span>
                </Link>
              </Menu.Item>
              <Menu.Item
                className={`min-w-[230px] !rounded-none !m-0 border-[#808080] 
                  !text-[#808080] !bg-[#dbdbdb] font-comfortaa font-bold !pl-4 ${
                  useMatch('/service') ? '!bg-white !border-l-[7px]' : ''
                }`}
              >
                <Link
                  to="/service"
                  className="flex gap-1 items-center"
                >
                  <SettingOutlined style={{ fontSize: 18 }} />
                  <span className='text-[16px] mt-[5px]'>Service</span>
                </Link>
              </Menu.Item>
              <Menu.Item
                className={`min-w-[230px] !rounded-none !m-0 border-[#808080] !text-[#808080] 
                  !bg-[#dbdbdb] font-comfortaa font-bold !pl-4 ${
                  useMatch('/customers') ? '!bg-white !border-l-[7px]' : ''
                }`}
              >
                <Link
                  to="/customers"
                  className="flex gap-1 items-center"
                >
                  <UserOutlined style={{ fontSize: 18 }} />
                  <span className='text-[16px] mt-[5px]'>Customers</span>
                </Link>
              </Menu.Item>
              <Menu.Item
                className={`min-w-[230px] !rounded-none !m-0 border-[#808080] !text-[#808080] 
                  !bg-[#dbdbdb] font-comfortaa font-bold !pl-4 ${
                  useMatch('/products') ? '!bg-white !border-l-[7px]' : ''
                }`}
              >
                <Link
                  to="/products"
                  className="flex gap-1 items-center"
                >
                  <UserOutlined style={{ fontSize: 18 }} />
                  <span className='text-[16px] mt-[5px]'>Products</span>
                </Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout style={{ backgroundColor: 'white' }}>
            <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
              {children}
            </Content>
          </Layout>
        </Layout>
        <Footer
          style={{
            textAlign: 'center',
            backgroundColor: '#d1d1d1',
            height: 50,
          }}
        >
          {/* Ant Design ©{new Date().getFullYear()} Created by Ant UED */}
        </Footer>
      </Layout>
    </>
  );
};

export default App;
