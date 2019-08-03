<template>
    <div class="container">
        <div class="home">
            <h1 class="nav__title">
                <router-link to="/">
                    <p>Style Of Me</p>
                </router-link>
            </h1>
        </div>
    </div>
</template>

<script>
    export default {
      name: 'blog-nav',
      props: {

      }
    }
</script>

<style scoped>
    .nav__title {
        text-align: center;
    }
</style>
