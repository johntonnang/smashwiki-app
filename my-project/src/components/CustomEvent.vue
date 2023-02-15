<script>
export default {
  data() {
    return {
    }
  },
  props: {
    nameResult: {
      type: String,
      default: 'Anonymous',
      required: true
    }
  },
  methods: {
    nextRoute() {
    this.$router.push('/search/' + this.nameResult)
    }
  }
}

</script>

<template>
  <main class="home-page">
    <div>
      <h1>Name: {{ nameResult ? nameResult : 'Anonymous' }}</h1>
      <button @click="nextRoute" class="material-icons btn btn-primary">chevron_right</button>
    </div>
</main>
</template>
