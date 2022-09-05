import {produce} from 'immer'
import {
  DEFAULT_SCHEMA,
  CHANGE_SCHEMA,
  ADD_BLOG_AREA_ITEM,
  CHANGE_BLOG_AREA_ITEM,
  DELETE_BLOG_AREA_ITEM, CHANGE_BLOG_AREA_LIST
} from './constant'
import {parseJsonByString} from '../../common/utils';

// localStorageから初期schemaを取得する
const initBlogSchema = parseJsonByString(window.localStorage.blogSchema, DEFAULT_SCHEMA)
// Schema初期データ
const defaultState = {
  schema: initBlogSchema
}
// Reducer
const reducer = (state = defaultState, action) => produce(state, (draft) => {
  switch (action.type) {
    case CHANGE_SCHEMA:
      draft.schema = action.value
      break
    case ADD_BLOG_AREA_ITEM:
      draft.schema.children.push(action.value)
      break
    case CHANGE_BLOG_AREA_ITEM:
      draft.schema.children.splice(action.index, 1, action.value)
      break
    case DELETE_BLOG_AREA_ITEM:
      draft.schema.children.splice(action.index, 1)
      break
    case CHANGE_BLOG_AREA_LIST:
      draft.schema.children = action.value
      break
    default:
      break
  }
})

export default reducer;
