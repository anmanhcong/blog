<template>
    <div class="container">
        <b-pagination
                v-model="page"
                :total-rows="rows"
                :per-page="limit"
                aria-controls="post"
        ></b-pagination>
        <p class="mt-3">Current Page: {{ page }}</p>
        <blog-add></blog-add>
        <div class="row"
             id="post"
             :items="list"
             :per-page="limit"
             :current-page="page"
        >
            <div class="col-4" v-for="post in list.list">
                <router-link :to="{
                    name: 'post',
                    query: post
                 }">
                    <img :src="post.Post.image">
                </router-link>
                <p>{{ post.Post.created }}</p>
            </div>
        </div>
    </div>
</template>

<script>
  import axios from 'axios';
  import BlogAdd from './post_actions/BlogAdd'

  export default {
    name: 'blog-list',
    data() {
      return {
        list: {},
        transition: 'preview-appear',
        page: 1,
        limit:2,
        status: {}
      }
    },

    components: { BlogAdd },

    watch: {
      page : function (){
        axios
          .get('http://localhost/blog_demo/posts/view?page='+this.page+'&limit=' + this.limit)
          .then(response => (this.list = response.data))
      },
    },

    mounted () {
      axios
        .get('http://localhost/blog_demo/posts/view?page=1&limit=' + this.limit)
        .then(response => (this.list = response.data))
    },
    computed: {
      rows() {
        return this.list.total
      },
    }
  }
</script>

<style scoped>
    .col-4 img {
        width: 100%;
        height: 150%;
    }
</style>
