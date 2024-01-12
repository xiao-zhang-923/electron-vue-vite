<template>
  <div class="footer">
    <div class="footer_left">
      <div class="h1">{{ $t('FOOTER_HElPCENTER') }}</div>
      <div class="h5">{{ $t('FOOTER_MANUAL') }}</div>
    </div>
    <div class="footer_right">
      <div class="h1">{{ $t('FOOTER_CONRTACT') }}</div>
      <div class="h5">{{ $t('FOOTER_EMAIL') }}dpi@deltaphone.com.cn<span>|</span>{{ $t('FOOTER_TIME') }}</div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: "LayoutFooter",
  setup(props, ctx) {

  },
})
</script>
<style lang="scss" scoped>
.footer {
  width: 100%;
  height: 219px;
  margin: 0 auto;
  background-color: var(--layoutFooterBgColor);
  @include flex(row, center, center);

  .footer_left,
  .footer_right {
    .h1 {
      @include fontStyle(24px, var(--layoutFooterTextColor), 400)
    }
    .h5{
      @include fontStyle(14px, var(--layoutFooterTextColor_mini), 400);
      margin-top:16px;
      span{
        padding: 0 16px;
      }
    }
  }
  .footer_right{
    margin-left: 300px;
  }
}
</style>
