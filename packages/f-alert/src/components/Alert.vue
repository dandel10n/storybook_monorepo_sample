<template>
  <div v-if="!isDismissed" :class="[$style['c-alert']]" role="alert">
    <div :class="$style['c-alert-headingContainer']">
      <h2 :class="$style['c-alert-heading']">
        I am alert
      </h2>
      <f-button
        type="button"
        :class="[$style['c-alert-dismiss']]"
        button-type="icon"
        button-size="xsmall"
        @click.native="dismiss"
      >
        <cross-icon :class="[$style['c-alert-dismiss-icon']]" />
      </f-button>
    </div>
    <div :class="$style['c-alert-content']">
      <slot>You can put any HTML here!</slot>
    </div>
  </div>
</template>

<script>
import { CrossIcon } from "@justeat/f-vue-icons";
import FButton from "@justeat/f-button";
import "@justeat/f-button/dist/f-button.css";

export default {
  name: "FAlert",
  components: {
    CrossIcon,
    FButton
  },
  data() {
    return {
      isDismissed: false
    };
  },
  methods: {
    dismiss() {
      this.isDismissed = true;
    }
  }
};
</script>

<style module>
.c-alert {
  position: relative;
  width: 200px;
  border: 1px solid black;
  padding: 8px;
  padding-bottom: 12px;
  margin-top: 16px;
}
.c-alert-headingContainer {
  display: flex;
  align-items: center;
  padding: 4px 0;
}

.c-alert-heading {
  font-size: 16px;
  line-height: 1.5;
}

.c-alert-content {
  font-size: 16px;
  line-height: 1.5;
  text-align: left;
}

.c-alert-dismiss {
  text-indent: 0;
  margin-left: auto;
  margin-right: 8px;
  z-index: 999;
  font-size: 14px;
}
.c-alert-dismiss-icon {
  height: 16px;
}

g {
  fill: black;
}
</style>
