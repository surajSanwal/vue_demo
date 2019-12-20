<template>
  <div>
    <h1>View blog posts</h1>
    <b-table
      show-empty
      stacked="md"
      :items="users"
      :fields="fields"
      :current-page="currentPage"
      :per-page="perPage"
    >
      <template slot="name" slot-scope="row">
        <pre> {{ row }}</pre>
      </template>

      <template slot="email" slot-scope="row">
        <pre> {{ row }}</pre>
      </template>

      <template slot="mobile" slot-scope="row">
        <pre> {{ row }}</pre>
      </template>

      <template slot="edit" slot-scope="row">
        <b-button variant="warning">{{ row.value.edit }}</b-button>
      </template>
    </b-table>
    <b-row>
      <b-col md="6" class="my-1">
        <b-pagination
          :total-rows="totalRows"
          :per-page="perPage"
          v-model="currentPage"
          class="my-0"
        />
      </b-col>
    </b-row>
  </div>
</template>

<script>
// import { mapState } from "vuex";
export default {
  data() {
    return {
      data: [],
      users: [
        {
          name: "Dickerson",
          email: "Macdonald",
          mobile: 9760843156,
          gender: "Male",
          edit: "edit"
        },
        {
          name: "Dickerson",
          email: "Macdonald",
          mobile: 9760843156,
          gender: "Male",
          edit: "edit"
        },
        {
          name: "Dickerson",
          email: "Macdonald",
          mobile: 9760843156,
          gender: "Male",
          edit: "edit"
        },
        {
          name: "Dickerson",
          email: "Macdonald",
          mobile: 9760843156,
          gender: "Female",
          edit: "edit"
        },
        {
          name: "Dickerson",
          email: "Macdonald",
          mobile: 9760843156,
          gender: "Male",
          edit: "edit"
        }
      ],
      currentPage: 1,
      perPage: 5,
      totalRows: 10,
      pageOptions: [5, 10, 15]
    };
  }
  // computed: mapState(["users"])
};
</script>
