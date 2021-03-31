<template>
  <div class="item-container" :style="{ border: borderStyle }">
    <list-item-header :data="data" @click="handleClick" />
    <list-item-body v-if="selected" :data="data" @change="handleChangeData" />
  </div>
</template>
<script>
import ListItemHeader from "./ListItemHeader";
import ListItemBody from "./ListItemBody";

export default {
  components: { ListItemHeader, ListItemBody },
  name: "e-list-item",
  props: {
    data: {
      type: Object,
      default: null,
    },
    selected: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    borderStyle() {
      if (this.selected) {
        return "1px solid lightgreen";
      }
      return "1px solid lightgray";
    },
  },
  methods: {
    handleClick() {
      this.$emit("click", this.data);
    },
    handleChangeData(data) {
      this.$emit("change", data);
    },
  },
};
</script>
<style scoped>
.item-container {
  width: 100%;
  margin-bottom: 1rem;
  border-radius: 1rem;
  box-shadow: 0px 2px 5px grey;
  display: flex;
  flex-direction: column;
  background-color: #e6e6e6;
  overflow: hidden;
}
</style>
