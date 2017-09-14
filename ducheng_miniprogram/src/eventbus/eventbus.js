const BUS = {};

export default {

  emit(name, ...args) {
    if (BUS[name]) {
      BUS[name](...args);
    }
  },
  subscribe(name, listener) {
    BUS[name] = listener;
  },
  unsubscribe(name) {
    BUS[name] = null;
  }

}
