import FAlert from "./Alert.vue";

export default {
  title: "Alert"
};

export const AlertComponent = () => ({
  components: { FAlert },
  template: `
    <f-alert>
        You can put your text here!
    </f-alert>
    `
});

AlertComponent.storyName = "f-alert";
