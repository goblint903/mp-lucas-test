import * as mutationTypes from "./mutationTypes";

export default {
  [mutationTypes.FETCH_VEHICLE_DATA](state, action) {
    const { payload } = action;
    state.vehicleData = payload;
  },
  [mutationTypes.UPDATE_VEHICLE_DATA](state, action) {
    const { payload } = action;
    const vehicleList = state.vehicleData.Results;
    const index = vehicleList.findIndex(
      (vehicle) => vehicle.MakeId === payload.MakeId
    );
    if (index > -1) {
      vehicleList.splice(index, 1, payload);
    }
    state.vehicleData = {
      ...state.vehicleData,
      Results: vehicleList,
    };
  },
};
