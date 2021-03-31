<template>
  <button
    class="btn-wrapper"
    :style="{ backgroundColor: bgColor, color: color }"
    @click="handleClick"
    disable
  >
    {{ text }}
  </button>
</template>
<script>
export default {
  name: "e-button",
  props: {
    bgColor: {
      type: String,
      default: "lightgrey",
    },
    color: {
      type: String,
      default: "black",
    },
    text: {
      type: String,
      default: "",
    },
    disable: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleClick(e) {
      this.$emit("click", e);
    },
  },
};
</script>
<style scoped>
.btn-wrapper {
  margin: 0.5rem;
  padding: 0.4rem 0.8rem;
  border: 1px solid lightgray;
  border-radius: 0.2rem;
  box-shadow: 0px 2px 5px grey;
  font-size: 1rem;
  font-weight: bold;
  outline: none;
  cursor: pointer;
}
</style>
