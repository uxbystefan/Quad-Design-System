<template>
  <button
    :class="['qds-btn', { 'is-disabled': disabled }]"
    :disabled="disabled"
    @click="$emit('click', $event)"
  >
    <!-- Use the slot content first, fall back to label if slot is empty -->
    <slot>{{ label }}</slot>
  </button>
</template>

<script setup lang="ts">
// Using <script setup lang="ts"> for better type support
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  label: { type: String, default: 'Button' },
  // Removed 'variant' prop as only 'primary' is supported for now
  disabled: { type: Boolean, default: false },
});

defineEmits(['click']);
</script>

<style scoped>
/*
|--------------------------------------------------------------------------
| Base Button Styles (Global & Mobile)
|--------------------------------------------------------------------------
*/
.qds-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: auto;
  max-width: max-content;  
  font-family: inherit;
  border-radius: 8px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: transform 0.06s ease, box-shadow 0.06s ease;
  font-weight: 600;
  
  /* --- Primary Specific Styles --- */
  background: #3BB273; /* Button color */
  color: #F8FAFC;      /* Text color */
  white-space: nowrap; /* Prevent text wrapping */

  /* Mobile (< 768px) */
  font-size: 14px;
  padding: 8px 16px; /* 8px vertical 16px horizontal */
}

/* Interaction States */
.qds-btn:active { transform: translateY(1px); }
.qds-btn.is-disabled { opacity: 0.6; cursor: not-allowed; }

/*
|--------------------------------------------------------------------------
| Responsive Overrides (Applied to the single .qds-btn class)
|--------------------------------------------------------------------------
*/

/* Tablet (>= 768px) */
@media (min-width: 768px) {
  .qds-btn {
    font-size: 14px; 
    padding: 10px 20px; /* 10px vertical 20px horizontal */
  }
}

/* Desktop (>= 1024px) */
@media (min-width: 1024px) {
  .qds-btn {
    font-size: 16px;
    padding: 12px 24px; /* 12px vertical 24px horizontal */
  }
}

/* TV / Extra Large (>= 1280px) */
@media (min-width: 1280px) {
  .qds-btn {
    font-size: 18px;
    padding: 16px 32px; /* 16px vertical 32px horizontal */
  }
}
</style>