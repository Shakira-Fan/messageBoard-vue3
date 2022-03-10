<template>
  <div class="messageBoard">
    <div class="card card-body p-4 rounded-0 bg-dark text-white messageWidth">
      <h3>Add A Task</h3>
      <form @submit.prevent="postNewMessage">
        <div class="mb-3">
          <label for="title">提問主題（提問重點）</label>
          <input
            id="title"
            class="form-control rounded-0 bg-dark text-white"
            type="text"
            name="title"
            placeholder="Title"
            v-model="title"
            autofocus
          />
        </div>
        <div class="mb-3">
          <label for="description">敘述你的問題</label>
          <textarea
            class="form-control rounded-0 bg-dark text-white"
            name="description"
            cols="80"
            placeholder="Add a Description"
            v-model="description"
          ></textarea>
        </div>

        <button class="btn btn-primary" @click="postNewMessage()">Post</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      title: "",
      description: "",
    };
  },
  methods: {
    async postNewMessage() {
      try {
        const resp = await axios.post("http://localhost:5000/message/add", {
          title: this.title,
          description: this.description,
        });
        //resp == undefined&&resp.status == undefined
        if (resp?.status !== 201) {
          return;
        }
        alert("成功");
        this.title = "";
        this.description = "";
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scope>
</style>