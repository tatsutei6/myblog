import {Fragment, useEffect, useState} from "react"
import {useSelector, useDispatch} from 'react-redux';
import {Button, Modal, Select} from 'antd';
import styles from './BlogAreaItem.module.scss';
import {getChangeBlogAreaItemAction, getDeleteBlogAreaAction} from '../../store/action';
import BannerConfig from "../PageConfig/BannerConfig";
import FooterConfig from "../PageConfig/FooterConfig";
import BlogListConfig from "../PageConfig/BlogListConfig";
import {produce} from "immer";

const {Option} = Select;

const useStore = (index) => {
    const dispatch = useDispatch();
    const areaItem = useSelector((state) => state.adminHome.schema.children?.[index] || {})
    const changeAreaItem = (temp) => {
        dispatch(getChangeBlogAreaItemAction(index, temp))
    }
    const removeAreaItem = () => {
        dispatch(getDeleteBlogAreaAction(index));
    }
    return {areaItem, changeAreaItem, removeAreaItem};
}

const BlogAreaItem = (props) => {
    const {index} = props;
    // areaItem ReduxからロードしたareaItem
    const {areaItem, changeAreaItem, removeAreaItem} = useStore(index);

    //　編集モーダルの表示をコントロールする
    const [isModalVisible, setIsModalVisible] = useState(false)

    // ページで編集したareaItem
    const [editingAreaItem, setEditingAreaItem] = useState(areaItem)

    useEffect(() => {
        setEditingAreaItem(areaItem)
    }, [areaItem])

    const showModal = () => {
        setIsModalVisible(true);
    }

    // 編集したareaItemをReduxに保存する
    const handleModalOk = () => {
        changeAreaItem(editingAreaItem);
        setIsModalVisible(false)
    }

    // 編集したareaItemを破棄する
    const handleModalCancel = () => {
        setEditingAreaItem({...areaItem})
        setIsModalVisible(false)
    }
    // areaItemのtypeを変更する
    const handleSelectorChange = (value) => {
        setEditingAreaItem({...editingAreaItem, name: value});
    }

    // areaItemのプロパティを編集する
    const changeEditingAreaItemAttrs = (attributes) => {
        const newItem = produce(editingAreaItem, draft => {
            draft.attributes = attributes
        })
        setEditingAreaItem(newItem);
    }

    // areaItemの子Itemを編集する
    const changeEditingAreaItemChildren = (children) => {
        const newItem = produce(editingAreaItem, draft => {
            draft.children = children
        })
        setEditingAreaItem(newItem);
    }

    //　コンポーネントをマップイングする
    const componentMap = {FooterConfig, BannerConfig, BlogListConfig};

    const getConfigComponentKey = () => {
        return editingAreaItem.name + 'Config'
    }
    const renderConfigComponent = () => {
        const key = getConfigComponentKey()
        const ConfigComponent = componentMap[key]
        return ConfigComponent ?
            <ConfigComponent schema={editingAreaItem}
                             changeEditingAreaItemAttrs={changeEditingAreaItemAttrs}
                             changeEditingAreaItemChildren={changeEditingAreaItemChildren}
                             changeItemProperties={changeItemProperties}
                             deleteItemFromChildren={deleteItemFromChildren}/> : <Fragment/>
    }

    const changeItemProperties = (schemaChildren, e, index, prop) => {
        const item = schemaChildren[index]
        const newItem = produce(item, draft => {
            draft[prop] = e.target.value
        })
        const newSchemaChildren = produce(schemaChildren, draft => {
            draft[index] = newItem
        })
        changeEditingAreaItemChildren(newSchemaChildren)
    }

    const deleteItemFromChildren = (schemaChildren, index) => {
        const newSchemaChildren = produce(schemaChildren, draft => {
            draft.splice(index, 1)
        })
        changeEditingAreaItemChildren(newSchemaChildren)
    }

    return (
        <Fragment>
            <li key={editingAreaItem.id} className={styles.item}>
                <span className={styles.content} onClick={showModal}>{editingAreaItem.name || '空のコンポーネント'}</span>
                <span className={styles.delete}>
                    <Button onClick={removeAreaItem} size="small" type="dashed" danger>削除</Button>
                </span>
                <Modal title="コンポーネント種類" bodyStyle={{maxHeight: 500, overflowY: 'scroll'}} visible={isModalVisible} onOk={handleModalOk}
                       onCancel={handleModalCancel}>
                    <Select value={editingAreaItem.name} className={styles.selector} style={{width: '100%'}}
                            onChange={handleSelectorChange}>
                        <Option value='Banner'>Bannerコンポーネント</Option>
                        <Option value='BlogList'>BlogListコンポーネント</Option>
                        <Option value='Footer'>Footerコンポーネント</Option>
                    </Select>
                    {renderConfigComponent()}
                </Modal>
            </li>
        </Fragment>
    )

}

export default BlogAreaItem
