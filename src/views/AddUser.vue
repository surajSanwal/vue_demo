<template>
  <div>
    <b-container class="bv-example-row">
      <b-row>
        <b-col></b-col>
        <b-col
          ><b-form
            ref="my-form"
            @submit="onSubmit"
            @reset="onReset"
            v-if="show"
          >
            <b-form-group
              id="input-group-1"
              label="Email address:"
              label-for="input-1"
              description="We'll never share your email with anyone else."
            >
              <b-form-input
                id="input-1"
                v-model="form.email"
                type="email"
                required
                placeholder="Enter email"
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-2"
              label="Your Name:"
              label-for="input-2"
            >
              <b-form-input
                id="input-2"
                v-model="form.name"
                required
                placeholder="Enter name"
              ></b-form-input>
            </b-form-group>
            <b-form-group
              id="input-group-2"
              label="Your Mobile Number:"
              label-for="input-3"
              type="number"
            >
              <b-form-input
                id="input-3"
                v-model="form.mobile"
                required
                placeholder="Enter Mobile Number"
              ></b-form-input>
            </b-form-group>
            <b-form-group
              id="input-group-3"
              label="Gender:"
              label-for="input-4"
            >
              <b-form-select
                id="input-4"
                v-model="form.gender"
                :options="gender"
                required
              ></b-form-select>
            </b-form-group>

            <b-button type="submit" variant="primary">Submit</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
          </b-form>
          <!-- <b-card class="mt-3" header="Form Data Result">
            <pre class="m-0">{{ form }}</pre>
          </b-card> -->
        </b-col>
        <b-col></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      form: {
        email: "",
        name: "",
        mobile: null,
        gender: null
      },
      gender: [
        { text: "Select Gender", value: null },
        { text: "Male", value: "Male" },
        { text: "Female", value: "Female" }
      ],
      show: true
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      // alert(JSON.stringify(this.form));
      // this.$store.commit("addUser(this.form)");
      this.$store.dispatch("addUserAction", this.form);
      this.$$nextTick(() => {
        this.form.email = "";
        this.form.name = "";
        this.form.mobile = null;
        this.form.gender = "";
      });
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.mobile = null;
      this.form.gender = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  },
  computed: {
    ...mapMutations(["addUser"])
  }
};
</script>
