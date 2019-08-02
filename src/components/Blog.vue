<template>
    <main class="blog" :class="">
        <blog-nav/>
        <blog-list/>
<!--        <blog-footer/>-->
    </main>
</template>

<script>
import BlogFooter from './BlogFooter'
import BlogNav from './BlogNav'
import BlogList from './BlogList'

export default {
  name: 'blog',
  components: { BlogFooter, BlogList, BlogNav },
  props: {

  },
  data() {
    return {

    }
  }
}
</script>
