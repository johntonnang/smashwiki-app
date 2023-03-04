<script>
  export default {
    components: {},
    data() {
      return {
        nameResult: '',
        lengthName: ''
      }
    },
    emits: ['enter-name'],
    created() {
      this.$emit('enter-name', this.nameResult)
    },
    methods: {
      onClick() {
        this.$emit('enter-name', this.nameResult)
      }
    },
    watch: {
      nameResult(lengthName) {
        if (lengthName.length > 20) {
          this.lengthName = 'Too many characters'
        } else {
          this.lengthName = ''
        }
      }
    }
  }
</script>

<template>
  <main class="home-page">
    <div>
      <h1>Enter name and press enter</h1>
      <input @keyup.enter="onClick" type="text" v-model="nameResult" />
      <p>{{ lengthName }}</p>
    </div>
  </main>
</template>
