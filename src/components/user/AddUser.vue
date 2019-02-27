<template>
    <v-breadcrumbs :items="items">
      <v-icon slot="divider">chevron_right</v-icon>
    </v-breadcrumbs>
</template>
<script>
export default {
    name:'',
    data: () => ({
      items: [
        {
          text: 'Dashboard',
          disabled: false,
          href: 'breadcrumbs_dashboard'
        },
        {
          text: 'Link 1',
          disabled: false,
          href: 'breadcrumbs_link_1'
        },
        {
          text: 'Link 2',
          disabled: true,
          href: 'breadcrumbs_link_2'
        }
      ]
    })
}
</script>
<style>

</style>
