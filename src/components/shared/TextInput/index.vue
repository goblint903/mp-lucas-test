<template>
  <div class="form-controller">
    <span class="form-placeholder">{{ label }}</span>
    <input :value="value" @change="handleChange" class="form-input" />
  </div>
</template>
<script>
export default {
  name: "e-text-input",
  props: {
    value: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
  },
  methods: {
    handleChange(e) {
      this.$emit("onChange", e.target.value);
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
.form-input {
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
