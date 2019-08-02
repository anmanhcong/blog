<template>
    <div>
        <b-button id="show-btn" @click="$bvModal.show('modal-1')">Chỉnh sửa bài viết</b-button>

        <b-modal id="modal-1" title="Sửa bài viết:" hide-footer>
            <b-form>
                <input type="hidden" v-model="form.id = post.Post.id">
                <b-form-group
                        id="input-group-1"
                        label="Tiêu đề"
                        label-for="input-1"
                        description="Bạn nên điền cái gì phù hợp với chủ để bài viết"
                >
                    <b-form-input
                            v-model="form.title = post.Post.title"
                            id="input-1"
                            type="text"
                            required
                            placeholder="Nhập tiêu đề bài viết"
                    ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-2" label="Mô tả ngắn gọn:" label-for="input-2">
                    <b-form-input
                            v-model="form.description = post.Post.description"
                            id="input-2"
                            required
                            placeholder="Nhập mô tả"
                    ></b-form-input>
                </b-form-group>

                <b-form-group id="textarea" label="Nội dung:" label-for="textarea">
                    <b-form-textarea
                            v-model="form.content = post.Post.content"
                            id="textarea"
                            required
                            row="10"
                            max-row="6"
                            placeholder="Nhập mô tả"
                    ></b-form-textarea>
                </b-form-group>
                <b-form-group label="Chọn ảnh:">
                    <b-form-file
                            v-model="form.image"
                            placeholder="Choose a file..."
                            drop-placeholder="Drop file here..."
                    ></b-form-file>
                </b-form-group>

                <b-button @click.prevent="editPost" @click="$bvModal.hide('modal-1')" variant="primary">Submit</b-button>
            </b-form>
        </b-modal>
        <hr>
    </div>
</template>
<script>
  import axios from 'axios'

  export default {
    name: 'blog-edit',
    data () {
      return {
        status: [],
        form: {
          id: null,
          title: '',
          description: '',
          content: '',
          image: null
        }
      }
    },
    props: ['post'],
    methods: {
      editPost: function () {
        let formData = new FormData()
        formData.append('id', this.form.id)
        formData.append('title', this.form.title)
        formData.append('content', this.form.content)
        formData.append('description', this.form.description)
        formData.append('image', this.form.image)
        axios
          .post('http://localhost/blog_demo/posts/update', formData)
          .then(response => (this.status = response.data))
      }
    }

  }
</script>
