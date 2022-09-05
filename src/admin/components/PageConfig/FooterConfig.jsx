import React, {Fragment} from 'react';
import commonStyles from "./PageConfig.module.scss";
import {Button, Input} from "antd";
import produce from "immer";
import {v4 as uuidv4} from "uuid";

const FooterConfig = (props) => {
    const {schema, changeEditingAreaItemAttrs, changeEditingAreaItemChildren, changeItemProperties, deleteItemFromChildren} = props
    const schemaAttrs = schema?.attributes || {}
    const {copyright} = schemaAttrs
    const schemaChildren = schema?.children || []

    // フッターのLinkを増加する
    const addLinkToChildren = () => {
        const newSchemaChildren = produce(schemaChildren, draft => {
            draft.push({id: uuidv4(), title: '', link: ''})
        })
        changeEditingAreaItemChildren(newSchemaChildren)
    }

    return (
        <div className={commonStyles.wrapper}>
            <div className={commonStyles['attr-row']}>
                <span className={commonStyles.label}>Copyright</span>
                <Input value={copyright} className={commonStyles.content} placeholder="Copyrightをご入力ください"
                       onChange={(e) => changeEditingAreaItemAttrs(
                           produce(schemaAttrs, draft => {
                               draft.copyright = e.target.value
                           })
                       )}/>
            </div>
            <Button type={"primary"} className={commonStyles.button} onClick={addLinkToChildren}>Linkの増加</Button>
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
                                <span className={commonStyles.label}>Link</span>
                                <Input value={schemaItem.link} className={commonStyles.content} placeholder="Linkをご入力ください"
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
export default FooterConfig;
