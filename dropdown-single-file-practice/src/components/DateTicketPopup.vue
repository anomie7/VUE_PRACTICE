 <template>
  <div id="app">
        <div @click="showTicketPopup">구매하기</div>
        <div id="popup-date-ticket" class="popup" :class="classObject" @click.self="closeTicketPopup">
            <div id="dateticket-scroll-hider" :class="{'appended-ticket-panel': isAppendedTicket}">
                <div class="bar-button-left btn-ticket-close" @click="closeTicketPopup">
                    <img src="../assets/images/front/ic_cancel_square_dark.svg" />
                </div>
                <div class="ticket-text-container">
                    티켓 선택
                </div>
                <div class="total-wrapper" style="display: block;" v-show="isAppendedTicket">
                    선택한 총 티켓금액 &nbsp;&nbsp;
                    <span class="total-won">원</span>
                    <div class="total-price">{{sumTotalPrice}}</div>
                </div>
                <div class="ticket-horizontal-line">
                </div>
                <div class="ticket-wrapper">
                    <form action="/orderPayments" method="post" id="date-ticket-form">
                        <input type="hidden" id="date-popup-item-id" name="item_id" value="" />
                        <div class="dateticket-list" style="display: none;" v-show="isAppendedTicket">
                                <dropdown-panel :date-ticket-text="dateTicket" v-for="(dateTicket, index) in dateTicketList" :key="index" @plus="sellingPricePlus" @minus="sellingPriceMinus"></dropdown-panel>
                        </div>
                        <div id="selector-container">
                            <dropdown key="month" :title-message="monthTitle" :drop-down-show="monthDropdownShow" :title-show="monthTitleShow" :label-text-list="monthLabelList" @choose="chooseDropdownLabel" @disabled="dropDowndisabled"></dropdown>
                            <dropdown key="date" :title-message="dateTitle" :drop-down-show="dateDropdownShow" :title-show="dateTitleShow" :label-text-list="dateLabelList" @choose="chooseDropdownLabel" @disabled="dropDowndisabled"></dropdown>
                            <dropdown key="time" :title-message="timeTitle" :drop-down-show="timeDropdownShow" :title-show="timeTitleShow" :label-text-list="timeLabelList" @choose="chooseDropdownLabel" @disabled="dropDowndisabled"></dropdown>
                            <dropdown key="option" :title-message="optionTitle" :drop-down-show="optionDropdownShow" :title-show="optionTitleShow" :label-text-list="optionLabelList" @choose="chooseDropdownLabel" @disabled="dropDowndisabled"></dropdown>
                        </div>
                    </form>
                </div>
                <div class="buttons">
                    <button type="button" id="date-ticket-submit" class="btn-max-blue" onclick="ticketSaleSubmit('#date-ticket-form');">구매하기</button>
                </div>
            </div>
        </div>
    </div>
 </template>

<script>
import Dropdown from "./Dropdown";
import DropdownPanel from "./DropdownPanel";

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
        TICKET_TIME: "19:30:00",
        SELLING_PRICE: 10000,
        TICKET_VIEW_DATE: "2018년 07월 27일",
        TICKET_SOLD_CNT: 0,
        SALE_MAX: 10,
        TICKET_ID: 5444,
        TICKET_SUB_NAME: "",
        TICKET_VIEW_TIME: "오후 07:30",
        TS_ID: 2030,
        TICKET_DATE: "2018-07-27",
        TICKET_NAME: "선착순 할인",
        TICKET_CNT: 20
      }
    ],
    sellingPrice: 0
  }
export default {
    name: 'date-ticket-popup',
    data: function(){
      return model},
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
    },
    optionLabelList() {
      return this.labelTextList["option"].map(
        val => `${val.TICKET_NAME}|${val.SELLING_PRICE}원`
      );
    },
    sumTotalPrice(){
      let result = this.totalPrice + this.sellingPrice;
      if(result <= this.totalPrice) return this.totalPrice;
      return result;
    },
    totalPrice(){
      return this.dateTicketList.map( obj => obj.SELLING_PRICE)
                                        .reduce((prev, curr) => prev + curr);
    }
  },
  methods: {
    showTicketPopup() {
      this.classObject["show-ticket"] = true;
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
          this.monthTitle = labelText;
          this.dateTitleShow = true;
          this.timeTitleShow = false;
          this.optionTitleShow = false;
          this.dateTitle = "날짜를 선택하세요.";
          this.timeTitle = "관람시간을 선택하세요.";
          this.optionTitle = "옵션을 선택하세요.";
          break;
        case "date":
          this.dateTitle = labelText;
          this.timeTitleShow = true;
          this.optionTitleShow = false;
          this.timeTitle = "관람시간을 선택하세요.";
          this.optionTitle = "옵션을 선택하세요.";
          break;
        case "time":
          this.timeTitle = labelText;
          this.optionTitleShow = true;
          this.optionTitle = "옵션을 선택하세요.";
          break;
        case "option":
          this.optionTitle = labelText;
          this.isAppendedTicket = true;
          break;
        default:
          break;
      }
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
    sellingPricePlus(k){
      console.log(`${k}  plus`);
      this.sellingPrice +=  this.dateTicketList[k].SELLING_PRICE;
    },
    sellingPriceMinus(k){
      console.log(`${k}  minus`);
      if( this.sellingPrice  <= this.totalPrice) return;
      this.sellingPrice -=  this.dateTicketList[k].SELLING_PRICE;
    }
  },
  components: {Dropdown, DropdownPanel}
  }
</script>
