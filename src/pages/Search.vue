<template>
  <q-page padding>
    <!-- content -->
    <div>Search Page</div>
    <div class="column">
      <q-field
    icon="wifi"
    label="Search Escrow ID"
    helper="e.g. 12345"
  >
    <q-search
      v-model="text"
      color="black"
      float-label="ID"
    />
  </q-field>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Search'
}
</script>

<style>
</style>
