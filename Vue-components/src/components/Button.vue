<template>
  <button
    :class="[
      'qds-btn',
      `qds-btn--${variant}`, // primary, secondary, success, etc.
      { 'is-disabled': disabled },
      { 'is-loading': loading },
      // Conditional class to handle Dark Mode secondary styling 
      { 'qds-btn--secondary-dark-override': variant === 'secondary' && isDarkMode }
    ]"
    :disabled="disabled || loading"
    @click="$emit('click', $event)"
  >
    <!-- Loading State: Spinner with accessibility text -->
    <span v-if="loading" class="qds-btn__spinner" aria-hidden="true"></span>
    <span v-if="loading" class="qds-btn__content-hidden">Loading...</span>
    
    <!-- Content Slot -->
    <slot v-else>{{ label }}</slot>
  </button>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

// Define the valid variants based on your token schema
type ButtonVariant = 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info';

const props = defineProps({
  label: { type: String, default: 'Button' },
  // Mandatory variant prop
  variant: {
    type: String as () => ButtonVariant,
    default: 'primary',
    validator: (v: string) => ['primary', 'secondary', 'success', 'error', 'warning', 'info'].includes(v)
  },
  // States
  disabled: { type: Boolean, default: false },
  loading: { type : Boolean, default: false },

  // Helper prop for multi-framework theme demonstration
  isDarkMode: { type: Boolean, default: false },
});

defineEmits(['click']);
</script>

<style scoped>
/* Define local theme variables for easy switching */
.qds-btn {
  --theme-text-primary: var(--color-light-text-primary, #111827);
  --theme-text-inverted: var(--color-dark-text-primary, #F8FAFC);

  display: inline-flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  width: auto;
  max-width: max-content;

  font-family: inherit;
  font-weight: 600;
  border-radius: 8px;
  border: 1px solid transparent; /* Base border */
  cursor: pointer;
  transition: background-color 0.15s ease, box-shadow 0.15s ease, transform 0.06s ease;
  white-space: nowrap;

  /* Mobile Dimensions (Your provided values) */
  font-size: 14px;
  padding: 8px 16px;
  min-height: 44px;

  /* Primary Default Look */
  background: var(--color-product-primary-default, #3BB273);
  color: var(--theme-text-inverted); /* White text on Primary */
}

/* Base Interaction States (Applied to all variants unless overridden) */
.qds-btn:hover {
  /* Default hover adds the info focus ring */
  box-shadow: 0 0 0 2px var(--color-product-accent-info, #5D9BFF);
}

.qds-btn:focus-visible {
  outline: none;
  box-shadow: 0 0 0 3px var(--color-product-accent-info, #5D9BFF);
}

.qds-btn:active {
  transform: translateY(1px);
}

/* Disabled State (Applied universally to primary/secondary) */
.qds-btn.is-disabled {
  background-color: var(--color-product-primary-disabled, #AFEBC5) !important;
  color: var(--theme-text-primary) !important; 
  opacity: 1; 
  cursor: not-allowed;
  box-shadow: none;
  transform: none;
}

/*
|--------------------------------------------------------------------------|
| 1. VARIANT COLORS & STATES (PRIMARY/SECONDARY ACTIONS)                 |
|--------------------------------------------------------------------------|
*/

/* --- PRIMARY --- */
/* (Styles are already set in the base .qds-btn) */
.qds-btn--primary:hover,
.qds-btn--primary:focus-visible {
  background-color: var(--color-product-primary-hover);
}
.qds-btn--primary:active,
.qds-btn--primary.is-loading {
  background-color: var(--color-product-primary-click);
}


/* --- SECONDARY (Light Mode Default) --- */
.qds-btn--secondary {
  background-color: var(--color-product-secondary-light-default);
  color: var(--theme-text-inverted); 
}
.qds-btn--secondary:hover,
.qds-btn--secondary:focus-visible {
  background-color: var(--color-product-secondary-light-hover);
}
.qds-btn--secondary:active,
.qds-btn--secondary.is-loading {
  background-color: var(--color-product-secondary-light-click);
}
.qds-btn--secondary.is-disabled {
  background-color: var(--color-product-secondary-light-disabled) !important;
}

/* --- SECONDARY (Dark Mode OVERRIDE) --- */
.qds-btn--secondary-dark-override {
  background-color: var(--color-product-secondary-dark-default) !important;
  color: var(--theme-text-primary) !important; /* Text must be dark on light background */
}
.qds-btn--secondary-dark-override:hover,
.qds-btn--secondary-dark-override:focus-visible {
  background-color: var(--color-product-secondary-dark-hover) !important;
}
.qds-btn--secondary-dark-override:active,
.qds-btn--secondary-dark-override.is-loading {
  background-color: var(--color-product-secondary-dark-click) !important;
}
.qds-btn--secondary-dark-override.is-disabled {
  background-color: var(--color-product-secondary-dark-disabled) !important;
  color: var(--theme-text-inverted) !important; 
}

/*
|--------------------------------------------------------------------------|
| 2. STATUS VARIANTS (SUCCESS, ERROR, WARNING, INFO) - OUTLINED/INVERTED   |
|--------------------------------------------------------------------------|
*/

/* --- Outlined Base (Applies to Success, Error, Info) --- */
.qds-btn--success, .qds-btn--error, .qds-btn--info {
  background-color: transparent !important;
  border-width: 2px; /* Thicker border for visibility */
  font-weight: 700;
  box-shadow: none !important; /* Remove focus ring on default state */
}

/* Success */
.qds-btn--success {
  border-color: var(--color-product-accent-success);
  color: var(--color-product-accent-success);
}
/* Error */
.qds-btn--error {
  border-color: var(--color-product-accent-error);
  color: var(--color-product-accent-error);
}
/* Info */
.qds-btn--info {
  border-color: var(--color-product-accent-info);
  color: var(--color-product-accent-info);
}

/* Warning (Needs solid fill for contrast, but dark text) */
.qds-btn--warning {
  background-color: var(--color-product-accent-warning) !important;
  color: var(--theme-text-primary) !important; /* Forces black text for contrast */
}

/* Universal hover/active for Status buttons (subtle color shift + no transform) */
.qds-btn--success:hover, .qds-btn--error:hover, .qds-btn--info:hover {
  background-color: rgba(0, 0, 0, 0.05); /* Subtle hover effect */
  box-shadow: none; 
}
.qds-btn--warning:hover {
  /* Subtle change to a slightly darker warning shade if desired */
  background-color: #EABEDB !important;
  box-shadow: none; 
}
.qds-btn--success:active, .qds-btn--error:active, .qds-btn--warning:active, .qds-btn--info:active {
  transform: none; 
}

/* Status Disabled: Use the lighter background/border from your palette (e.g., 200 shade) */
.qds-btn--success.is-disabled,
.qds-btn--error.is-disabled,
.qds-btn--info.is-disabled {
  border-color: var(--color-light-surface) !important;
  color: var(--color-light-surface) !important;
  background-color: transparent !important;
}
.qds-btn--warning.is-disabled {
  background-color: var(--color-light-surface) !important;
  color: var(--theme-text-secondary) !important;
}


/*
|--------------------------------------------------------------------------|
| 3. SPINNER STYLING                                                      |
|--------------------------------------------------------------------------|
*/
.qds-btn__spinner {
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: #fff;
  animation: qds-spin 1s linear infinite;
  flex-shrink: 0;
}
.qds-btn--warning .qds-btn__spinner, .qds-btn--secondary-dark-override .qds-btn__spinner,
.qds-btn--success .qds-btn__spinner, .qds-btn--error .qds-btn__spinner, .qds-btn--info .qds-btn__spinner {
  border-color: rgba(0, 0, 0, 0.3);
  border-top-color: var(--theme-text-primary); /* Dark spinner top for light backgrounds */
}

.qds-btn__content-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
@keyframes qds-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/*
|--------------------------------------------------------------------------|
| 4. RESPONSIVE OVERRIDES (Tablet, Desktop, TV)                            |
|--------------------------------------------------------------------------|
*/

/* Tablet (>= 768px) */
@media (min-width: 768px) {
  .qds-btn {
    font-size: 14px;
    padding: 10px 20px;
    min-height: 48px;
  }
}

/* Desktop (>= 1024px) */
@media (min-width: 1024px) {
  .qds-btn {
    font-size: 16px;
    padding: 12px 24px;
    min-height: 56px;
  }
}

/* TV / Extra Large (>= 1280px) */
@media (min-width: 1280px) {
  .qds-btn {
    font-size: 18px;
    padding: 16px 32px;
    min-height: 64px;
  }
}
</style>