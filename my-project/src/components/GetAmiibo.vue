<script>
import axios from 'axios'
export default {
  data() {
    return {
      searchId: '',
      amiiboData: []
    }
  },
  methods: {
    getAmiiboData() {
      const url = `https://www.amiiboapi.com/api/amiibo/?name=${this.searchId}`
      axios.get(url)
        .then(response => {
          console.log(response.data)
          this.amiiboData = response.data
        })
        .catch(error => {
          console.log(error.response)
        })
    }

  }
}
</script>

<template>
  <div>
    <input @keyup.enter="getAmiiboData" type="text" v-model="searchId" />
    <button @click="getAmiiboData" class="material-icons btn btn-success">search</button>
    <div v-if="amiiboData">
      <ul>
        <li v-for="amiibo in amiiboData">Character: {{ amiibo[0].name }}</li>
        <li v-for="amiibo in amiiboData">Game series: {{ amiibo[0].gameSeries }}</li>
      </ul>
      <img v-for="amiibo in amiiboData" :src="amiibo[0].image">
    </div>
    <div v-else>
      <h2>No searches found</h2>
    </div>
  </div>
</template>

<style lang="scss">
  $main-color: #faa;

  input {
    font-size: 1.2rem;
    border-radius: 5px;
    margin-left: 20px;
  }

  input:focus {
    outline: none;
  }

  ul {
    list-style-type: none;
  }

  li {
    font-size: 1.2rem;
    padding: 5px 0;
    font-weight: bold;
  }

</style>
