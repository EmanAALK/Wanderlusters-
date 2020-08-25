import { decorate, observable } from "mobx";
import instance from "./instance";

class TripStore {
  trips = [];
  loading = true;
  //nailshops=trips
  fetchTrip = async () => {
    //error handler
    try {
      const response = await instance.get("/trips");
      console.log("TripStore -> fetchTrip -> error", response); // test to see where data come from
      this.trips = response.data;
      this.loading = false;
    } catch (error) {
      console.error("TripStore -> fetchTrip -> error", error);
    }
  };
}

decorate(TripStore, {
  trips: observable,
  loading: observable,
});

const tripStore = new TripStore();
tripStore.fetchTrip();
export default tripStore;
