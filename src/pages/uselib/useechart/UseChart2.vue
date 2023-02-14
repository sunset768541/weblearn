<template>
  <div>
    2
    <div>
      <span>1sd</span>
    </div>
  </div>
</template>

<script>
export default {
  // beforeCreate（）{}：Vue创建前，此阶段为实例初始化之后，this指向创建的实例，数据观察,数据监听事件机制都未形成，不能获得DOM节点。
  //data，computed，watch，methods 上的方法和数据均不能访问，注：date和methods的数据都还未初始化。
  beforeCreate() {
    console.log('beforeCreate');
  },

  //Vue创建后，此阶段为实例初始化之后，data、props、computed的初始化导入完成， 注：要调用methods中的方法，或者操作data中的数据，最早只能在Created中操作。
  //能访问 data computed watch methods 上的方法和数据，初始化完成时的事件写这个里面，此阶段还未挂载DOM。
  created() {
    console.log('created');
  },

  //Vue载入前，阶段执行时，  模板已经在内存中编译好了，但是未挂载到页面中，（页面还是旧的）注：这个阶段是过渡性的，一般一个项目只能用到一两次。
  beforeMount() {
    console.log('beforeMount');
  },

  //Vue载入后，(完成创建vm.$el，和双向绑定)； 只要执行完mounted,就表示整个Vue实例已经初始化完成了，此时组件已经脱离里了创建阶段， 进入到了运行阶段。
  mounted() {
    console.log('mounted');
  },

  //Vue更新前， 当执行beforeUpdate的时候，页面中显示的数据还是旧的，此时date数据是最新的，页面尚未和最新数据数据保持同步。但是DOM中的数据会改变，这是vue双向数据绑定的作用，可在更新前访问现有的DOM，如手动移出添加的事件监听器。
  beforeUpdate() {
    console.log('beforeUpdate');
  },

  //Vue更新后， Updated执行时数据已经保持同步了，都是最新的，完成虚拟DOM的重新渲染和打补丁。组件DOM已完成更新，可执行依赖的DOM操作。
  updated() {
    console.log('updated');
  },

  //当执行beforeDestroy的时候，Vue实例就已经从运行阶段进入到销毁阶段了。实例上的所有date和methods以及过滤器和指令都是处于可用状态，此时还没有真正的执行销毁过程。
  beforeDestroy() {
    console.log('beforeDestroy');
  },

  //Vue销毁后, 当执行到destroted函数的时候，组件已经完全销毁（渣都不剩），此时组件中的所有的数据，方法，指令，过滤器...都已经销毁（不可用了）。
  destroyed() {
    console.log('destroyed');
  },

  methods: {}
};
</script>

<style></style>
