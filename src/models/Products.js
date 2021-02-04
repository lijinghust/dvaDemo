export default {
  namespace: 'products',
  state: {
    list: [
      { name: 'dva', id: 1 },
      { name: 'antd', id: 2 }
    ]
  },
  effects:{
    *del({payload}, {call, put}){
      yield put({
        type: 'delete',
        payload
      })
    }
  },
  subscriptions: {
    setupxxx({ dispatch, history }) {
      console.log('into setupxxx')
      // history.listen执行后返回unlisten函数
      return history.listen(({ pathname, query }) => {
        console.log('history')
      });
    },
    i_am_just_a_name({dispatch}){
      console.log('into i_am_just_a_name')
      function handleClick() {
        console.log('click')
        dispatch({
          type: 'delete',
          payload: 1
        })
      }
      document.addEventListener('click', handleClick);

      return () => {
        document.removeEventListener('click', handleClick)
      }
    }
  },
  reducers: {
    'delete'(state, { payload: id }) {
      return {
        ...state,
        list: state.list.filter(item => item.id !== id)
      };
    },
  },
};
