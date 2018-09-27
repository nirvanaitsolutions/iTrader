<template>
  <q-page class="flex flex-center">
    <div class="column">
      <q-field
        icon="cloud"
        label="From"
        helper="e.g. aneilpatel">
        <q-input suffix="" v-model="escrow.from" />
      </q-field>
      <q-field
        icon="cloud"
        label="To"
        helper="e.g. utopian-io">
        <q-input suffix="" v-model="escrow.to" />
      </q-field>
      <q-field
        icon="cloud"
        label="Agent"
        helper="e.g. swapsteem">
        <q-input suffix="" v-model="escrow.agent" />
      </q-field>
      <q-field
        icon="cloud"
        label="Escrow ID"
        helper="e.g. 1234561">
        <q-input  v-model="escrow.escrowID" />
      </q-field>
      <q-field
        icon="cloud"
        label="SBD Amount"
        helper="e.g. 1.000">
        <q-input suffix="SBD" v-model="escrow.sbdAmount" />
      </q-field>
      <q-field
        icon="cloud"
        label="STEEM Amount"
        helper="e.g. 1.000">
        <q-input suffix="STEEM" v-model="escrow.steemAmount" />
      </q-field>
      <q-field
        icon="cloud"
        label="FEE"
        helper="e.g. 0.500">
        <q-input suffix="SBD" v-model="escrow.fee" />
      </q-field>
      <q-field
        icon="cloud"
        label="Ratification Deadline"
        helper="e.g. 2018-12-01T15:59:00">
        <q-select
          v-model="escrow.selectedRatification"
          :options="selectRatificationOptions"
        />
      </q-field>
      <q-field
        icon="cloud"
        label="Expiration Deadline"
        helper="e.g. 2018-12-30T15:59:00">
        <q-select
          v-model="escrow.selectedExpiry"
          :options="selectExpiryOptions"
        />
      </q-field>
      <q-field
        icon="cloud"
        label="Terms of Escrow"
        helper="e.g. {}">
        <q-input suffix="" v-model="escrow.jsonMeta" />
      </q-field>
      <q-btn color="primary" label="Transfer to Escrow" @click="onclick()" />
    </div>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      selectRatificationOptions: [
        {
          label: '5 Mins',
          value: '5'
        },
        {
          label: '15 mins',
          value: '15'
        },
        {
          label: '1 hour',
          value: '60'
        },
        {
          label: '2 hours',
          value: '120'
        }
      ],
      selectExpiryOptions: [
        {
          label: '6 hours',
          value: '6'
        },
        {
          label: '12 hours',
          value: '12'
        },
        {
          label: '24 hours',
          value: '24'
        },
        {
          label: '48 hours',
          value: '48'
        }
      ],
      escrow: {
        selectedRatification: 0,
        selectedExpiry: 0,
        from: '',
        to: '',
        agent: '',
        steemAmount: '',
        sbdAmount: '',
        escrowID: '',
        jsonMeta: '',
        fee: ''
      }
    }
  },
  computed: {
  },
  methods: {
    onclick () {
      console.log(this.escrow)
      window.location.href = 'https://steemconnect.com/sign/escrow-transfer?from=' + this.escrow.from + '&to=' + this.escrow.to + '&agent=' + this.escrow.agent + '&escrow_id=' + this.escrow.escrowID + '&sbd_amount=' + this.escrow.sbdAmount + '&steem_amount=' + this.escrow.steemAmount + '&fee=' + this.escrow.fee + '&ratification_deadline=' + this.escrow.selectedRatification + '&escrow_expiration=' + this.escrow.selectedExpiry + '&json_meta={"terms":' + this.escrow.from + ',"memo":"testing escrow transaction 2334305953"}'
    }
  }
}
</script>
