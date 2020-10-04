<template>
  <div>
    <input type="text" id="search" placeholder="Enter Id to search">
   <button  @click="searchBasedOnId()">Search</button>
  
  <table>
  <tr>
  <td>dignosisCode</td>
  <td>procedureCode</td>
  <td>id</td>
  </tr>
  <tr v-for="search in searchResponse" :key="search.id">
 
   <td>
    {{search.dignosisCode}}
    </td>
    <td>{{search.procedureCode}}
    </td><td>{{search.id}}</td>
   
   </tr>
   </table>
   
  </div>
</template>

<script>
export default {
  data() {
    return {
  name: 'HelloWorld',
  searchId:"",
  searchResponse:[
    {
      "dignosisCode":9876,
      "procedureCode":1234,
      "id":1
    },
    {
      "dignosisCode":9876,
      "procedureCode":1355,
      "id":7
    },
    {
      "dignosisCode":9876,
      "procedureCode":1123,
      "id":8
    }
  ],
    }},
    methods:{
        searchBasedOnId(){
          this.searchId= document.getElementById("search").value;
          console.log("In search"+this.searchId)
          this.$axios
      .post("Base Url is setted in main.js , added Url",{
        //body
      })
      .then(response => {
        console.log("Response Data",response.data)
        
      })
      .catch(error => {
        console.log("Error ",error);
      });
        }
    }
 
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
