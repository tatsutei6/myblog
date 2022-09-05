import {
  CHANGE_SCHEMA,
  ADD_BLOG_AREA_ITEM,
  CHANGE_BLOG_AREA_ITEM,
  DELETE_BLOG_AREA_ITEM,
  CHANGE_BLOG_AREA_LIST
} from './constant';

// schemaを変更する
export const getChangeSchemaAction = (schema) => {
  return {
    type: CHANGE_SCHEMA,
    value: schema
  }
}

// blogAreaを取得する
export const getAddBlogAreaAction = (areaItem) => {
  return {
    type: ADD_BLOG_AREA_ITEM,
    value: areaItem
  }
}
// blogItemを変更するメゾット
export const getChangeBlogAreaItemAction = (index, value) => {
  return { type: CHANGE_BLOG_AREA_ITEM, index, value };
}

// blogAreaを変更するメゾット
export const getChangeBlogAreaListAction = (value) => {
  return { type: CHANGE_BLOG_AREA_LIST, value };
}
// blogItemを削除するメゾット
export const getDeleteBlogAreaAction = (index) => {
  return { type: DELETE_BLOG_AREA_ITEM, index };
}
