import type { Meta, StoryObj } from '@storybook/vue3';
import Button from '../components/Button.vue';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
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
  args: {
    label: 'Button',
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// --- Responsive demo (canvas resizing) ---
export const PrimaryResponsive: Story = {
  args: {
    label: 'Responsive Primary Button',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Resize the Storybook canvas to see the padding, height, and font size update dynamically across breakpoints: **Mobile** (<768px), **Tablet** (≥768px), **Desktop** (≥1024px), **TV** (≥1280px).',
      },
    },
  },
};

// --- Disabled state ---
export const PrimaryDisabled: Story = {
  args: {
    label: 'Primary Disabled',
    disabled: true,
  },
};

// --- Showcase of all static breakpoints side-by-side ---
export const AllStatesShowcase: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px; padding: 24px; background: #E2E8F0;">
        <h3>All Breakpoints Preview (Static Width Containers)</h3>

        <div style="display: flex; flex-direction: column; gap: 12px;">
          <div style="background:#fff;padding:16px;width:360px;">
            <strong>Mobile (360px wide)</strong><br>
            <Button v-bind="args" label="Mobile (min-height 44px)" />
          </div>

          <div style="background:#fff;padding:16px;width:768px;">
            <strong>Tablet (768px wide)</strong><br>
            <Button v-bind="args" label="Tablet (min-height 48px)" />
          </div>

          <div style="background:#fff;padding:16px;width:1024px;">
            <strong>Desktop (1024px wide)</strong><br>
            <Button v-bind="args" label="Desktop (min-height 56px)" />
          </div>

          <div style="background:#fff;padding:16px;width:1280px;">
            <strong>TV (1280px wide)</strong><br>
            <Button v-bind="args" label="TV (min-height 64px)" />
          </div>
        </div>

        <h3>Disabled Example:</h3>
        <Button v-bind="args" label="Disabled Button" :disabled="true" />
      </div>
    `,
  }),
  args: { label: undefined },
};
