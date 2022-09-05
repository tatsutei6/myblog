import React from 'react';
import {Input, Button} from "antd";
import {v4 as uuidv4} from 'uuid';
import produce from "immer"

import commonStyles from "./PageConfig.module.scss";

const {TextArea} = Input;

const BlogListConfig = (props) => {
    const {schema, changeEditingAreaItemChildren, changeItemProperties, deleteItemFromChildren} = props
    const schemaChildren = schema?.children || []
    // ブログを増加する
    const addBlogToChildren = () => {
        const newSchemaChildren = produce(schemaChildren, draft => {
            draft.push({id: uuidv4(), title: '', desc: '', imgUrl: '', link: ''})
        })
        changeEditingAreaItemChildren(newSchemaChildren)
    }

    return (
        <div className={commonStyles.wrapper}>
            <Button type={"primary"} className={commonStyles.button} onClick={addBlogToChildren}>ブログの増加</Button>
            {
                schemaChildren.map((schemaItem, index) => (
                        <div className={commonStyles.area} key={schemaItem.id}>
                            <div className={commonStyles.delete} onClick={() => deleteItemFromChildren(schemaChildren, index)}>X</div>
                            <h3>No.{index + 1}</h3>
                            <div className={commonStyles['attr-row']}>
                                <span className={commonStyles.label}>タイトル</span>
                                <Input value={schemaItem.title} className={commonStyles.content} placeholder="タイトルをご入力ください"
                                       onChange={(e) => {
                                           changeItemProperties(schemaChildren, e, index, 'title')
                                       }}/>
                            </div>
                            <div className={commonStyles['attr-row']}>
                                <span className={commonStyles.label}>記述</span>
                                <TextArea value={schemaItem.desc} className={commonStyles.content} placeholder="記述をご入力ください"
                                          onChange={(e) => {
                                              changeItemProperties(schemaChildren, e, index, 'desc')
                                          }}/>
                            </div>
                            <div className={commonStyles['attr-row']}>
                                <span className={commonStyles.label}>画像</span>
                                <Input value={schemaItem.imgUrl} className={commonStyles.content} placeholder="画像のURLをご入力ください"
                                       onChange={(e) => {
                                           changeItemProperties(schemaChildren, e, index, 'imgUrl')
                                       }}/>
                            </div>
                            <div className={commonStyles['attr-row']}>
                                <span className={commonStyles.label}>リンク</span>
                                <Input value={schemaItem.link} className={commonStyles.content} placeholder="リンクをご入力ください"
                                       onChange={(e) => {
                                           changeItemProperties(schemaChildren, e, index, 'link')
                                       }}/>
                            </div>
                        </div>
                    )
                )
            }
        </div>);
}
export default BlogListConfig;
