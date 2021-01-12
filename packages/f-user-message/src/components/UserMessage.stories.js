import FUserMessage from "./UserMessage.vue";

export default {
  title: "User message"
};

export const AlertComponent = () => ({
  components: { FUserMessage },
  template: `
    <f-user-message>
        You can put your text here!
    </f-user-message>
    `
});

AlertComponent.storyName = "f-user-message";
