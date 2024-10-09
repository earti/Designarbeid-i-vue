<template>
    <button
      :class="['my-button', size, variant]"
      :disabled="disabled"
      @click="handleClick"
    >
    <slot></slot>
    </button>
</template>
  
<script>
export default {
    name: "MyButton",
    props: {
        disabled: {
        type: Boolean,
        default: false,
        },
        size: {
        type: String,
        default: "medium", // options: small, medium, large
        },
        variant: {
        type: String,
        default: "primary", // options: primary, secondary, danger, etc.
        },
    },
    methods: {
        handleClick(event) {
        if (!this.disabled) {
            this.$emit("click", event);
        }
        },
    },
};
</script>

<style scoped>
.my-button {
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.my-button:disabled {
    cursor: not-allowed;
    opacity: 0.6;
}

.my-button.primary {
    background-color: #007bff;
}

.my-button.secondary {
    background-color: #6c757d;   
}

.my-button.danger {
    background-color: #dc3545;
}

/* Sizes */
.my-button.small {
    padding: 5px 10px;
    font-size: 12px;
}

.my-button.medium {
    padding: 10px 20px;
    font-size: 14px;
}

.my-button.large {
    padding: 15px 30px;
    font-size: 16px;
}
</style>
