export default {
    computed: {
    isDropDownShow() {
      return this.dropDownShow;
    }
  },
  props: {
    titleMessage: {
      type: String,
      required: true
    },
    titleShow: {
      type: Boolean,
      default: function() {
        return false;
      }
    },
    dropDownShow: {
      type: Boolean,
      default: function() {
        return false;
      }
    },
    labelTextList: Array
  },
  methods: {
    disabledDropdown(e) {
      if (e.currentTarget.className == "dropdown-title") {
        this.$emit("disabled", this.$vnode.key);
      }
    },
    chooseTextLabel(i) {
      this.$emit("disabled", this.$vnode.key);
      this.$emit("choose", this.labelTextList[i], this.$vnode.key);
    }
  }
}