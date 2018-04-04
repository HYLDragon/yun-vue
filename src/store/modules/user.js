// 用户信息保存
const user = {
  state: {
    // 存放组件之间共享的数据
    userName: '',
    password: ''
  },
  mutations: {
    // mutations下的函数接收state作为参数，
    // 接收一个叫做payload（载荷）的东东作为第二个参数，
    // 这个东东是用来记录开发者使用该函数的一些信息，
    // 比如说提交了什么，提交的东西是用来干什么的，包含多个字段，
    // 所以载荷一般是对象（其实这个东西跟git的commit很类似）还有一点需要注意：mutations方法必须是同步方法！
    // 显式的更改state里的数据
    setUserName: (state, userName) => {
      state.userName = userName
    },
    setPassword: (state, password) => {
      state.password = password
    }
  },
  getters: {
    // 过滤state数据
    getUserName: (state) => {
      return state.userName
    },
    getPassword: (state) => {
      return state.password
    }
  },
  actions: {}

}
export default user
