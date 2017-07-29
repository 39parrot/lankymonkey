import React, { Component } from 'react';
import Button from 'antd/lib/button';
import '../App.css';
import Block from 'react-blocks';
import { Layout, Menu } from 'antd';
const { Header, Content, Footer } = Layout;

console.log(Layout);

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
              <Block className="avatar">Avatar</Block>
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
