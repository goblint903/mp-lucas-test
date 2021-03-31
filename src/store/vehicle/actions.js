import * as mutationTypes from "./mutationTypes";
import { vehicleApi } from "@/services/api";

const fetchVehicleData = async ({ commit }) => {
  try {
    const vehicleData = await vehicleApi({ method: "GET" });
    commit({
      type: mutationTypes.FETCH_VEHICLE_DATA,
      payload: vehicleData.data,
    });
  } catch (err) {
    commit({ type: mutationTypes.FETCH_VEHICLE_DATA, payload: null });
  }
};

const updateVehicle = ({ commit }, payload) => {
  commit({
    type: mutationTypes.UPDATE_VEHICLE_DATA,
    payload,
  });
};

export default { fetchVehicleData, updateVehicle };
