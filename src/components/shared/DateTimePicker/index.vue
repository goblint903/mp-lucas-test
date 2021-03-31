<template>
  <div class="form-controller">
    <span class="form-placeholder">{{ label }}</span>
    <Datetime v-model="time" input-class="form-input" />
  </div>
</template>
<script>
import { Datetime } from "vue-datetime";
import "vue-datetime/dist/vue-datetime.css";

export default {
  name: "e-datetime-picker",
  components: { Datetime },
  props: {
    label: {
      type: String,
      default: "",
    },
    value: {
      type: String,
      default: "",
    },
  },
  computed: {
    time: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("change", val);
      },
    },
  },
};
</script>
<style scoped>
.form-controller {
  display: flex;
  flex-direction: column;
  margin: 1rem;
  flex: 1;
}
.form-placeholder {
  width: 100%;
  font-size: 12px;
  color: grey;
  text-align: left;
  margin: 0.5rem 0.5rem;
}
::v-deep .form-input {
  width: 100%;
  min-width: 300px;
  padding: 0.5rem;
  font-size: 1rem;
  outline: none;
  box-sizing: border-box;
  border-radius: 0.5rem;
  border: 1px solid lightgray;
}
</style>
