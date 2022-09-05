import {useDispatch, useSelector} from 'react-redux';
import {ReactSortable} from "react-sortablejs";

import {v4 as uuidv4} from 'uuid';

import {Button} from 'antd';

import styles from './BlogAreaList.module.scss';
import BlogAreaItem from '../BlogAreaItem/BlogAreaItem'
import {getAddBlogAreaAction, getChangeBlogAreaListAction} from '../../store/action'

const BlogAreaList = () => {
  // ブログページのエリアリスト
  // props发生变化，会造成组件重新渲染，但是 let {name,setName} = useState(props.name)这类语句并不会再次执行
  // ReduxからロードしたblogSchema
  const areaList = useSelector((state) => {
    return state.adminHome.schema.children.map(item => ({...item}))
  })
  // Reduxのdispatch
  const dispatch = useDispatch()

  // 「エリアの増加」ボタンの処理
  const addItemToAreaList = () => {
    dispatch(getAddBlogAreaAction({id: uuidv4(), name: '', attributes: [], children: []}))
  }

  // ブログページのエリアリストをReduxに保存する
  const setAreaList = (data, index) => {
    dispatch(getChangeBlogAreaListAction(data))
  }

  // useImperativeHandle的作用:
  // 减少父组件获取的DOM元素属性,只暴露给父组件需要用到的DOM方法
  // 参数1: 父组件传递的ref属性
  // 参数2: 返回一个对象,父组件通过ref.current调用对象中方法
  return (
      <div>
        <ul className={styles.list}>
          <ReactSortable list={areaList} setList={setAreaList}>
            {
              areaList.map((item, index) => (
                  <BlogAreaItem key={item.id} index={index}></BlogAreaItem>
              ))
            }
          </ReactSortable>
        </ul>
        <Button type="primary" ghost onClick={addItemToAreaList}>エリアの増加</Button>
      </div>
  );
}

export default BlogAreaList
