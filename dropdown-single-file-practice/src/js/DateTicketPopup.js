import Dropdown from "../components/Dropdown";
import OptionDropdown from "../components/OptionDropdown"
import DropdownPanel from "../components/DropdownPanel";

var model = {
  monthTitle: "월을 입력하세요.",
  dateTitle: "날짜를 선택하세요.",
  timeTitle: "관람시간을 선택하세요.",
  optionTitle: "옵션을 선택하세요.",
  monthTitleShow: true,
  dateTitleShow: false,
  timeTitleShow: false,
  optionTitleShow: false,
  monthDropdownShow: false,
  dateDropdownShow: false,
  timeDropdownShow: false,
  optionDropdownShow: false,
  isAppendedTicket: false,
  classObject: {
    "show-ticket": false
  },
  labelTextList: {
    month: [],
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
    ],
    option: [
      {
        TICKET_ID: 4768,
        SELLING_PRICE: 12000,
        TICKET_NAME: "일반석",
        TICKET_CNT: 20,
        TICKET_SOLD_CNT: 0
      },
      {
        TICKET_ID: 4768,
        SELLING_PRICE: 10000,
        TICKET_NAME: "학생석",
        TICKET_CNT: 20,
        TICKET_SOLD_CNT: 0
      }
    ]
  },
  dateTicketList: [
    {
      PRICE: 35000,
      TICKET_TIME: "08:30:00",
      SELLING_PRICE: 10000,
      TICKET_VIEW_DATE: "2018년 08월 27일",
      TICKET_SOLD_CNT: 0,
      SALE_MAX: 10,
      TICKET_ID: 1,
      TICKET_SUB_NAME: "",
      TICKET_VIEW_TIME: "오전 08:30",
      TS_ID: 2030,
      TICKET_DATE: "2018-08-27",
      TICKET_NAME: "선착순 할인",
      TICKET_CNT: 20,
      SOLD_CNT: 1
    },
    {
      PRICE: 35000,
      TICKET_TIME: "15:30:00",
      SELLING_PRICE: 10000,
      TICKET_VIEW_DATE: "2018년 07월 27일",
      TICKET_SOLD_CNT: 0,
      SALE_MAX: 10,
      TICKET_ID: 2,
      TICKET_SUB_NAME: "",
      TICKET_VIEW_TIME: "오후 03:30",
      TS_ID: 2030,
      TICKET_DATE: "2018-07-27",
      TICKET_NAME: "노인네 할인",
      TICKET_CNT: 20,
      SOLD_CNT: 1
    },
    {
      PRICE: 35000,
      TICKET_TIME: "12:30:00",
      SELLING_PRICE: 500,
      TICKET_VIEW_DATE: "2018년 07월 28일",
      TICKET_SOLD_CNT: 0,
      SALE_MAX: 10,
      TICKET_ID: 3,
      TICKET_SUB_NAME: "",
      TICKET_VIEW_TIME: "오후 12:30",
      TS_ID: 2030,
      TICKET_DATE: "2018-07-28",
      TICKET_NAME: "청소년 할인",
      TICKET_CNT: 20,
      SOLD_CNT: 1
    },
    {
      PRICE: 35000,
      TICKET_TIME: "12:30:00",
      SELLING_PRICE: 10000,
      TICKET_VIEW_DATE: "2018년 07월 28일",
      TICKET_SOLD_CNT: 0,
      SALE_MAX: 10,
      TICKET_ID: 4,
      TICKET_SUB_NAME: "",
      TICKET_VIEW_TIME: "오후 12:30",
      TS_ID: 2030,
      TICKET_DATE: "2018-07-28",
      TICKET_NAME: "선착순 할인",
      TICKET_CNT: 20,
      SOLD_CNT: 1
    },
    {
      PRICE: 35000,
      TICKET_TIME: "19:30:00",
      SELLING_PRICE: 10000,
      TICKET_VIEW_DATE: "2018년 08월 29일",
      TICKET_SOLD_CNT: 0,
      SALE_MAX: 10,
      TICKET_ID: 5,
      TICKET_SUB_NAME: "",
      TICKET_VIEW_TIME: "오후 07:30",
      TS_ID: 2030,
      TICKET_DATE: "2018-08-29",
      TICKET_NAME: "선착순 할인",
      TICKET_CNT: 20,
      SOLD_CNT: 1
    },
    {
      PRICE: 35000,
      TICKET_TIME: "19:30:00",
      SELLING_PRICE: 10000,
      TICKET_VIEW_DATE: "2018년 09월 27일",
      TICKET_SOLD_CNT: 0,
      SALE_MAX: 10,
      TICKET_ID: 6,
      TICKET_SUB_NAME: "",
      TICKET_VIEW_TIME: "오후 07:30",
      TS_ID: 2030,
      TICKET_DATE: "2018-09-27",
      TICKET_NAME: "선착순 할인",
      TICKET_CNT: 20,
      SOLD_CNT: 1
    },
    {
      PRICE: 35000,
      TICKET_TIME: "19:30:00",
      SELLING_PRICE: 10000,
      TICKET_VIEW_DATE: "2018년 06월 27일",
      TICKET_SOLD_CNT: 0,
      SALE_MAX: 10,
      TICKET_ID: 7,
      TICKET_SUB_NAME: "",
      TICKET_VIEW_TIME: "오후 07:30",
      TS_ID: 2030,
      TICKET_DATE: "2018-06-27",
      TICKET_NAME: "선착순 할인",
      TICKET_CNT: 20,
      SOLD_CNT: 1
    },
    {
      PRICE: 35000,
      TICKET_TIME: "19:30:00",
      SELLING_PRICE: 10000,
      TICKET_VIEW_DATE: "2018년 07월 29일",
      TICKET_SOLD_CNT: 0,
      SALE_MAX: 10,
      TICKET_ID: 8,
      TICKET_SUB_NAME: "",
      TICKET_VIEW_TIME: "오후 07:30",
      TS_ID: 2030,
      TICKET_DATE: "2018-07-29",
      TICKET_NAME: "선착순 할인",
      TICKET_CNT: 20,
      SOLD_CNT: 1
    }
  ],
  sellingPrice: 0,
  choosedDateTicketList: []
};

export default {
  name: "date-ticket-popup",
  data: function() {
    return model;
  },
  computed: {
    monthLabelList() {
      let tmp = this.labelTextList["month"].map(
        val => `${val.YEAR}년 ${val.MONTH}월`
      );
      return tmp
        .reduce((a, b) => {
          if (a.indexOf(b) < 0) a.push(b);
          return a;
        }, [])
        .sort();
    },
    dateLabelList: {
      get: function() {
        return this.labelTextList["date"].map(
          val => `${val.TICKET_DAY}일 | ${val.TICKET_DAY_OF_WEEK}`
        );
      },
      set: function(newValue) {
        const dayOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
        let tmp = newValue.map(val => ({
          TICKET_DAY: val.DATE,
          TICKET_DAY_OF_WEEK: dayOfWeek[val.TICKET_DATE.getDay()] + "요일"
        }));
        this.labelTextList["date"] = this.removeDuplicatedVal(
          tmp,
          "TICKET_DAY"
        );
      }
    },
    timeLabelList: {
      get: function() {
        return this.labelTextList["time"].map(val => val.TICKET_VIEW_TIME);
      },
      set: function(newValue) {
        let tmp = newValue.map(val => ({
          TICKET_TIME: val.TICKET_TIME,
          TICKET_VIEW_TIME: val.TICKET_VIEW_TIME
        }));
        this.labelTextList["time"] = this.removeDuplicatedVal(
          tmp,
          "TICKET_TIME"
        );
      }
    },
    optionLabelList: {
      get: function() {return this.labelTextList["option"].map(
        val => ( {labelText: `${val.TICKET_NAME}|${val.SELLING_PRICE}원`,
                  TICKET_ID: val.TICKET_ID})
      );},
      set: function(newValue){
        let tmp = newValue.map(val => ({
          TICKET_ID: val.TICKET_ID,
          SELLING_PRICE: val.SELLING_PRICE,
          TICKET_NAME: val.TICKET_NAME,
          TICKET_CNT: val.TICKET_CNT,
          TICKET_SOLD_CNT: val.TICKET_SOLD_CNT
        }));
        this.labelTextList['option'] = this.removeDuplicatedVal(tmp, 'TICKET_ID');
      }
    },
    sumTotalPrice() {
      let result = this.totalPrice;
      return result;
    },
    totalPrice() {
      if(this.choosedDateTicketList.length > 0){
        let tmp = this.choosedDateTicketList.map(
          obj => obj.SELLING_PRICE * obj.SOLD_CNT
        );
        return tmp.reduce((prev, curr) => prev + curr);
      }
    }
  },
  methods: {
    showTicketPopup() {
      this.classObject["show-ticket"] = true;
      let sample = this.dateTicketList.map(item => new Date(item.TICKET_DATE));
      this.labelTextList["month"] = sample.map(val => ({
        TICKET_DATE: val,
        MONTH: val.getMonth() + 1,
        YEAR: val.getFullYear(),
        DATE: val.getDate()
      }));
    },
    closeTicketPopup() {
      this.classObject["show-ticket"] = false;
      this.dateTitleShow = false;
      this.timeTitleShow = false;
      this.optionTitleShow = false;
      this.monthDropdownShow = false;
      this.dateDropdownShow = false;
      this.timeDropdownShow = false;
      this.optionDropdownShow = false;
      this.monthTitle = "월을 입력하세요.";
      this.dateTitle = "날짜를 선택하세요.";
      this.timeTitle = "관람시간을 선택하세요.";
      this.optionTitle = "옵션을 선택하세요.";
      this.isAppendedTicket = false;
    },
    chooseDropdownLabel(labelText, key) {
      switch (key) {
        case "month":
          let searchKeyword = labelText
            .replace(/([0-9]*년)\s/, "")
            .replace("월", "");
          this.dateLabelList = this.labelTextList["month"].filter(
            val => searchKeyword == val.MONTH
          );
          this.monthTitle = labelText;
          this.dateTitleShow = true;
          this.timeTitleShow = false;
          this.optionTitleShow = false;
          this.dateTitle = "날짜를 선택하세요.";
          this.timeTitle = "관람시간을 선택하세요.";
          this.optionTitle = "옵션을 선택하세요.";
          break;
        case "date":
          searchKeyword = (this.monthTitle + labelText)
            .replace(/(\s.\s)+[가-핳]{2}일+$/, "")
            .replace(/[\s]|일/g, "")
            .replace(/년|월/g, "-");
          this.timeLabelList = this.dateTicketList.filter(
            val =>
              new Date(val.TICKET_DATE).valueOf() === new Date(searchKeyword).valueOf()
          );
          this.dateTitle = labelText;
          this.timeTitleShow = true;
          this.optionTitleShow = false;
          this.timeTitle = "관람시간을 선택하세요.";
          this.optionTitle = "옵션을 선택하세요.";
          break;
        case "time":
          searchKeyword = (this.monthTitle + this.dateTitle)
            .replace(/(\s.\s)+[가-핳]{2}일+$/, "")
            .replace(/[\s]|일/g, "")
            .replace(/년|월/g, "-");
          this.optionLabelList = this.dateTicketList
            .filter(
              val =>
                new Date(val.TICKET_DATE).valueOf() ===
                  new Date(searchKeyword).valueOf() &&
                labelText == val.TICKET_VIEW_TIME
            );
          this.timeTitle = labelText;
          this.optionTitleShow = true;
          this.optionTitle = "옵션을 선택하세요.";
          break;
        default:
          break;
      }
    },
    showDropdownPanel(labelText, ticketId){
      let tmp = this.dateTicketList.filter(val => val.TICKET_ID === ticketId);
      this.choosedDateTicketList = this.choosedDateTicketList.concat(tmp);
      console.log(`${labelText} ${ticketId}`);
      this.optionTitle = labelText;
      this.isAppendedTicket = true;
    },
    dropDowndisabled(key) {
      switch (key) {
        case "month":
          this.monthDropdownShow = !this.monthDropdownShow;
          this.dateDropdownShow = false;
          this.timeDropdownShow = false;
          this.optionDropdownShow = false;
          break;
        case "date":
          this.dateDropdownShow = !this.dateDropdownShow;
          this.timeDropdownShow = false;
          this.optionDropdownShow = false;
          break;
        case "time":
          this.timeDropdownShow = !this.timeDropdownShow;
          this.optionDropdownShow = false;
          break;
        case "option":
          this.optionDropdownShow = !this.optionDropdownShow;
          break;
        default:
          break;
      }
    },
    sellingPricePlus(k, c) {
      console.log(`${k} ${c}  plus`);
      this.choosedDateTicketList[k].SOLD_CNT = c;
      this.sellingPrice += this.choosedDateTicketList[k].SELLING_PRICE;
    },
    sellingPriceMinus(k, c) {
      console.log(`${k} ${c}  minus`);
      this.choosedDateTicketList[k].SOLD_CNT = c;
      if (this.sellingPrice == 0) return;
      this.sellingPrice -= this.choosedDateTicketList[k].SELLING_PRICE;
    },
    removePanel(k) {
      console.log(`${k} remove`);
      this.choosedDateTicketList.splice(k, 1);
      if(this.choosedDateTicketList.length <= 0){
        this.isAppendedTicket = false;
      }
    },
    removeDuplicatedVal(arr, key) {
      return arr.filter((arr1, i) => {
        return (
          arr.findIndex((arr2, j) => {
            return arr1[key] == arr2[key];
          }) === i
        );
      });
    }
  },
  components: { Dropdown, DropdownPanel, OptionDropdown }
};
