<template>
    <div class="dateticket-panel">
        <div class="dateticket-panel-body">
            <div class="dateTicket-remove" @click="dateTicketRemove">
                <img class="ic-cancel-pink" src="../assets/images/front/ic_cancel_pink.svg">
            </div>
            <div class="dateticket-name">{{dateTicketText.TICKET_NAME}}</div>
            <div class="dateticket-date">{{dateTicketText.TICKET_VIEW_DATE }} {{dateTicketText.TICKET_VIEW_TIME}}</div>
            <div class="dateticket-sub-name">{{dateTicketText.TICKET_SUB_NAME}}</div>
            <div class="dateticket-price-wrapper"><del class="dateticket_price">{{dateTicketText.PRICE}}원&nbsp;</del>&nbsp;&nbsp;<span class="dateticket-selling-price">{{dateTicketText.SELLING_PRICE}}</span>원</div>
        </div>
        <div class="dateticket-btn-wrapper">	
            <button class="btn btn-link dateticket-cnt-minus" @click.prevent="sellingPriceMinus"><img class="dateticekt-amount-btn" src="../assets/images/front/ic_minus_gray.svg"></button>
            <label class="dateticket-sold-cnt-label">1</label>
            <button class="btn btn-link dateticket-cnt-plus" @click.prevent="sellingPricePlus"><img class="dateticekt-amount-btn" src="../assets/images/front/ic_plus_gray.svg"></button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'dropdown-panel',
  data: function() {
    return {};
  },
  props: {
    dateTicketText: {
      type: Object,
      required: true
    }
  },
  methods: {
    dateTicketRemove() {
      return;
    },
    sellingPriceMinus(){
      this.$emit('minus', this.$vnode.key);
    },
    sellingPricePlus(){
      this.$emit('plus', this.$vnode.key);
    }
  }
}
</script>