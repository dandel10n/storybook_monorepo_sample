<template>
    <div
        :class="$style['c-userMessage']"
        class="l-container">
        <div class="l-row">
            <div
                :class="$style['c-userMessage-container']"
                class="l-container--inner">
                <f-button
                    type="button"
                    button-type="primary"
                    button-size="xsmall"
                >I am a button
                </f-button>
                <p :class="$style['c-userMessage-text']">
                    <slot />
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import FButton from '@justeat/f-button';
import "@justeat/f-button/dist/f-button.css";

export default {
    name: 'UserMessage',
    components: {
        FButton
    }
};
</script>

<style lang="scss" module>
.c-userMessage {
    color: white;
    background-color: orange;
    max-width: 400px;
}

.c-userMessage-container {
    max-width: 350px;
    margin: 0 auto;
    padding: 16px 0;
    display: flex;
}

.c-userMessage-text {
    margin: 0 0 0 16px;
    font-size: 16px;
}
</style>