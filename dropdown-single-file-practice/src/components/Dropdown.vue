<template>
    <div class="dropdown">
        <div :class="{'disabled-dropdown':!titleShow, 'dropdown-title': titleShow}" @click="disabledDropdown">
            <label class="title-label">{{titleMessage}}</label>
        </div>
        <div class="dropdown-scroll-hider" v-show="isDropDownShow" style="display: block; transform: translateY(0px);">
            <div class="dropdown-container" style="display: block;">
                <div class="text-label-container" :data-val="labelText" @click="chooseTextLabel(index, $event)" v-for="(labelText, index) in labelTextList"
                    :key="index">
                    <label class="dateTicket-text-label">
                        {{labelText}}
                    </label>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
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
</script>
