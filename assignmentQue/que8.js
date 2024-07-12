class HashMap {
  constructor() {
    this.map = {};
  }

  put(key, value) {
    this.map[key] = value;
  }

  get(key) {
    return this.map.hasOwnProperty(key) ? this.map[key] : undefined;
  }

  remove(key) {
    if (this.map.hasOwnProperty(key)) {
      delete this.map[key];
      return true;
    }
    return false;
  }
}

const myMap = new HashMap();
myMap.put("name", "John");
myMap.put("age", 30);

const names = myMap.get("name");
console.log(names);

const removed = myMap.remove("age");
console.log(removed);
console.log(myMap.get("age"));
