import React from 'react'
import Banner from '../Banner/Banner'
import BlogList from '../BlogList/BlogList'

import Footer from '../Footer/Footer'
import {parseJsonByString} from '../../../common/utils';
import {DEFAULT_SCHEMA} from "../../../admin/store/constant";

// localstorageからschemaをロードする
const blogSchema = parseJsonByString(window.localStorage.blogSchema, DEFAULT_SCHEMA)
// ここで、blogAreaListを取得する
const blogAreaList = blogSchema?.children || []
// ページ内のコンポーネントをマッピングする
const componentMap = {Footer, Banner, BlogList};
// ページ内のコンポーネントをレンダリングする
const renderComponent = (index, item) => {
    const Component = componentMap[item.name];
    return Component ? <Component key={item.id} schema={item}/> : null;
}

export default function Home() {
    return (
        <div>{blogAreaList.map((item, index) => renderComponent(index, item))}</div>
    )
}
