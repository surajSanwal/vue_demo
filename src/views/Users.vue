<template>
  <div v-on:load="onLoad">
    <b-row style="margin-top:20px">
      <b-col></b-col>
      <b-col><h1>Saved Users List</h1></b-col>
      <b-col></b-col>
      <b-col
        ><b-button variant="info" to="/addUser">Add New User </b-button></b-col
      >
    </b-row>
    <b-row class="text-center">
      <b-col></b-col>
      <b-col cols="10">
        <b-table
          show-empty
          stacked="md"
          :items="mapUsers"
          :fields="fields"
          :current-page="currentPage"
          :per-page="perPage"
        >
          <template v-slot:cell(index)="data">
            {{ data.index + 1 }}
          </template>
          <template v-slot:cell(action)="data">
            <b-button
              variant="info"
              v-on:click="onModalOpen($event, data.index)"
              >Edit</b-button
            >
            <b-button
              variant="danger"
              v-on:click="onDeleteUser($event, data.index)"
              >Delete</b-button
            >
          </template>
        </b-table></b-col
      >
      <b-col></b-col>
    </b-row>

    <b-row>
      <b-col></b-col>
      <b-col md="10" class="my-1">
        <b-pagination
          :total-rows="totalRows"
          :per-page="perPage"
          v-model="currentPage"
          class="my-0"
        />
      </b-col>
      <b-col></b-col>
    </b-row>
    <b-modal
      id="modal-1"
      title="Edit User"
      ok-title="Update"
      cancel-title="Cancel Update"
      @ok="handleOk"
      ref="my-modal"
    >
      <b-form-group id="input-group-3" label="Name:" label-for="input-4">
        <b-form-input
          v-model="updated.name"
          placeholder="Enter your name"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-3" label="Email:" label-for="input-4">
        <b-form-input
          v-model="updated.email"
          placeholder="Enter your email"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-3" label="Mobile:" label-for="input-4">
        <b-form-input
          v-model="updated.mobile"
          placeholder="Enter your mobile"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-3" label="Gender:" label-for="input-4">
        <b-form-select
          id="input-4"
          v-model="updated.gender"
          :options="gender"
          required
        ></b-form-select>
      </b-form-group>
    </b-modal>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      data: [],
      gender: [
        { text: "Select Gender", value: null },
        { text: "Male", value: "Male" },
        { text: "Female", value: "Female" }
      ],
      fields: ["index", "name", "email", "mobile", "gender", "action"],
      mapUsers: this.$store.state["users"],
      currentPage: 1,
      perPage: 15,
      totalRows: 10,
      pageOptions: [5, 10, 15],
      updated: this.$store.state["update"]
    };
  },
  methods: {
    onModalOpen(evt, index) {
      evt.preventDefault();
      this.$store.dispatch("setUpdateAction", index);
      this.$refs["my-modal"].show();

      this.activeIndex = index;
      this.updated = this.$store.state["update"];
      console.log(this);
    },
    handleOk(evt) {
      evt.preventDefault();
      this.handleSubmit();
    },
    handleSubmit() {
      this.$refs["my-modal"].hide();
      this.$store.dispatch("updateUserAction", this.updated, this.activeIndex);
    },
    onDeleteUser(index) {
      this.$store.dispatch("deleteUserAction", index);
    },
    onLoad(evt) {
      evt.preventDefault();
      this.getUsers();
    }
  },
  computed: {
    state: {
      activeIndex: 0,
      ...mapState(["users", "update"])
    },
    ...mapMutations([
      "setUpdateAction",
      "updateUserAction",
      "deleteUserAction"
    ]),
    ...mapGetters(["getUpdated"]),

    ...mapActions(["getUsers"])
  }
};
</script>
