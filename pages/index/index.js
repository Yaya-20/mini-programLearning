// index.js
// 获取应用实例
const app = getApp()

Page({
  data: { // data中存放响应式数据
    name: 'msg',
    age: 18,
    students: [
      {id: 110, name: 'lucy', age: 30},
      {id: 111, name: 'lilei', age: 33},
      {id: 112, name: 'xiaoming', age: 18}
    ],
    counter: 0
  },
  handleClick() {
    console.log(111);
    // this.data.counter++;
    // console.log(this.data.counter); // counter 会发生变化，但是视图不会刷新
    
    this.setData({
      counter: this.data.counter + 1
    })
  },
  handleDecrease() {
    this.setData({
      counter: this.data.counter - 1
    })
  }
})