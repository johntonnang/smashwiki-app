<script>
  import SearchResult from '../components/SearchResult.vue'
  import CustomEvent from '../components/CustomEvent.vue'
  export default {
    components: {
      SearchResult,
      CustomEvent
    },
    data() {
      return {
        nameResult: ''
      }
    },
    methods: {
      onEnterName(o) {
        this.nameResult = o
      }
    },
  }
</script>

<template>
  <div>
  <SearchResult @enter-name="onEnterName" />
  <CustomEvent :name-result="nameResult" />
  </div>
</template>
