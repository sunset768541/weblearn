<template>
  <div>
    <router-link to="/learnlib/usemavon">使用mavon-editor</router-link>
    <router-link to="/learnlib/usedraggable">使用vue-draggable</router-link>
    <select v-model="echartpath" @change="onChartSelectChange($event)">
      <option v-for="(options, id) in chartData" :key="id" :value="options.path">
        {{ options.title }}
      </option>
    </select>
    <router-view id="container"></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      echartpath: '',
      watercolor: '',
      chartData: [
        { id: 1, path: '/learnlib/useechart1', title: '表格1' },
        { id: 2, path: '/learnlib/useechart2', title: '表格2' },
        { id: 3, path: '/learnlib/useechart3', title: '表格3' },
        { id: 4, path: '/learnlib/useechart4', title: '表格4' }
      ]
    };
  },
  methods: {
    onChartSelectChange() {
      console.log(this.echartpath);
      this.$router.push({ path: this.echartpath });
    }
  }
};
</script>

<style>
a {
  margin-left: 20px;
}
#container {
  margin: 30px;
  padding: 10px;
  border: 2px red solid;
}
</style>
