import React, { Component } from 'react';
import Button from 'antd/lib/button';
import '../App.css';
import Block from 'react-blocks';
import { Layout, Menu, Dropdown } from 'antd';
import Auth0Lock from 'auth0-lock';
const { Header, Content, Footer } = Layout;

const cid = "FOomB3aVhSCLMjnJqcJ8exYuAZmNp6Kc";
const domain = "yome.eu.auth0.com";

const lock = new Auth0Lock(cid, domain);
// Listening for the authenticated event
lock.on("authenticated", function(authResult) {
  // Use the token in authResult to getUserInfo() and save it to localStorage
  lock.getUserInfo(authResult.accessToken, function(error, profile) {
    if (error) {
      // Handle error
      return;
    }

    localStorage.setItem('accessToken', authResult.accessToken);
    localStorage.setItem('profile', JSON.stringify(profile));
  });
});

const accessToken = localStorage.getItem("accessToken");
const profile = JSON.parse(localStorage.getItem("profile"));

const logout = () => {
  console.log('logout');
  localStorage.removeItem("accessToken");
  localStorage.removeItem("profile");
};

const menu = (
  <Menu onClick={logout}>
    <Menu.Item key="0">
      <a href="http://www.alipay.com/">1st menu item</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="http://www.taobao.com/">2nd menu item</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">Logout</Menu.Item>
  </Menu>
);

class AppLayout extends Component {
  render() {
    return (
      <Layout className="layout" style={{ height: '100vh' }}>
        <Header>
          <Block layout>
            <Block className="logo">Brand</Block>
            <Block>
              <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                style={{ lineHeight: '64px' }}
              >
                <Menu.Item key="1">nav 1</Menu.Item>
                <Menu.Item key="2">nav 2</Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item>
              </Menu>
            </Block>
            <Block layout flex justifyEnd>
              <Block layout horizontal centered>
                {accessToken
                  ? <Dropdown overlay={menu} trigger={['click']}>
                      <a href="#">
                        <img src={profile.picture} style={{ width: 40, height: 40, borderRadius: 20 }}></img>
                      </a>
                    </Dropdown>
                  : <a href="#" onClick={() => lock.show()}>Login</a>}
              </Block>
            </Block>
          </Block>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <div style={{ background: '#fff', padding: 24, height: '100%' }}>Content</div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Lanky Monkey, 2017
        </Footer>
      </Layout>
    );
  }
}

export default AppLayout;
