<template>
  <div class="container">
    <div class="title">{{ $t('INDEX_TITLE') }}</div>
    <div class="title_default" v-html="$t('INDEX_TITLE_DEFAULT_1')"></div>
    <div class="desc">{{ $t('INDEX_DESC_1') }}</div>
    <SvgIcon iconClass="desc" class="desc_logo"></SvgIcon>
    <div class="container_item">
      <div class="container_item_icon">
        <el-image src="./assets/images/sso.png"></el-image>
      </div>
      <div class="container_item_text">
        <div class="container_item_text_title sso">{{ $t('INDEX_ITEM1_TITLE') }}</div>
        <ul>
          <li class="container_item_text_desc color1"><span>{{ $t('INDEX_ITEM1_CHILD_1') }}</span></li>
          <li class="container_item_text_desc color1"><span>{{ $t('INDEX_ITEM1_CHILD_2') }}</span></li>
          <li class="container_item_text_desc color1"><span>{{ $t('INDEX_ITEM1_CHILD_3') }}</span></li>
        </ul>
      </div>
    </div>
    <div class="container_item">
      <div class="container_item_text" style="margin-left: 0;margin-right: 64px;">
        <div class="container_item_text_title b2b">{{ $t('INDEX_ITEM2_TITLE') }}</div>
        <ul>
          <li class="container_item_text_desc color2"><span>{{ $t('INDEX_ITEM2_CHILD_1') }}</span></li>
          <li class="container_item_text_desc color2"><span>{{ $t('INDEX_ITEM2_CHILD_2') }}</span></li>
          <li class="container_item_text_desc color2"><span>{{ $t('INDEX_ITEM2_CHILD_3') }}</span></li>
        </ul>
      </div>
      <div class="container_item_icon">
        <el-image src="./assets/images/b2b.png"></el-image>
      </div>
    </div>
    <div class="container_item">
      <div class="container_item_icon">
        <el-image src="./assets/images/ecology.png"></el-image>
      </div>
      <div class="container_item_text">
        <div class="container_item_text_title ecology">{{ $t('INDEX_ITEM3_TITLE') }}</div>
        <ul>
          <li class="container_item_text_desc color3"><span>{{ $t('INDEX_ITEM3_CHILD_1') }}</span></li>
          <li class="container_item_text_desc color3"><span>{{ $t('INDEX_ITEM3_CHILD_2') }}</span></li>
          <li class="container_item_text_desc color3"><span>{{ $t('INDEX_ITEM3_CHILD_3') }}</span></li>
        </ul>
      </div>
    </div>
    <div class="ecosphere_bg">
      <div class="title_default width marginTop80" v-html="$t('INDEX_TITLE_DEFAULT_2')"></div>
      <div class="desc">{{ $t('INDEX_DESC_2') }}</div>
      <SvgIcon iconClass="desc" class="desc_logo marginTop48"></SvgIcon>
      <div class="ecosphere">
        <div class="text text1" :class="{ 'entext en_text1': lang == 'en' }">{{ $t('ECOSPHERE_ITEM1') }}</div>
        <div class="text text2" :class="{ 'entext en_text2': lang == 'en' }">{{ $t('ECOSPHERE_ITEM2') }}</div>
        <div class="text text3" :class="{ 'entext en_text3': lang == 'en' }">{{ $t('ECOSPHERE_ITEM3') }}</div>
        <div class="text text4" :class="{ 'entext en_text4': lang == 'en' }">{{ $t('ECOSPHERE_ITEM4') }}</div>
        <div class="text text5" :class="{ 'entext en_text5': lang == 'en' }">{{ $t('ECOSPHERE_ITEM5') }}</div>
        <div class="text text6" :class="{ 'entext en_text6': lang == 'en' }">{{ $t('ECOSPHERE_ITEM6') }}</div>
        <div class="text text7" :class="{ 'entext en_text7': lang == 'en' }">{{ $t('ECOSPHERE_ITEM7') }}</div>
        <div class="text text8" :class="{ 'entext en_text8': lang == 'en' }">{{ $t('ECOSPHERE_ITEM8') }}</div>
      </div>
    </div>
    <div class="productbenefits">
      <div class="productbenefits_text">
        <div class="productbenefits_text_title" :class="{ 'marginTop40': lang == 'en' }">{{ $t('PRODUCTBENEFITS_TITLE') }}
        </div>
        <ul>
          <li><span>{{ $t('PRODUCTBENEFITS_ITEM1') }}</span></li>
          <li><span>{{ $t('PRODUCTBENEFITS_ITEM2') }}</span></li>
          <li><span>{{ $t('PRODUCTBENEFITS_ITEM3') }}</span></li>
        </ul>
      </div>
    </div>
    <div class="start">
      <div class="title_default marginTop80" v-html="$t('INDEX_TITLE_DEFAULT_3')"></div>
      <SvgIcon iconClass="desc" class="desc_logo marginTop48"></SvgIcon>
      <div class="start_btn blue">{{ $t('START_BTN_1') }}</div>
      <SvgIcon iconClass="union_down" class="start_down"></SvgIcon>
      <div class="start_title">{{ $t('START_TITLE') }}</div>
      <SvgIcon iconClass="union_down" class="start_down"></SvgIcon>
      <div class="start_desc">{{ $t('START_DESC_1') }}</div>
      <SvgIcon iconClass="union_down" class="start_down"></SvgIcon>
      <div class="start_desc">{{ $t('START_DESC_2') }}</div>
      <SvgIcon iconClass="union_down" class="start_down"></SvgIcon>
      <div class="start_desc">{{ $t('START_DESC_3') }}</div>
      <SvgIcon iconClass="union_down" class="start_down"></SvgIcon>
      <div class="start_desc">{{ $t('START_DESC_4') }}</div>
      <SvgIcon iconClass="union_down" class="start_down"></SvgIcon>
      <div class="start_btn yellow">{{ $t('START_BTN_2') }}</div>
    </div>
    <div class="title_default marginTop80" v-html="$t('INDEX_TITLE_DEFAULT_4')"></div>
    <SvgIcon iconClass="desc" class="desc_logo marginTop48"></SvgIcon>
    <div class="reason">
      <div class="reason_item">
        <div class="reason_item_text">
          <div class="reason_item_text_title">{{ $t('REASON_ITEM1_TITLE') }}</div>
          <div class="reason_item_text_desc">{{ $t('REASON_ITEM1_DESC') }}</div>
        </div>
        <div class="reason_item_icon">
          <el-image src="./assets/images/reason_1.png"></el-image>
        </div>
      </div>
      <div class="reason_item">
        <div class="reason_item_icon">
          <el-image src="./assets/images/reason_2.png"></el-image>
        </div>
        <div class="reason_item_text">
          <div class="reason_item_text_title">{{ $t('REASON_ITEM2_TITLE') }}</div>
          <div class="reason_item_text_desc">{{ $t('REASON_ITEM2_DESC') }}</div>
        </div>
      </div>
      <div class="reason_item">
        <div class="reason_item_text">
          <div class="reason_item_text_title">{{ $t('REASON_ITEM3_TITLE') }}</div>
          <div class="reason_item_text_desc">{{ $t('REASON_ITEM3_DESC') }}</div>
        </div>
        <div class="reason_item_icon">
          <el-image src="./assets/images/reason_3.png"></el-image>
        </div>
      </div>
      <div class="reason_item">
        <div class="reason_item_icon">
          <el-image src="./assets/images/reason_4.png"></el-image>
        </div>
        <div class="reason_item_text">
          <div class="reason_item_text_title">{{ $t('REASON_ITEM4_TITLE') }}</div>
          <div class="reason_item_text_desc">{{ $t('REASON_ITEM4_DESC') }}</div>
        </div>
      </div>
    </div>
  </div>
  <LayoutFooter></LayoutFooter>
</template>
<script lang="ts">
import { defineComponent, ref, } from "vue";
import { useStore } from 'vuex';
import LayoutFooter from '@/components/LayoutFooter/index.vue';
export default defineComponent({
  components: {
    LayoutFooter
  },
  setup(props) {
    const store = useStore();
    let lang = ref(store.state.lang);
    return {
      lang
    };
  }
});
</script>
<style lang="scss" scoped>
@mixin textCenter() {
  text-align: center;
}

.container {
  width: 100vw;
  background: url('@/assets/images/index_bg.png') no-repeat top -2px center;
  background-size: 100vw auto;

  .title {
    @include fontStyle(64px, var(--layoutTextColor), 400);
    @include textCenter();
    padding-top: 200px;
  }

  .title_default {
    @include fontStyle(48px, var(--layoutTextColor), 600);
    @include textCenter();
    margin-top: 32px;

    ::v-deep(span) {
      color: var(--layoutTextColor_lightBlue)
    }
  }

  .desc {
    @include fontStyle(24px, var(--layoutTextColor_mini), 400);
    @include textCenter();
    margin: 24px auto auto;
    max-width: 1200px;
  }

  .desc_logo {
    width: auto !important;
    height: 7px !important;
    display: block;
    margin: 32px auto 0;
  }

  &_item {
    @include flex(row, center, center);
    width: 1200px;
    margin: 120px auto;

    ul {
      margin-left: 20px;
    }

    &_icon {
      flex: 1;

      .el-image {
        width: 640px;

        image {
          width: 100%;
        }
      }
    }

    &_text {
      @include flex(column, center, flex-start);
      width: 496px;
      margin-left: 64px;

      &_title {
        padding: 8px 18px;
        border-radius: 8px;
        margin-bottom: 16px;
      }

      &_desc {
        @include fontStyle(20px, var(--layoutTextColor_small), 400);
        line-height: 30px;
        margin: 8px 0;

        &.color1 {
          color: var(--mark-diot-color-1);
        }

        &.color2 {
          color: var(--mark-diot-color-2);
        }

        &.color3 {
          color: var(--mark-diot-color-3);
        }

        span {
          color: var(--layoutTextColor);
        }
      }
    }
  }
}

.sso {
  border: 1px solid var(--border-color-1);
  background: var(----mark-bg-color-1);
  @include fontStyle(28px, var(--mark-text-color-1), 400);
}

.b2b {
  border: 1px solid var(--border-color-2);
  background: var(----mark-bg-color-2);
  @include fontStyle(28px, var(--mark-text-color-2), 400);
}

.ecology {
  border: 1px solid var(--border-color-3);
  background: var(----mark-bg-color-3);
  @include fontStyle(28px, var(--mark-text-color-3), 400);
}

.width {
  width: 750px;
  margin: 0 auto;
}

.ecosphere {
  background: url('@/assets/images/ecosphere.jpg') no-repeat;
  background-size: 1200px 543px;
  width: 1200px;
  height: 543px;
  margin: 80px auto 0;
  position: relative;

  .text {
    @include fontStyle(24px, var(--layoutTextColor), 700);
    position: absolute;
    z-index: 1;

    &.text1 {
      top: 67px;
      left: 247px;
    }

    &.text2 {
      top: 40px;
    }

    &.text3 {
      top: 61px;
      left: 873px;
    }

    &.text4 {
      top: 122px
    }

    &.text5 {
      top: 196px;
    }

    &.text6 {
      top: 275px;
    }

    &.text7 {
      top: 375px;
    }

    &.text8 {
      top: 458px;
    }

    &.text2,
    &.text4,
    &.text5,
    &.text6,
    &.text7,
    &.text8 {
      left: 50%;
      transform: translateX(-50%);
    }

    &.en_text1 {
      top: 50px;
      left: 240px;
    }

    &.en_text2 {
      top: 16px;
    }

    &.en_text3 {
      top: 45px;
      left: 794px;
    }

    &.en_text4 {
      top: 125px;
    }

    &.en_text5 {
      top: 205px;
    }

    &.en_text6 {
      top: 285px;
    }

    &.text7 {
      top: 380px;
    }

    &.text8 {
      top: 463px;
    }
  }

  .entext {
    @include fontStyle(18px, var(--layoutTextColor), 700);
  }
}

.productbenefits {
  width: 100vw;
  margin: 100px auto 0;
  background: url('@/assets/images/productbenefits_bg.png') no-repeat;
  background-size: 100vw auto;
  padding-bottom: 90px;
  padding-top: 90px;

  .el-image {
    width: 100%;

    image {
      width: 100%;

    }
  }

  &_text {
    width: 1200px;
    height: 480px;
    background: url('@/assets/images/productbenefits.png') no-repeat;
    background-size: 100% auto;
    margin: 0 auto;

    &_title {
      @include fontStyle(48px, var(--layoutTextColor), 400);
      margin-left: 48px;
      padding-top: 90px;
      margin-bottom: 24px;
    }

    ul {
      color: var(--product-diot-color);
      width: 540px;
      padding-left: 65px;

      li {
        margin-bottom: 10px;
        line-height: 30px;

        span {
          @include fontStyle(20px, var(--layoutTextColor_small), 400);
        }
      }
    }

  }
}

.reason {
  width: 100vw;
  padding-bottom: 120px;

  &_item {
    width: 1200px;
    border: 2px solid var(--el-border-color);
    border-radius: 12px;
    @include flex(row, center, center);
    margin: 40px auto 0;

    &_icon {
      width: 644px;
    }

    &_text {
      flex: 1;
      @include flex(column, center, flex-start);
      padding: 30px;

      &_title {
        @include fontStyle(36px, var(--layoutTextColor), 400);
        margin-bottom: 5px;
      }

      &_desc {
        @include fontStyle(20px, var(--layoutTextColor-grey), 400);
        line-height: 36px;
      }
    }

    &:last-child {
      &_icon {
        width: 598px;
      }
    }
  }
}

.start {
  background: url('@/assets/images/start_bg.png') no-repeat;
  background-size: 100vw auto;
  text-align: center;
  padding-top: 60px;
  padding-bottom: 80px;

  &_btn {
    width: 183px;
    height: 64px;
    border-radius: 26px;
    margin: 0 auto;
    line-height: 64px;
    @include fontStyle(24px, var(--layoutTextColor), 700);
  }

  &_title {
    @include fontStyle(32px, var(--layoutTextColor), 400);
    line-height: 47px;
  }

  &_desc {
    @include fontStyle(20px, var(--layoutTextColor_mini), 400);
    line-height: 30px;
    max-width: 1200px;
    margin: 0 auto;
  }

  &_down {
    font-size: 24px;
    margin: 16px auto;
    display: block;
  }

  .blue {
    background: linear-gradient(to right, rgba(36, 142, 240, 1), rgba(24, 211, 223, 1));
    margin-top: 40px;
  }

  .yellow {
    background: linear-gradient(to right, rgba(224, 130, 78, 1), rgba(240, 185, 78, 1));
  }
}

.marginTop80 {
  margin-top: 80px !important;
}

.marginTop48 {
  margin-top: 48px !important;
}

.ecosphere_bg {
  width: 100vw;
  background: url('@/assets/images/ecosphere_bg.png') no-repeat top center;
  background-size: 100vw;
  padding-bottom: 40px;
}

.marginTop40 {
  padding-top: 40px !important;
}</style>