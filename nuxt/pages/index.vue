<template>
  <div>
    <first-view />
    <show-articles :articles="articles" />
  </div>
</template>

<script>
import FirstView from '~/components/home/FirstView'
import ShowArticles from '~/components/home/ShowArticles'

export default {
  layout: 'full',
  components: {
    FirstView,
    ShowArticles
  },
  async asyncData ({ $content }) {
    /*
    const speakers = await $content('talks', '2019').fetch()
    const articles = await $content('articles', { deep: true }).sortBy('date', 'desc').limit(3).fetch()
    return {
      speakers,
      articles
    }
     */
  },
  head () {
    return {
      titleTemplate: 'TEDxNagoyaU'
    }
  }
}
</script>
