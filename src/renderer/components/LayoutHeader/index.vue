<template>
  <div class="pass_header">
    <div class="icon">
      <SvgIcon name="platIcon"></SvgIcon>
      <span>EASE-PAAS</span>
    </div>
    <div class="menu">
      <div class="menuList">
        <el-popover placement="bottom-start" width="auto" trigger="hover">
          <template #reference>
            <div class="menuItem" @click="clickTabs('1', '/')" :class="{ active: activeMenu === '1' }"><span>{{
              $t("LAYOUTHEADER_MENU_PRODUCTS") }}</span>
            </div>
          </template>
          <template #default>
            <div class="counter">
              <div class="payAndService">
                <div class="counter_title">{{ $t('HEADER_CHILD_MENU1_TITLE') }}</div>
                <div class="counter_item">
                  <SvgIcon name="development"></SvgIcon>
                  <span>{{ $t('HEADER_CHILD_MENU1_ITEM_1') }}</span>
                </div>
                <div class="counter_item">
                  <SvgIcon name="sourceCode"></SvgIcon>
                  <span>{{ $t('HEADER_CHILD_MENU1_ITEM_2') }}</span>
                </div>
                <div class="counter_item">
                  <SvgIcon name="ecologicalApp"></SvgIcon>
                  <span>{{ $t('HEADER_CHILD_MENU1_ITEM_3') }}</span>
                </div>
              </div>
              <div class="app">
                <div class="counter_title">{{ $t('HEADER_CHILD_MENU2_TITLE') }}</div>
                <div class="counter_item hover">
                  <SvgIcon name="IAM"></SvgIcon>
                  <span>{{ $t('HEADER_CHILD_MENU2_ITEM_1') }}</span>
                </div>
                <div class="counter_item hover">
                  <SvgIcon name="doublecarbon"></SvgIcon>
                  <span>{{ $t('HEADER_CHILD_MENU2_ITEM_2') }}</span>
                </div>
                <div class="counter_item hover">
                  <SvgIcon name="ESG"></SvgIcon>
                  <span>{{ $t('HEADER_CHILD_MENU2_ITEM_3') }}</span>
                </div>
              </div>
            </div>
          </template>
        </el-popover>
        <div class="menuItem" @click="clickTabs('2', 'https://baidu.com')" :class="{ active: activeMenu === '2' }">
          <span>{{
            $t("LAYOUTHEADER_MENU_DOCUMENTS") }}</span>
        </div>
        <div class="menuItem" @click="clickTabs('3', '/prices')" :class="{ active: activeMenu === '3' }"><span>{{
          $t("LAYOUTHEADER_MENU_PRICES") }}</span>
        </div>
        <div class="menuItem" @click="clickTabs('4', '/contact')" :class="{ active: activeMenu === '4' }"><span>{{
          $t("LAYOUTHEADER_MENU_CONTACTS") }}</span>
        </div>
      </div>
    </div>
    <div class="login">
      <div class="language">
        <SvgIcon name="language_zh" v-if="lang == 'zh'" @click="currentLanuage('en')"></SvgIcon>
        <SvgIcon name="language_en" v-if="lang == 'en'" @click="currentLanuage('zh')"></SvgIcon>
        <!-- <el-popover placement="bottom" :width="100" trigger="hover">
          <template #reference>
            <span class="language_title">
              <svg-icon icon-class="language"></svg-icon>
              <span>{{ getLanguageName(lang) }}</span>
            </span>
          </template>
          <template #default>
            <div class="language_item" @click="currentLanuage('zh')">{{ $t('LANGUAGE_ZH') }}</div>
            <div class="language_item" @click="currentLanuage('en')">{{ $t('LANGUAGE_EN') }}</div>
            <div class="language_item" @click="currentLanuage('ja')">{{ $t('LANGUAGE_JA') }}</div>
          </template>
        </el-popover> -->
      </div>
      <div class="layout_button">{{ $t('BUTTON_START') }}</div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, reactive, toRefs, watch } from "vue";
import { useStore } from 'vuex';
import { useRouter, useRoute } from 'vue-router';
import { useI18n } from "vue-i18n";
export default defineComponent({
  name: "LayoutHeader",
  setup(props) {
    const { t } = useI18n();
    const router = useRouter();
    const route = useRoute();
    const store = useStore()
    const languageMap = {
      'zh': t('LANGUAGE_ZH'),
      'en': t('LANGUAGE_EN'),
      'ja': t('LANGUAGE_JA'),
    }
    const state = reactive({
      activeMenu: "1",
    })
    let lang = ref(store.state.lang);
    const { locale } = useI18n();
    const currentLanuage = (val: string) => {
      // locale.value = val;
      // lang.value = val;
      store.commit("setLang", val);
      window.location.reload();
    };

    const getLanguageName = (val: string) => {
      return languageMap[val]
    }
    const clickTabs = (val: string, path: string) => {
      state.activeMenu = val == '2' ? '1' : val;
      if (path.includes('http')) {
        window.open(path, '_blank')
      } else {
        router.push({
          path,
        })
      }
    }
    watch(() => route, (val) => {
      if (val.name == 'index') {
        state.activeMenu = '1'
      }
      if (val.name == 'prices') {
        state.activeMenu = '3'
      }
      if (val.name == 'contact') {
        state.activeMenu = '4'
      }
    }, {
      immediate: true,
      deep: true
    })
    return {
      getLanguageName, lang, currentLanuage, ...toRefs(state), clickTabs
    }
  }
})
</script>
<style lang="scss" scoped>
.pass_header {
  @include flex(row, center, center);
  background-color: var(--layoutHeaderBgColor);
  height: 80px;
  width: 100vw;

  .icon {
    @include flex(row, center, center);
    margin-left: 40px;

    .svg-icon {
      font-size: 36px;
    }

    span {
      @include fontStyle(36px, var(--layoutTextColor), 700);
      margin-left: 24px;
    }
  }

  .menu {
    flex: 1;
    height: inherit;

    .menuList {
      @include flex(row, center, center);
      height: inherit;

      .menuItem {
        @include fontStyle(20px, var(--layoutTextColor_small), 400);
        cursor: pointer;
        padding: 0 24px;
        height: inherit;

        span {
          display: block;
          box-sizing: border-box;
          line-height: 80px;
          height: inherit;
        }

        &.active {
          span {
            color: var(--layoutHeaderTextActiveColor);
            border-bottom: 4px solid var(--layoutHeaderMenuActiveBorder);
          }
        }
      }
    }
  }

  .login {
    @include flex(row, center, center);

    .language {
      cursor: pointer;
      .svg-icon {
        margin-right: 5px;
        width: 40px !important;
        height: 50px !important;
      }
    }

    .layout_button {
      margin-right: 40px;
      margin-left: 24px;
      height: 40px;
      border-radius: 4px;
      padding: 0 24px;
      width: 70px;
      background: var(--btn-bg-color);
      @include fontStyle(16px, var(--layoutTextColor), 400);
      line-height: 40px;
      letter-spacing: 0.5px;
      cursor: pointer;
      text-align: center;
    }
  }
}

.counter {
  @include flex(row, flex-start, flex-start);
  min-width: 430px;

  .payAndService {
    background: url('@/assets/images/payAndService_bg.jpg') no-repeat top center;
    background-size: 100% 100%;
    min-width: 250px;
    height: 186px;
  }

  &_title {
    @include fontStyle(18px, var(--layoutTextColor), 400);
    margin: 16px auto 8px 24px;
  }

  &_item {

    @include flex(row, flex-start, center);
    height: 32px;
    margin-left: 24px;
    margin-bottom: 2px;

    span {
      margin-left: 5px;
      @include fontStyle(14px, var(--layoutTextColor), 400);
    }
  }

  .app {
    flex: 1;
  }
}

.hover {
  border-radius: 4px;
  padding-left: 8px;
  cursor: pointer;

  &:hover {
    background: var(--headerMenuHoverBgColor);
  }
}

.language_item {
  height: 48px;
  line-height: 48px;
  @include fontStyle(16px, var(--layoutTextColor), 400);
  text-align: center;
  cursor: pointer;
}
</style>
