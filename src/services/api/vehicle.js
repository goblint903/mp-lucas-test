import instance from "./api.config";

export async function vehicleApi(payload) {
  switch (payload?.method) {
    case "GET":
      return await instance.get(
        "vehicles/GetMakesForVehicleType/car?format=json"
      );
    default:
      return null;
  }
}
