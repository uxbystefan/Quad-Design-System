<template>
  <button
    :class="['qds-btn', { 'is-disabled': disabled }]"
    :disabled="disabled"
    @click="$emit('click', $event)"
  >
    <slot>{{ label }}</slot>
  </button>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  label: { type: String, default: 'Button' },
  disabled: { type: Boolean, default: false },
});

defineEmits(['click']);
</script>

<style scoped>
/*
|--------------------------------------------------------------------------|
| Base Button Styles (Global & Mobile)                                    |
|--------------------------------------------------------------------------|
*/
.qds-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: auto;
  max-width: max-content;

  font-family: inherit;
  font-weight: 600;
  border-radius: 8px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: transform 0.06s ease, box-shadow 0.06s ease;
  background: #3BB273;
  color: #F8FAFC;
  white-space: nowrap;

  /* --- Mobile (< 768px) --- */
  font-size: 14px;
  padding: 8px 16px;
  min-height: 44px; /* 👈 Ensures consistent button height */
}

/* Interaction States */
.qds-btn:active {
  transform: translateY(1px);
}

.qds-btn.is-disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/*
|--------------------------------------------------------------------------|
| Responsive Overrides                                                    |
|--------------------------------------------------------------------------|
*/

/* Tablet (>= 768px) */
@media (min-width: 768px) {
  .qds-btn {
    font-size: 14px;
    padding: 10px 20px;
    min-height: 48px; /* 👈 Tablet height */
  }
}

/* Desktop (>= 1024px) */
@media (min-width: 1024px) {
  .qds-btn {
    font-size: 16px;
    padding: 12px 24px;
    min-height: 56px; /* 👈 Desktop height */
  }
}

/* TV / Extra Large (>= 1280px) */
@media (min-width: 1280px) {
  .qds-btn {
    font-size: 18px;
    padding: 16px 32px;
    min-height: 64px; /* 👈 TV height */
  }
}
</style>
