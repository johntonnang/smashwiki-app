<script>
import axios from 'axios'
export default {
  data() {
    return {
      amiiboDataList: [],
      amiiboRandom: []
    }
  },
  created() {
    axios.get(`https://www.amiiboapi.com/api/amiibo/`)
    .then(response => {
      this.amiiboDataList = response.data
    })
    .catch(error => {
      console.log(error.response)
    })
    return this.amiiboDataList
  },
  methods: {
    getAmiiboList() {
      const randomId = this.amiiboDataList.amiibo[Math.floor(Math.random() * this.amiiboDataList.amiibo.length)].name
      const url = `https://www.amiiboapi.com/api/amiibo/?name=${randomId}`
      axios.get(url)
        .then(response => {
          console.log(response.data)
          this.amiiboRandom = response.data
        })
        .catch(error => {
          console.log(error.response)
        })
        return this.amiiboDataList
    }
  }
}
</script>

<template>
  <main class="random-page">
    <h1>Random Generator</h1>
    <div>
      <button @click="getAmiiboList" class="material-icons btn btn-success">casino</button>
      <div v-if="amiiboDataList">
        <ul>
          <li :key="amiibo[0].character" v-for="amiibo in amiiboRandom">Character: {{ amiibo[0].name }}</li>
          <li :key="amiibo[0].character" v-for="amiibo in amiiboRandom">Game series: {{ amiibo[0].gameSeries }}</li>
          <li :key="amiibo[0].character" v-for="amiibo in amiiboRandom">Type: {{ amiibo[0].type }}</li>
        </ul>
        <img :key="amiibo[0].character" class="amiibo-img" v-for="amiibo in amiiboRandom" :src="amiibo[0].image" />
      </div>
    </div>
  </main>
</template>
