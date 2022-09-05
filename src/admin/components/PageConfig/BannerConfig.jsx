import React, {Fragment} from 'react';
import commonStyles from "./PageConfig.module.scss";
import {Input, Switch} from "antd";
import produce from "immer";

const {TextArea} = Input;

const BannerConfig = (props) => {
    // BannerConfigのschemaの属性
    const {schema = {}, changeEditingAreaItemAttrs} = props
    const schemaAttrs = schema.attributes || {}
    const {title, desc, showAvatar, avatarUrl, bgUrl, bgHeight} = schemaAttrs

    return (
        <div className={commonStyles.wrapper}>
            <div className={commonStyles['attr-row']}>
                <span className={commonStyles.label}>ページタイトル</span>
                <Input value={title} className={commonStyles.content} placeholder="ページタイトルをご入力ください"
                       onChange={(e) => changeEditingAreaItemAttrs(
                           produce(schemaAttrs, draft => {
                               draft.title = e.target.value
                           })
                       )}/>
            </div>
            <div className={commonStyles['attr-row']}>
                <span className={commonStyles.label}>ページ記述</span>
                <TextArea value={desc} className={commonStyles.content} rows={2} placeholder="ページの記述をご入力ください"
                          onChange={(e) => changeEditingAreaItemAttrs(
                              produce(schemaAttrs, draft => {
                                  draft.desc = e.target.value
                              })
                          )}/>
            </div>
            <div className={commonStyles['attr-row']}>
                <span className={commonStyles.label}>画像の表示</span>
                <Switch checked={showAvatar}
                        onChange={(checked) => changeEditingAreaItemAttrs(
                            produce(schemaAttrs, draft => {
                                draft.showAvatar = checked
                            })
                        )}></Switch>
            </div>
            {
                showAvatar ? <div className={commonStyles['attr-row']}>
                    <span className={commonStyles.label}>画像のURL</span>
                    <Input value={avatarUrl} className={commonStyles.content} placeholder="画像のURLをご入力ください"
                           onChange={(e) => changeEditingAreaItemAttrs(
                               produce(schemaAttrs, draft => {
                                   draft.avatarUrl = e.target.value
                               })
                           )}/>
                </div> : <Fragment/>
            }

            <div className={commonStyles['attr-row']}>
                <span className={commonStyles.label}>背景画像のURL</span>
                <Input value={bgUrl} className={commonStyles.content} placeholder="バックグラウンド画像のURLをご入力ください"
                       onChange={(e) => changeEditingAreaItemAttrs({...schemaAttrs, bgUrl: e.target.value})}/>
            </div>
            <div className={commonStyles['attr-row']}>
                <span className={commonStyles.label}>背景の高さ</span>
                <Input value={bgHeight} className={commonStyles.content} placeholder="バックグラウンド画像のURLをご入力ください"
                       onChange={(e) => changeEditingAreaItemAttrs({...schemaAttrs, bgHeight: e.target.value})}/>
            </div>
        </div>)

}
export default BannerConfig
