import type { Meta, StoryObj } from '@storybook/vue3';
// @ts-ignore
import Button from './Button.vue';

// --- 1. Define the Component Metadata ---
// The Meta object describes your component, its name in the sidebar, and the controls it exposes.
const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  
  // Customizing controls for the Storybook UI
  argTypes: {
    // Control for the 'variant' prop
    variant: {
      control: 'select',
      options: ['primary', 'ghost', 'danger'],
      description: 'The visual style and purpose of the button.'
    },
    // Control for the 'disabled' prop
    disabled: {
      control: 'boolean',
      description: 'Controls whether the button is clickable.'
    },
    // Control for the content (label prop or default slot)
    label: { 
        control: 'text', 
        description: 'The text content of the button (used when the slot is empty).' 
    },
    // Action logger for the emitted 'click' event
    click: { action: 'button-clicked' },
  },
  
  // Default argument values for all stories
  args: {
    label: 'Default Button',
    variant: 'primary',
    disabled: false,
  },
};

export default meta;

// --- 2. Define Individual Stories (Variants) ---
type Story = StoryObj<typeof Button>;

// 2.1. Primary Button (the main action)
export const Primary: Story = {
  args: {
    label: 'Primary Action',
    variant: 'primary',
  },
};

// 2.2. Ghost Button (secondary, often used on dark backgrounds)
export const Ghost: Story = {
  // We can add a background parameter here to better showcase the ghost variant
  parameters: {
    backgrounds: { default: 'dark' },
  },
  args: {
    label: 'Ghost Button',
    variant: 'ghost',
  },
};

// 2.3. Danger Button (destructive actions)
export const Danger: Story = {
  args: {
    label: 'Delete Item',
    variant: 'danger',
  },
};

// 2.4. Disabled States (one for each variant)

// Using the Render function to display multiple disabled buttons in one story
export const AllDisabledStates: Story = {
  parameters: {
    // Since ghost looks best on dark, we keep the background dark for this story
    backgrounds: { default: 'dark' },
  },
  render: (args: any) => ({
    components: { Button },
    setup() {
      // We pass the global 'args' (like the click handler) down to all buttons
      return { args };
    },
    template: `
      <div style="display: flex; gap: 16px; align-items: center;">
        <Button v-bind="args" variant="primary" :disabled="true" label="Primary Disabled" />
        <Button v-bind="args" variant="ghost" :disabled="true" label="Ghost Disabled" />
        <Button v-bind="args" variant="danger" :disabled="true" label="Danger Disabled" />
      </div>
    `,
  }),
  // Explicitly set disabled to true for the control panel view of this story
  args: {
    disabled: true,
  },
};