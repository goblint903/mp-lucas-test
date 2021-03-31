<template>
  <div class="item-header" @click="handleClick">
    <p class="id">
      ID: <strong>{{ data.MakeId }}</strong>
    </p>
    <p class="name">
      NAME: <strong>{{ data.MakeName }}</strong>
    </p>
    <p class="type">
      TYPE: <strong>{{ data.VehicleTypeName }}</strong>
    </p>
    <img v-if="data.time" src="../../../../assets/check.png" width="25" />
    <div v-else class="empty-img"></div>
  </div>
</template>
<script>
export default {
  name: "e-list-item-header",
  props: {
    data: {
      type: Object,
      default: null,
    },
  },
  methods: {
    handleClick() {
      this.$emit("click", this.data);
    },
  },
};
</script>
<style scoped>
.item-header {
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  padding: 0px 2rem;
  box-sizing: border-box;
  background-color: white;
  cursor: pointer;
}
.id {
  width: 15rem;
  text-align: left;
}
.name {
  flex: 1;
  text-align: left;
}
.type {
  width: auto;
  margin-right: 1rem;
}
.empty-img {
  width: 25px;
}
</style>
