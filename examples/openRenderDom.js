/* eslint-disable no-console,react/no-multi-comp */
import Drawer from 'rc-drawer';
import React from 'react';
import ReactDom from 'react-dom';
import { Menu, Icon, Button } from 'antd';

import 'antd/lib/style';
import 'antd/lib/menu/style';
import 'antd/lib/button/style';

import 'rc-drawer/assets/index.less';
import './assets/index.less';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Demo extends React.Component {
  state = {
    open: false,
  }
  onClick = () => {
    this.setState({
      open: !this.state.open,
    });
  }
  render() {
    return (
      <div >
        <Drawer handleChild={false} open={this.state.open} onMaskClick={this.onClick}>
          <Menu
            style={{ width: 240, height: '200%' }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
          >
            <SubMenu
              key="sub1"
              title={<span><Icon type="mail" /><span>Navigation One</span></span>}
            >
              <MenuItemGroup key="g1" title="Item 1">
                <Menu.Item key="1">Option 1</Menu.Item>
                <Menu.Item key="2">Option 2</Menu.Item>
              </MenuItemGroup>
              <MenuItemGroup key="g2" title="Item 2">
                <Menu.Item key="3">Option 3</Menu.Item>
                <Menu.Item key="4">Option 4</Menu.Item>
              </MenuItemGroup>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}
            >
              <Menu.Item key="5">Option 5</Menu.Item>
              <Menu.Item key="6">Option 6</Menu.Item>
              <SubMenu key="sub3" title="Submenu">
                <Menu.Item key="7">Option 7</Menu.Item>
                <Menu.Item key="8">Option 8</Menu.Item>
              </SubMenu>
            </SubMenu>
            <SubMenu
              key="sub4"
              title={<span><Icon type="setting" /><span>Navigation Three</span></span>}
            >
              <Menu.Item key="9">Option 9</Menu.Item>
              <Menu.Item key="10">Option 10</Menu.Item>
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </Menu>
        </Drawer>
        <div
          style={{
            width: '100%', height: 667, background: '#fff000',
            color: '#fff', textAlign: 'center', lineHeight: '667px',
          }}
        >
          <Button onClick={this.onClick}>开关</Button>
        </div>
      </div>
    );
  }
}

ReactDom.render((<Demo />), document.getElementById('__react-content'));