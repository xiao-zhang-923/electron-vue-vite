<template>
  <div class="prices">
    <div class="prices_title">{{ $t('PRICES_TITLE') }}</div>
    <div class="prices_desc">{{ $t('PRICES_DESC') }}</div>
    <div class="prices_list">
      <div class="prices_list_item" v-for="item in list" :key="item.id">
        <div class="prices_list_item_head">
          <div class="prices_list_item_title">{{ item.title }}</div>
          <div class="prices_list_item_price" v-if="item.id == 'basic'">¥0</div>
          <div class="prices_list_item_desc"
            :class="{ 'basic': item.id == 'basic', 'enterprise': item.id == 'enterprise', 'customized': item.id == 'customized', 'en_desc': ['enterprise', 'customized'].includes(item.id) && lang == 'en' }">
            {{ item.desc }}</div>
        </div>
        <div class="line"></div>
        <ul class="prices_list_item_ul">
          <li class="prices_list_item_ul_li" v-for="(its, index) in item.child" :key="its">
            <SvgIcon name="five-pointed"  color='var(--color1)' v-if="['enterprise', 'customized'].includes(item.id) && index == 0">
            </SvgIcon>
            <SvgIcon name="check-mark" v-else></SvgIcon>
            <span :class="{ 'cyan': ['enterprise', 'customized'].includes(item.id) && index == 0 }">{{ its }}</span>
          </li>
        </ul>
        <div class="prices_list_item_footer">
          <div class="btn" @click="clickContact(item.id)"
            :class="{ 'basicBtn': item.id == 'basic', 'enterpriseBtn': item.id == 'enterprise', 'customizedBtn': item.id == 'customized' }">
            {{ item.btn }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, ref } from 'vue';
import { useStore } from 'vuex';
import i18n from '@/locals';
import { useRouter } from 'vue-router';
export default defineComponent({
  name: 'pirces',
  setup(props, ctx) {
    const router = useRouter()
    const store = useStore();
    const { t } = i18n.global;
    let lang = ref(store.state.lang);
    const state = reactive({
      list: [
        {
          title: t('PRICES_BASIC_TITLE'), desc: t('PRICES_BASIC_DESC'), child: [
            t('PRICES_BASIC_LIST_ITEM1'),
            t('PRICES_BASIC_LIST_ITEM2'),
            t('PRICES_BASIC_LIST_ITEM3'),
            t('PRICES_BASIC_LIST_ITEM4'),
            t('PRICES_BASIC_LIST_ITEM5'),
            t('PRICES_BASIC_LIST_ITEM6'),
            t('PRICES_BASIC_LIST_ITEM7'),
          ], btn: t('PRICES_BASIC_BUTTON'), id: "basic"
        }, {
          title: t('PRICES_ENTERPRISE_TITLE'), desc: t('PRICES_ENTERPRISE_DESC'), child: [
            t('PRICES_ENTERPRISE_LIST_ITEM1'),
            t('PRICES_ENTERPRISE_LIST_ITEM2'),
            t('PRICES_ENTERPRISE_LIST_ITEM3'),
            t('PRICES_ENTERPRISE_LIST_ITEM4'),
            t('PRICES_ENTERPRISE_LIST_ITEM5'),
            t('PRICES_ENTERPRISE_LIST_ITEM6'),
            t('PRICES_ENTERPRISE_LIST_ITEM7'),
            t('PRICES_ENTERPRISE_LIST_ITEM8'),
            t('PRICES_ENTERPRISE_LIST_ITEM9'),
          ], btn: t('PRICES_ENTERPRISE_BUTTON'), id: 'enterprise'
        }, {
          title: t('PRICES_CUSTOMIZED_TITLE'), desc: t('PRICES_CUSTOMIZED_DESC'), child: [
            t('PRICES_CUSTOMIZED_LIST_ITEM1'),
            t('PRICES_CUSTOMIZED_LIST_ITEM2'),
            t('PRICES_CUSTOMIZED_LIST_ITEM3'),
            t('PRICES_CUSTOMIZED_LIST_ITEM4'),
            t('PRICES_CUSTOMIZED_LIST_ITEM5'),
            t('PRICES_CUSTOMIZED_LIST_ITEM6'),
            t('PRICES_CUSTOMIZED_LIST_ITEM7'),
            t('PRICES_CUSTOMIZED_LIST_ITEM8'),
            t('PRICES_CUSTOMIZED_LIST_ITEM9'),
            t('PRICES_CUSTOMIZED_LIST_ITEM10'),
            t('PRICES_CUSTOMIZED_LIST_ITEM11'),
          ], btn: t('PRICES_CUSTOMIZED_BUTTON'), id: 'customized'
        }
      ]
    })
    const clickContact = (id: string) => {
      if (id != 'basic') {
        router.push({
          path: "/contact"
        })
      }
    }
    return {
      ...toRefs(state), lang, clickContact
    }
  },
})
</script>
<style lang="scss" scoped>
.prices {
  @include flex(column, center, center);
  padding-bottom: 80px;
  background: url('@/assets/images/prices_bg.png') no-repeat top center;
  background-size: 100vw auto;

  &_title {
    @include fontStyle(48px, var(--layoutTextColor), 400);
    margin-top: 100px;
  }

  &_desc {
    @include fontStyle(24px, var(--layoutTextColor_small), 400);
    margin-top: 24px;
    max-width: 900px;
    text-align: center;
    line-height: 35px;
  }

  &_list {
    margin-top: 100px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 1200px;
    height: 650px;
    grid-gap: 40px;

    &_item {
      border: 1px solid var(--border_color);
      border-radius: 8px;
      background: var(--prices-item-bgColor);
      @include flex(column, flex-start, flex-start);
      padding: 40px;

      &_head {
        height: 125px;
      }

      &_title {
        @include fontStyle(36px, var(--layoutTextColor), 400);
        letter-spacing: 0.5px;
      }

      &_price {
        @include fontStyle(36px, var(--layoutTextColor), 400);
        letter-spacing: 0.5px;
      }

      &_desc {
        @include fontStyle(24px, var(--layoutTextColor_mini), 400);

      }

      &_ul {
        padding-left: 0;
        list-style: none;
        flex: 1;

        &_li {
          @include flex(row, flex-start, center);
          line-height: 18px;
          margin-bottom: 10px;

          span {
            margin-left: 10px;
            @include fontStyle(14px, var(--layoutTextColor), 400);
            &.cyan {
              color: var(--color1);
            }
          }

          .svg-icon {
            font-size: 12px;
          }
        }
      }

      &_footer {
        height: 50px;
        width: 300px;
        text-align: center;
        line-height: 50px;

        .btn {
          @include fontStyle(16px, var(--layoutTextColor), 400);
          border-radius: 4px;
          cursor: pointer;
          letter-spacing: 0.5px;

          &.basicBtn {
            border: 2px solid var(--border-color-btn)
          }

          &.enterpriseBtn,
          &.customizedBtn {
            background: linear-gradient(to bottom, rgba(71, 153, 235, 1), rgba(13, 128, 242, 1))
          }
        }
      }
    }
  }
}

.basic {
  @include fontStyle(14px, var(--layoutTextColor_mini), 400);
}

.enterprise {
  padding: 20px 0;
}

.customized {
  padding: 7px 0;
}

.en_desc {
  @include fontStyle(18px, var(--layoutTextColor_mini), 400);
}

.line {
  width: 100%;
  height: 1px;
  background-color: var(--line-color);
  margin: 16px 0;
}
</style>
