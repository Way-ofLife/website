<template>
  <div>
    <v-section :title="ted.title" :src="ted.src" :alt="ted.alt">
      <p>テストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト</p>
    </v-section>
  </div>
</template>

<script>
import VSection from '~/components/about/VSection'
export default {
  layout: 'bg',
  components: {
    VSection
  },
  data () {
    return {
      ted: {
        title: 'Humans of Meidaiとは?',
        src: 'HumansofMeidai.jpg',
        alt: 'HMのロゴ'
      }
    }
  },
  head () {
    return {
      title: 'About'
    }
  }
}
</script>
