<template>
  <q-page padding>
    <!-- content -->
    <div class="column">
      Advanced Escrow Page
      {{$route.params}}
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'AdvancedEscrowPage',
  data () {
    return {
      resdata: ''
    }
  },
  computed: {},
  methods: {
    loadInitial () {
      this.$axios.get('/https://swapsteem-api.herokuapp.com/escrows/by_id/' + this.$route.params.escrow_id)
        .then((response) => {
          this.resdata = response.data
          console.log('response :' + this.resdata)
        })
        .catch(() => {
          this.$q.notify({
            color: 'negative',
            position: 'top',
            message: 'Loading failed',
            icon: 'report_problem'
          })
        })
    }
  },
  mounted () {
    this.loadInitial()
  }
}
</script>

<style>
</style>
