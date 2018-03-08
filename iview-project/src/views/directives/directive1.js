export default {
    directives: {
        focus: {
            inserted: function(el) {
              console.log(el);
              el.focus();
            }
        }
    }
}
