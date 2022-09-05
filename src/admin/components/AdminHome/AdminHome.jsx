import {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Layout, Menu, Button, message} from 'antd';
import BlogAreaList from '../BlogAreaList/BlogAreaList';
import styles from './AdminHome.module.scss';
import {parseJsonByString} from '../../../common/utils';
import {getChangeSchemaAction} from '../../store/action'
import {DEFAULT_SCHEMA} from "../../store/constant";

const {Header, Sider, Content} = Layout;


const AdminHome = () => {
  const [collapsed, setCollapsed] = useState(false)

  const toggleCollapsed = () => {
    setCollapsed(!collapsed)
  }

  // blogページへ戻る
  const handleBlogPageRedirect = () => {
    window.location.href = document.referrer
  }

  const dispatch = useDispatch()

  // ref对象与自建一个{current：‘’}对象的区别是：useRef会在每次渲染时返回同一个ref对象，
  // 即返回的ref对象在组件的整个生命周期内保持不变。自建对象每次渲染时都建立一个新的。
  const menuItems = [
    {
      key: 'admin-home',
      icon: <span className="iconfont">&#xe64d;</span>,
      label: 'ブログページ管理',
    },
    {
      key: 'blog-back',
      icon: <span className="iconfont">&#xe601;</span>,
      label: 'ブログページへ',
      onClick: handleBlogPageRedirect
    }
  ]

  // ReduxからロードしたblogSchema
  const blogSchema = useSelector((state) => {
    return state.adminHome.schema
  })

  // localstorageに保存する
  const handleSaveBtnClick = () => {
    try {
      window.localStorage.blogSchema = JSON.stringify(blogSchema)
      message.success('保存した')
    } catch (e) {
      message.error('エラーが発生した:' + e.toString())
    }
  }

  //　リセットする
  const handleResetBtnClick = () => {
    try {
      const preservedSchema = parseJsonByString(window.localStorage.blogSchema, DEFAULT_SCHEMA)
      dispatch(getChangeSchemaAction(preservedSchema))
      message.success('リセットした')
    } catch (e) {
      message.error('エラーが発生した:' + e.toString())
    }
  }

  return (
      <Layout>
        <Sider className={styles.sidebar} trigger={null} collapsible collapsed={collapsed}>
          <Menu items={menuItems} theme="dark" mode="inline" defaultSelectedKeys={['admin-home']}/>
        </Sider>
        <Layout>
          <Header className={styles.header}>
            {
              collapsed
                  ? <span className='iconfont' onClick={toggleCollapsed}>&#xe62c;</span>
                  : <span className='iconfont' onClick={toggleCollapsed}>&#xe629;</span>
            }
          </Header>
          <Content className={styles.content}>
            <BlogAreaList/>
            <div className={styles.btn}>
              <Button type="primary" onClick={handleSaveBtnClick}>保存</Button>
              <Button className={styles.reset} type="primary" danger onClick={handleResetBtnClick}>リセット</Button>
            </div>
          </Content>
        </Layout>
      </Layout>
  );
}

export default AdminHome;
