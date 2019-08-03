<template>
    <div class="container">
        <div class="row">
            <blog-edit :post="post"></blog-edit>
            <blog-delete :post_id="post.Post.id"/>
        </div>
        <div class="row">
            <div class="col-4">
                <img :src="post.Post.image">
            </div>
            <div class="col-8">
                <p>{{ post.Post.title }}</p>
                <p>{{ post.Post.created }}</p>
                <br>
                <p>{{ post.Post.description }}</p>
                <br>
                <p>{{ post.Post.content }}</p>
            </div>
        </div>
    </div>
</template>
<script>
  import BlogEdit from './post_actions/BlogEdit'
  import BlogAdd from './post_actions/BlogEdit'
  import BlogDelete from './post_actions/BlogDelete'

  export default {
    name: 'blog-post',
    components: { BlogEdit, BlogDelete },
    data () {
      return {
        post: this.$route.query,
        transition: 'preview-appear',
        showModal: false
      }
    },
    methods: {

    }
  }
</script>

<style scoped>
    .col-4 img {
        width: 100%;
        height: 60vh;
    }
</style>
