import instance from "./instance";

// Mobx
import { decorate, observable } from "mobx";

class ProfileStore {
  profiles = [];
  loading = true;

  fetchProfiles = async () => {
    try {
      const res = await instance.get("/profiles");
      this.profiles = res.data;
      this.loading = false;
    } catch (error) {
      console.log(error);
    }
  };

  updateProfile = async (updatedProfile) => {
    try {
      await instance.put(`/profiles/${updatedProfile.id}`, updatedProfile);
      const profiles = this.profiles.find(
        (profile) => profile.id === updatedProfile.id
      );
      for (const key in updatedProfile) profiles[key] = updatedProfile[key];
    } catch (error) {}
  };
}

decorate(ProfileStore, {
  profiles: observable,
  loading: observable,
});

const profileStore = new ProfileStore();
profileStore.fetchProfiles();

export default profileStore;
