<template>
  <div class="hello">
    <button @click="startRequest()">请求API1</button>
    <p>{{ myresponse }}</p>
  </div>
</template>

<script>
import {requestApi1} from "../api/myapi"
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  mounted() {
     
  },
  data() {
    return {
      myresponse:'未请求成功'
      
    }
  },
  methods: {
      startRequest(){
           requestApi1({userId:"12"}).then((response)=>{this.myresponse = response.data}).catch((error)=>{
          console.log(error)
        })
      }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
