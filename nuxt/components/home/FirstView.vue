<template>
  <v-img
    src="talksession.jpg"
    height="100%"
    max-height="600px"
    dark
    class="align-center"
  >
    <v-container>
      <v-row
        align="center"
        justify="center"
      >
        <!--
        <v-col class="text-center" cols="12">
          <h1 class="display-1 font-weight-bold mb-4">
            TEDxNagoyaU2020オンラインイベント開催が決定しました！
          </h1>
        </v-col>
        -->
        <v-col class="text-center" sm="6" xs="12">
          <h1 class="display-1 font-weight-thin mb-4">
            HM test
          </h1>
        </v-col>
        <v-col class="text-center" sm="6" xs="12">
        </v-col>
      </v-row>
    </v-container>
  </v-img>
</template>

<script>
export default {
  methods: {
    eventOfClickedEventDetail () {
      this.$ga.event({
        eventCategory: 'Home',
        eventAction: 'clickButton',
        eventLabel: 'event2020',
        eventValue: 1
      })
    }
  }
}
</script>

<style scoped>
a{
  color:white !important;
  text-decoration: none;
}

.bg-filter {
  backdrop-filter: brightness(50%)
}
</style>
