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
                                <dropdown-panel :date-ticket-text="dateTicket" v-for="(dateTicket, index) in choosedDateTicketList" :key="index" @plus="sellingPricePlus" @minus="sellingPriceMinus" @remove="removePanel"></dropdown-panel>
                        </div>
                        <div id="selector-container">
                            <dropdown key="month" :title-message="monthTitle" :drop-down-show="monthDropdownShow" :title-show="monthTitleShow" :label-text-list="monthLabelList" @choose="chooseDropdownLabel" @disabled="dropDowndisabled"></dropdown>
                            <dropdown key="date" :title-message="dateTitle" :drop-down-show="dateDropdownShow" :title-show="dateTitleShow" :label-text-list="dateLabelList" @choose="chooseDropdownLabel" @disabled="dropDowndisabled"></dropdown>
                            <dropdown key="time" :title-message="timeTitle" :drop-down-show="timeDropdownShow" :title-show="timeTitleShow" :label-text-list="timeLabelList" @choose="chooseDropdownLabel" @disabled="dropDowndisabled"></dropdown>
                            <option-dropdown key="option" :title-message="optionTitle" :drop-down-show="optionDropdownShow" :title-show="optionTitleShow" :label-text-list="optionLabelList" @optionChoose="showDropdownPanel" @disabled="dropDowndisabled"></option-dropdown>
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

<script src="../js/DateTicketPopup.js">
</script>
