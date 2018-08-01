export default {
    name: 'dropdown-panel',
    data: function() {
      return {
        soldCnt: 1
      };
    },
    props: {
      dateTicketText: {
        type: Object,
        required: true
      }
    },
    methods: {
      dateTicketRemove() {
        this.$emit('remove', this.$vnode.key);
        return;
      },
      sellingPriceMinus(){
        this.soldCnt <= 1? this.soldCnt = 1 : this.soldCnt--;
        this.$emit('minus', this.$vnode.key, this.soldCnt);
      },
      sellingPricePlus(){
        this.soldCnt++
        this.$emit('plus', this.$vnode.key, this.soldCnt);
      }
    }
  }