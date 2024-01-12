<template>
  <div class="contact">
    <div class="contact_form">
      <div class="contact_form_title">{{ $t('CONTACT_TITLE') }}</div>
      <el-form :model="form" :rules="rules" ref="refForm" label-position="top" require-asterisk-position="right">
        <el-form-item :label="$t('CONTACT_NAME')" prop="name">
          <el-input v-model="form.name" :placeholder="$t('CONTACT_INPUT_PLACEHOLDER')"></el-input>
        </el-form-item>
        <el-form-item :label="$t('CONTACT_ENTERPRISE')" prop="enterprise">
          <el-input v-model="form.enterprise" :placeholder="$t('CONTACT_INPUT_PLACEHOLDER')"></el-input>
        </el-form-item>
        <el-form-item :label="$t('CONTACT_EMAIL')" prop="email">
          <el-input v-model="form.email" :placeholder="$t('CONTACT_INPUT_PLACEHOLDER')"></el-input>
        </el-form-item>
        <el-form-item :label="$t('CONTACT_PRODUCTREQUIRE')" prop="require">
          <el-select v-model="form.require">
            <el-option v-for="item in selectList" :key="item.id" :label="item.label" :value="item.id"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item :label="$t('CONTACT_SAYTOUS')" prop="say">
          <el-input type="textarea" rows="5" v-model="form.say" :placeholder="$t('CONTACT_INPUT_PLACEHOLDER')"></el-input>
        </el-form-item>
      </el-form>
      <div class="btn_wrap" @click="submit">{{ $t('CONTACT_BUTTON') }}</div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, unref, ref } from 'vue';
import { useI18n } from 'vue-i18n';
export default defineComponent({
  name: "contact",
  setup(props, ctx) {
    const { t } = useI18n();
    const refForm = ref()
    const state = reactive({
      selectList: [
        { id: "1", label: t('CONTACT_OPTION1') },
        { id: "2", label: t('CONTACT_OPTION2') },
        { id: "3", label: t('CONTACT_OPTION3') },
        { id: "4", label: t('CONTACT_OPTION4') },
      ],
      form: {
        name: "",
        enterprise: "",
        email: "",
        require: "1",
        say: ""
      },
      rules: {
        name: [
          { required: true, message: t('CONTACT_INPUT_PLACEHOLDER'), trigger: 'blur' }
        ],
        enterprise: [
          { required: true, message: t('CONTACT_INPUT_PLACEHOLDER'), trigger: 'blur' }
        ],
        email: [
          { required: true, message: t('CONTACT_INPUT_PLACEHOLDER'), trigger: 'blur' },
          {
            type: 'email',
            message: t('CONTACT_INPUT_EMAIL_ERROR'),
            trigger: ['blur', 'change']
          }

        ],
        require: [
          { required: true, message: t('CONTACT_INPUT_PLACEHOLDER'), trigger: 'blur' }
        ],
        say: [
          { required: true, message: t('CONTACT_INPUT_PLACEHOLDER'), trigger: 'blur' }
        ],
      }
    })
    const submit = () => {
      const form = unref(refForm)
      if (!form) return
      form.validate((valide: boolean) => {
        if (valide) {
        }
      })
    }
    return {
      ...toRefs(state), submit, refForm
    }
  },
})
</script>
<style lang="scss" scoped>
.contact {
  background: url('@/assets/images/contact_bg.png') no-repeat top center;
  background-size: 100vw auto;
  padding-top: 80px;
  &_form {
    width: 1200px;
    border-radius: 12px;
    border: 2px solid var(--contact-form-border-color);
    background: var(--contact-form-bg-color);
    margin: 0px auto 80px;

    &_title {
      @include fontStyle(24px, var(--layoutTextColor), 400);
      text-align: center;
      padding: 48px 0;
    }

    .btn_wrap {
      height: 50px;
      width: 230px;
      border-radius: 4px;
      padding: 0 15px;
      line-height: 50px;
      text-align: center;
      letter-spacing: 0.5px;
      background: var(--btn-bg-color);
      @include fontStyle(16px, var(--layoutTextColor), 400);
      margin: 40px auto;
      cursor: pointer;
    }
  }
}

::v-deep(.el-form) {
  width: 800px;
  margin: 0 auto;

  .el-form-item__label {
    @include fontStyle(16px, var(--layoutTextColor_mini), 400);
  }

  .el-input {
    height: 56px !important;
  }

  .el-select {
    display: block;
    width: 100%;

    .select-trigger {
      height: 56px;
    }

    .el-inpt {
      height: 56px;
    }
  }
}
</style>