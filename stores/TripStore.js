import { decorate, observable } from "mobx";
import instance from "./instance";

class TripStore {
  trips = [];
  loading = true;

  fetchTrips = async () => {
    //error handler
    try {
      const response = await instance.get("/trips");
      // REVIEW: If this is working remove console
      // console.log("NailStore -> fetchItems -> error", response); // test to see where data come from
      this.trips = response.data;
      this.loading = false;
    } catch (error) {
      console.error("TripStore -> fetchTrips -> error", error);
    }
  };

  getTripById = (tripId) => this.trips.find((trip) => trip.id === tripId);
}

decorate(TripStore, {
  trips: observable,
  loading: observable,
});

const tripStore = new TripStore();
tripStore.fetchTrips();
export default tripStore;
