<template>
  <div class="list-container">
    <LoadingSpinner v-if="vehicleList.length === 0" />
    <ListItem
      v-else
      v-for="(item, index) in currentList"
      :data="item"
      :key="index"
      @click="handleSelect"
      @change="handleChangeData"
      :selected="selectedVehicle && item.MakeId === selectedVehicle.MakeId"
    />
    <div class="btn-group">
      <Button @click="handlePrev" :text="'Prev'" :disable="pageIndex === 0" />
      <Button
        @click="handleNext"
        :text="'Next'"
        :disable="pageIndex * pageSize >= vehicleList.length"
      />
    </div>
  </div>
</template>
<script>
import LoadingSpinner from "@/components/shared/LoadingSpinner";
import Button from "@/components/shared/Button";
import ListItem from "./ListItem";

export default {
  name: "e-list",
  components: { ListItem, LoadingSpinner, Button },
  props: {
    vehicleList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      pageIndex: 0,
      pageSize: 10,
      selectedVehicle: null,
    };
  },
  computed: {
    totalSize() {
      if (this.vehicleList.length > 0) {
        return this.vehicleList.length;
      }
      return 0;
    },
    currentList() {
      if (this.vehicleList.length > 0) {
        return this.vehicleList.slice(
          this.pageIndex * this.pageSize,
          (this.pageIndex + 1) * this.pageSize
        );
      }
      return [];
    },
  },
  methods: {
    handleNext(e) {
      if ((this.pageIndex + 1) * this.pageSize < this.vehicleList.length) {
        this.pageIndex += 1;
      }
    },
    handlePrev(e) {
      if (this.pageIndex > 0) {
        this.pageIndex -= 1;
      }
    },
    handleSelect(vehicle) {
      if (
        this.selectedVehicle &&
        this.selectedVehicle.MakeId === vehicle.MakeId
      ) {
        this.selectedVehicle = null;
      } else {
        this.selectedVehicle = vehicle;
      }
    },
    handleChangeData(data) {
      this.$emit("change", data);
    },
  },
};
</script>
<style scoped>
.list-container {
  width: 90%;
  min-width: 600px;
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.btn-group {
  display: flex;
}
</style>
