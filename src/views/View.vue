<template>
  <div class="about">
    <h1>Your random entity is {{ result }}</h1>
    <el-button type="primary" v-on:click="go">Go</el-button>
  </div>
</template>

<script>
import Api from '@/api'

export default {
  data: () => ({
    result: ''
  }),
  methods: {
    go: function () {
      return Api.randomEntity()
          .then(response => {
            console.log(response)
            this.result = response.data.entries[0].API
            // this.$toasted.show(response.data.entries[0].Link, {
            //     type: 'info',
            //     position: 'bottom-center',
            //     duration: 2000
            // })
          })
    },
  }
}
</script>
