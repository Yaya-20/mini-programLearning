// components/counter/counter.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleAdd() {
      // console.log(333);
      this.triggerEvent('add', { name: 'lucy', age: 33 }, {})
    },
    handleMinus() {
      this.triggerEvent('minus', {}, {})
    }
  }
})
