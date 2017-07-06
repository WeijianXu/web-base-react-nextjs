export default {
  regex: {
    isEmpty: function (v) {
      return v === undefined || v === null || v === '';
    }
  },
  typeof: function (v) {
    return Object.prototype.toString.call(v).substring(8).replace(']', '').toLocaleLowerCase();
  }
}