Vue.component("dropdown-template", {
  template: "#dropdown-template",
  data: function() {
    return {
      isDropdownShow: false
    };
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
    labelTextList: Array
  },
  methods: {
    dropdownShow(e) {
      if (e.currentTarget.className == "dropdown-title") {
        this.isDropdownShow = !this.isDropdownShow;
      }
    },
    chooseTextLabel(i) {
      this.isDropdownShow = false;
      this.$emit("choose", this.labelTextList[i], this.$vnode.key);
    }
  }
});

var app = new Vue({
  el: "#app",
  data: {
    monthTitle: "월을 입력하세요.",
    dateTitle: "날짜를 선택하세요.",
    timeTitle: "관람시간을 선택하세요.",
    dateTitleShow: false,
    timeTitleShow: false,
    classObject: {
      "show-ticket": false
    },
    labelTextList: {
      month: [
        { MONTH: 7, YEAR: "2018", TICKET_MONTH_LIST: "2018-07" },
        { MONTH: 8, YEAR: "2018", TICKET_MONTH_LIST: "2018-08" },
        { MONTH: 9, YEAR: "2018", TICKET_MONTH_LIST: "2018-09" },
        { MONTH: 10, YEAR: "2018", TICKET_MONTH_LIST: "2018-10" },
        { MONTH: 11, YEAR: "2018", TICKET_MONTH_LIST: "2018-11" }
      ],
      date: [
        { TICKET_DAY: 22, TICKET_DAY_OF_WEEK: "일요일" },
        { TICKET_DAY: 24, TICKET_DAY_OF_WEEK: "화요일" },
        { TICKET_DAY: 25, TICKET_DAY_OF_WEEK: "수요일" },
        { TICKET_DAY: 26, TICKET_DAY_OF_WEEK: "목요일" },
        { TICKET_DAY: 27, TICKET_DAY_OF_WEEK: "금요일" },
        { TICKET_DAY: 28, TICKET_DAY_OF_WEEK: "토요일" },
        { TICKET_DAY: 29, TICKET_DAY_OF_WEEK: "일요일" },
        { TICKET_DAY: 31, TICKET_DAY_OF_WEEK: "화요일" }
      ],
      time: [
        { TICKET_TIME: "14:00:00", TICKET_VIEW_TIME: "오후 02:00" },
        { TICKET_TIME: "17:00:00", TICKET_VIEW_TIME: "오후 05:00" },
        { TICKET_TIME: "18:00:00", TICKET_VIEW_TIME: "오후 06:00" },
        { TICKET_TIME: "19:00:00", TICKET_VIEW_TIME: "오후 07:00" }
      ]
    }
  },
  computed: {
    monthLabelList() {
      return this.labelTextList["month"].map(
        val => `${val.YEAR}년 ${val.MONTH}월`
      );
    },
    dateLabelList() {
      return this.labelTextList["date"].map(
        val => `${val.TICKET_DAY}일 | ${val.TICKET_DAY_OF_WEEK}`
      );
    },
    timeLabelList() {
      return this.labelTextList["time"].map(val => val.TICKET_VIEW_TIME);
    }
  },
  methods: {
    showTicketPopup() {
      this.classObject["show-ticket"] = true;
    },
    closeTicketPopup() {
      this.classObject["show-ticket"] = false;
    },
    chooseDropdownLabel(labelText, key) {
      switch (key) {
        case "month":
          this.monthTitle = labelText;
          this.dateTitleShow = true;
          break;
        case "date":
          this.dateTitle = labelText;
          this.timeTitleShow = true;
          break;
        case "time":
          this.timeTitle = labelText;
          break;
        default:
          break;
      }
    }
  }
});
