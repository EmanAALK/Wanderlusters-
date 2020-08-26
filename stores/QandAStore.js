import { decorate, observable } from "mobx";
import instance from "./instance";

/**
 * This store makes no sense.
 * Q&A is an icebox feature, this is waaaaaaay too early to have a store for.
 * Delete this file. When you're starting the Q&A feature, use the other store as reference.
 */

class QandAStore {
  items = [];
  loading = true;

  fetchItems = async () => {
    //error handler
    try {
      const response = await instance.get("/items");
      // console.log("QandAStore -> fetchItems -> error", response); // test to see where data come from
      this.items = response.data;
      this.loading = false;
    } catch (error) {
      console.error("QandAStore -> fetchItems -> error", error);
    }
  };

  getItemById = (itemId) => this.items.find((item) => item.id === itemId);
}

decorate(QandAStore, {
  items: observable,
  loading: observable,
});

const qandAStore = new QandAStore();
qandAStore.fetchItems();
export default qandAStore;
