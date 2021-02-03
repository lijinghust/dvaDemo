export default {
  namespace: 'products',
  state: {
    list: [
      { name: 'dva', id: 1 },
      { name: 'antd', id: 2 }
    ]
  },
  reducers: {
    'delete'(state, { payload: id }) {
      debugger
      return {
        ...state,
        list: state.list.filter(item => item.id !== id)
      };
    },
  },
};
