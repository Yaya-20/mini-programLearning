// components/cpn1/cpn1.js
Component({
  externalClasses: ['title'],
  /**
   * 组件的属性列表
   */
  properties: {
    title: String,
    content: {
      type: String,
      value: '我是content',
      observer: function(newVal, oldVal) {
        console.log(newVal, oldVal);
        
      }
    }
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

  }
})
