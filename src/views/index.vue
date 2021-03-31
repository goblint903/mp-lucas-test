<template>
  <List
    :vehicleList="getVehicleData ? getVehicleData.Results : []"
    @change="updateVehicle"
  />
</template>
<script>
import { createNamespacedHelpers } from "vuex";
import List from "@/components/shared/List";

const { mapActions, mapGetters } = createNamespacedHelpers("vehicle");

export default {
  name: "Index",
  components: { List },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getVehicleData"]),
  },
  methods: {
    ...mapActions(["fetchVehicleData", "updateVehicle"]),
  },
  beforeMount() {
    this.fetchVehicleData();
  },
};
</script>
