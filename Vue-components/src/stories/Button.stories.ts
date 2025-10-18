import type { Meta, StoryObj } from '@storybook/vue3';
import Button from '../components/Button.vue';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    // New controls for the component
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'error', 'warning', 'info'],
      description: 'Defines the semantic color and style of the button.',
    },
    disabled: {
      control: 'boolean',
      description: 'Controls whether the button is clickable and applies the disabled style.',
    },
    loading: {
      control: 'boolean',
      description: 'Applies the loading style (click/active color) and shows a spinner.',
    },
    isDarkMode: {
      control: 'boolean',
      description: 'FOR DEMO ONLY: Toggles the secondary dark mode color override.',
    },
    label: {
      control: 'text',
      description: 'The text content of the button.',
    },
    onClick: { action: 'button-clicked' },
  },
  args: {
    label: 'Button',
    variant: 'primary',
    disabled: false,
    loading: false,
    isDarkMode: false,
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// --- 1. Base Story: Interactive Control Test ---
export const InteractivePrimary: Story = {
  args: {
    label: 'Primary Button',
    variant: 'primary',
  },
};

// --- 2. Responsive Demo (Canvas Resizing) ---
export const PrimaryResponsive: Story = {
  args: {
    label: 'Responsive Primary Button',
    variant: 'primary',
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

// --- 3. Loading State Demo ---
export const PrimaryLoading: Story = {
  args: {
    label: 'Processing...',
    loading: true,
    variant: 'primary',
  },
};

// --- 4. Secondary Dark Mode Demo ---
export const SecondaryDarkMode: Story = {
  args: {
    label: 'Secondary (Dark Mode)',
    variant: 'secondary',
    isDarkMode: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'This demonstrates the color override for the Secondary button when the application is running in Dark Mode.',
      },
    },
  },
};

// --- 5. Comprehensive Showcase of ALL Variants and States ---
export const AllVariantsShowcase: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      const variants = ['primary', 'secondary', 'success', 'error', 'warning', 'info'];
      const theme = [
        { name: 'Light Mode', darkMode: false, background: '#DCE0E6', labelSuffix: '' },
        { name: 'Dark Mode', darkMode: true, background: '#1E293B', labelSuffix: ' (DM)' }
      ];
      return { args, variants, theme };
    },
    template: `
      <div v-for="t in theme" :key="t.name" :style="{ backgroundColor: t.background, padding: '24px', marginBottom: '24px', borderRadius: '8px' }">
        <h3 :style="{ color: t.darkMode ? '#F8FAFC' : '#111827', marginBottom: '16px' }">{{ t.name }} Showcase</h3>
        <div style="display: grid; grid-template-columns: repeat(6, auto); gap: 16px;">
          
          <template v-for="v in variants" :key="v">
            <div style="display: flex; flex-direction: column; gap: 10px;">
              <h4 :style="{ color: t.darkMode ? '#94A3B8' : '#4B5563', fontSize: '14px', margin: 0, textTransform: 'capitalize' }">{{ v }}</h4>
              
              <!-- Default -->
              <Button 
                :label="v + t.labelSuffix" 
                :variant="v" 
                :is-dark-mode="t.darkMode" 
                :disabled="false" 
                :loading="false"
              />

              <!-- Loading / Active -->
              <Button 
                :label="'Loading' + t.labelSuffix" 
                :variant="v" 
                :is-dark-mode="t.darkMode" 
                :loading="true"
                :disabled="false"
              />

              <!-- Disabled -->
              <Button 
                :label="'Disabled' + t.labelSuffix" 
                :variant="v" 
                :is-dark-mode="t.darkMode" 
                :disabled="true"
                :loading="false"
              />
              
              <!-- Placeholder for Hover/Active - Stories don't easily support native hover/active styling -->
              <div :style="{ fontSize: '12px', color: t.darkMode ? '#94A3B8' : '#4B5563' }">
                (Hover/Active tested separately)
              </div>
            </div>
          </template>
        </div>
      </div>
    `,
  }),
  args: { label: undefined }, // Clear the default arg label
  parameters: {
    docs: {
      description: {
        story: 'A side-by-side demonstration of all **6 variants** across **Light Mode** and **Dark Mode** for the Default, Loading, and Disabled states. Note how only the **Secondary** variant changes color in Dark Mode.',
      },
    },
  },
};