<template>
  <div class="layout">
    <LayoutHeader></LayoutHeader>
    <div class="content">
      <el-config-provider :locale="locale">
        <router-view />
      </el-config-provider>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import LayoutHeader from "@/components/LayoutHeader/index.vue";
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import en from "element-plus/es/locale/lang/en";
import ja from "element-plus/es/locale/lang/ja";
const languageMap = {
  zh: zhCn,
  en: en,
  ja: ja,
} as any;
export default defineComponent({
  components: {
    ElConfigProvider,
    LayoutHeader,
  },
  setup() {
    const state = reactive({
      locale: languageMap[localStorage.getItem("easePassBase_Language") || "zh"],
    });
    return {
      ...toRefs(state),
    };
  },
});
</script>
<style lang="scss" scoped>
.layout {
  @include flex(column, center, center);
}

.content {
  width: 100vw;
}
</style>
