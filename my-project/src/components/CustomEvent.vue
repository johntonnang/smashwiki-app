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
      if (this.nameResult != '') {
        this.$router.push('/search/' + this.nameResult)
      } else {
        this.$router.push('/search/' + 'Anonymous')
      }
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
