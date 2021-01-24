// components/multi-slot/multi-slog.js
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

  },
  options: {
    multipleSlots: true,
  },
  // 传给组件的样式
  externalClasses: [],
  // 监听properties/data 中的数据的变化
  observers: {
    counter: function(newVal) {
      console.log(newval);
      
    }
  },
  // 组件的生命周期
  /**
   * 1.监听所在页面的生命周期
   */
  pageLifetimes: {
    show() {
      console.log('监听组件所在页面显示出来时');
      
    },
    hide() {
      console.log('监听组件所在页面隐藏起来时');
    
    },
    resize() {
      console.log('监听所在页面尺寸的改变');
      
    }
  },
  lifetimes: {
    created() {
      console.log('组件被创建出来时');
      
    },
    ready() {
      console.log('组件被渲染出来时');
      
    },
    moved() {
      console.log('组件被移动到另一个节点时');
      
    },
    attached() {
      console.log('组件被添加到页面或其它组件时');
      
    },
    detached() {
      console.log('组件被移除掉');
      
    }
  }
})
