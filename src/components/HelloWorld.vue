<template>
<div>
<b-container fluid>
  <b-row class="my-1">
    <b-col sm="4">
     <b-form-input
          id="search"
          v-model="searchId"
          type="text"
          placeholder="Enter Id to search"
          class="mb-2 mr-sm-2 mb-sm-0"
        ></b-form-input>
    </b-col>
    <b-col sm="8" align="left" >
      <b-button  variant="primary" @click="searchBasedOnId()">Search</b-button>
    </b-col>
  </b-row>
</b-container>
<div>
    <b-table striped hover :items="searchResponse" class="sm-8" caption-top >
      <template v-slot:table-caption>Below we display the search results </template>

    </b-table>
  </div>

   
  </div>
</template>

<script>
import axios from "axios";

export default {

  data() {
    return {
  name: 'HelloWorld',
  searchId:"",
  searchResponse:["demo","demo2","dmeo3"],
    }},
    methods:{
       async searchBasedOnId(){
         
          console.log("In search "+this.searchId)
          try {
                var result = await  axios({
                    method: "POST",
                    url: "http://localhost:8080/v1/graphql",
                    data: {
                        query: `
query MyQuery {
  hacktable2(limit: 500, where: {_or: [{dx_code: {_ilike: "%`+this.searchId+`%"}}, {dx_code_description: {_ilike: "%`+this.searchId+`%"}}]}, order_by: {rank: asc}) {
    rank
    dx_code
    dx_code_description
  }
}
                        `
                    }
                });
                console.log(result.data.data.hacktable2)
                this.searchResponse = result.data.data.hacktable2
            } catch (error) {
                console.error(error);
            }

      //Method end
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