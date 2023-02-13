<template>
  <div>
    <router-link to="/learnlib/usemavon">使用mavon-editor</router-link>
    <router-link to="/learnlib/usedraggable">使用vue-draggable</router-link>
    <router-view id="container"></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    a{
        margin-left: 20px;
        
    }
    #container {
        margin: 30px;
        padding: 10px;
        border: 2px red solid;
    }
</style>