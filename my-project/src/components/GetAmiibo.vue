<script>
import axios from 'axios'
export default {
  data() {
    return {
      searchId: '',
      amiiboData: [],
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
    },
  }
}
</script>

<template>
  <main class="home-page">
    <div>
      <h1>Hello {{ this.$route.params.id }}</h1>
      <h1>Enter character</h1>
      <input @keyup.enter="getAmiiboData" type="text" v-model="searchId" />
      <button @click="getAmiiboData" class="material-icons btn btn-primary">search</button>
      <div v-if="amiiboData">
        <ul>
          <li :key="amiibo[0].character" v-for="amiibo in amiiboData">Character: {{ amiibo[0].name }}</li>
          <li :key="amiibo[0].character" v-for="amiibo in amiiboData">Game series: {{ amiibo[0].gameSeries }}</li>
          <li :key="amiibo[0].character" v-for="amiibo in amiiboData">Type: {{ amiibo[0].type }}</li>
        </ul>
        <img :key="amiibo[0].character" class="amiibo-img" v-for="amiibo in amiiboData" :src="amiibo[0].image" />
      </div>
    </div>
  </main>
</template>

<style lang="scss">

  h1 {
    margin: 20px;
    font-weight: bold;
  }

  h2 {
    font-weight: bold;
    margin: 20px;
  }

  input {
    border-radius: 5px;
    margin-left: 20px;
    padding: 5px;
  }

  input:focus {
    outline: none;
  }

  ul {
    list-style-type: none;

    li {
      font-size: 1.2rem;
      padding: 5px 0;
      font-weight: bold;
    }
  }

  .amiibo-img {
    margin-left: 20px;
    width: 300px;
  }

  .btn {
    margin-left: 20px;
  }

  .example-text {
    margin-left: 20px;
    opacity: .5;
  }

</style>
