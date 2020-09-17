/*
146. LRU Cache
*/
class LRUCache {
  constructor(capacity) {
    this.cache = new Map();
    this.capacity = capacity;
  }

  get(key) {
    if (!this.cache.has(key)) return -1;

    // - Map is an orderedDict.  And we want to move most recently used item to
    // the front of the Map(), so it eliminates the use of a linked list to
    // tell which item is used more recently in order ---> QN thinks...
    //
    // - This part is to remove the key-val pair from old pos, and then insert
    // the pair again, so it's in the front of the Map().
    //
    const v = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, v);
    return this.cache.get(key);
  };

  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }

    this.cache.set(key, value);

    if (this.cache.size > this.capacity) {
      this.cache.delete(this.cache.keys().next().value);
    }
  };
}
