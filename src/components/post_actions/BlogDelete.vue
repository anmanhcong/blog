<template>
    <div>
        <b-button id="show-btn" @click="$bvModal.show('modal-delete')">Xóa bài viết</b-button>

        <b-modal id="modal-delete" title="Xóa bài viết:" hide-footer>
            <p>Bạn có chắc chắn muốn xóa</p>
            <b-form>
                <input type="hidden" v-model="form.id = post_id">
                <b-button @click.prevent="deletePost" @click="$bvModal.hide('modal-delete')" variant="primary">Ok</b-button>
            </b-form>
        </b-modal>
        <hr>
    </div>
</template>
<script>
  import axios from 'axios'

  const list = { template: '<blog-list/>' }

  export default {

    name: 'blog-delete',
    data () {
      return {
        status: [],
        form: {
          id: null,
        }
      }
    },
    props: ['post_id'],
    watch: {
      status: function () {
        this.$notify({ group: 'notify', text: this.status.message })
      }
    },
    methods: {
      deletePost: function () {
        let formData = new FormData()
        formData.append('id', this.form.id)
        axios
          .post('http://localhost/blog_demo/posts/delete', formData)
          .then(response => {
            this.status = response.data;
            if (this.status.status == "success") {
              this.$router.push('/')
            }
          })
      }
    }

  }
</script>
