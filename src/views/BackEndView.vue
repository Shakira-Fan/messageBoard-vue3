<template>
  <table
    class="table table-bordered table-hover table-dark"
    v-if="messages.length"
  >
    <thead>
      <tr>
        <th>順序</th>
        <th>提問問題</th>
        <th>敘述你的問題</th>
        <th>時間：</th>
        <th>刪除</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(message, index) in messages" :key="index">
        <td>{{ index + 1 }}</td>
        <td>
          <strong>{{ message.title }}</strong>
        </td>
        <td>{{ message.description }}</td>
        <td>{{ message.createdAt }}</td>
        <td>
          <button class="btn btn-danger" @click="deleteMessage(message._id)">
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  </table>
  <div
    class="h-100 d-flex align-items-center justify-content-center"
    v-if="!messages.length"
  >
    <div class="text-center text-white">
      <h1>沒有訊息</h1>
      <img src="/icons/empty.svg" class="w-75" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      messages: [],
    };
  },
  created() {
    this.getMessages();
  },
  methods: {
    async getMessages() {
      try {
        const resp = await axios.get("http://localhost:5000/message/");

        if (resp.statusText === "OK") {
          this.messages = resp.data.messages;
        }
      } catch (error) {
        console.log(error);
      }
    },

    async deleteMessage(id) {
      try {
        const resp = await axios.delete(
          `http://localhost:5000/message/delete/${id}`
        );
        if (resp.statusText === "OK") {
          this.getMessages();
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style>
</style>