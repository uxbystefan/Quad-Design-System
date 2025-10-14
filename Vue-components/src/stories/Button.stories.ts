import type { Meta, StoryObj } from '@storybook/vue3';
// IMPORTANT: Assuming your component is at src/components/Button.vue
import Button from '../components/Button.vue';

// --- 1. Define the Component Metadata ---
const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],

  // Customizing controls for the Storybook UI
  argTypes: {
    // Only 'disabled' and 'label' are necessary since the variant is hardcoded to primary
    disabled: {
      control: 'boolean',
      description: 'Controls whether the button is clickable.',
    },
    label: {
      control: 'text',
      description: 'The text content of the button.',
    },
    onClick: { action: 'button-clicked' },
  },

  // Default argument values for all stories
  args: {
    label: 'Button',
    disabled: false,
  },
};

export default meta;

// --- 2. Define Individual Stories ---
type Story = StoryObj<typeof Button>;

/**
 * This story demonstrates the single primary button with responsive styling.
 * Resize the Storybook canvas to see the padding and font size change for
 * Tablet (>= 768px), Desktop (>= 1024px), and TV (>= 1280px) breakpoints.
 */
export const PrimaryResponsive: Story = {
  args: {
    label: 'Responsive Primary Button',
  },
  parameters: {
    docs: {
      description: {
        story: 'This button demonstrates the required responsive changes for **Mobile** (default/base), **Tablet** (>= 768px), **Desktop** (>= 1024px), and **TV** (>= 1280px). Please **resize the Storybook canvas** to observe the padding (8/16 -> 10/20 -> 12/24 -> 16/32) and font size changing automatically.',
      },
    },
  },
};

/**
 * Primary button in a disabled state.
 */
export const PrimaryDisabled: Story = {
  args: {
    label: 'Primary Disabled',
    disabled: true,
  },
};

// --- 3. Example of all states shown side-by-side for visual clarity ---
export const AllStatesShowcase: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      // Create multiple instances to show how a layout of buttons would look.
      // Note: All of these buttons change size simultaneously based on screen width.
      return { 
        args, 
        mobileLabel: "Mobile",
        tabletLabel: "Tablet",
        desktopLabel: "Desktop",
        tvLabel: "TV"
      };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; padding: 24px; background: #E2E8F0; width: 100%;">
        <h3>Resize the canvas to see these buttons adapt simultaneously:</h3>
        
        <Button v-bind="args" :label="mobileLabel" />
        <Button v-bind="args" :label="tabletLabel" />
        <Button v-bind="args" :label="desktopLabel" />
        <Button v-bind="args" :label="tvLabel" />

        <h3>Disabled Example:</h3>
        <Button v-bind="args" label="Disabled Button" :disabled="true" />
      </div>
    `,
  }),
  // Remove the default label from props so it uses the specific ones in the render template
  args: {
    label: undefined,
  }
};
