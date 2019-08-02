<template>
    <div class="container">
        <b-pagination
                v-model="page"
                :total-rows="rows"
                :per-page="limit"
                aria-controls="post"
        ></b-pagination>
        <p class="mt-3">Current Page: {{ page }}</p>
        <div class="row"
             id="post"
             :items="list"
             :per-page="limit"
             :current-page="page"
        >
            <div class="col-4" v-for="post in list">
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
  // import {scrollTo, kebabify, prettyDate} from '../helper'
  import axios from 'axios';

  export default {
    name: 'blog-list',
    data() {
      return {
        list: [],
        transition: 'preview-appear',
        page: 1,
        limit:2
      }
    },

    mounted () {
      axios
        .get('http://localhost/blog_demo/posts/view?page=' + this.page + '&limit=2')
        .then(response => (this.list = response.data))
    },
    computed: {
      rows() {
        return this.list.length
      }
    }
  }
</script>

<style scoped>
    .col-4 img {
        width: 100%;
        height: 150%;
    }
</style>
