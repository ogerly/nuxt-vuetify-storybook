import Checkbox from '@/components/layout/Checkbox.vue'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Layout/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'info', 'warning', 'error']
    },
    value: {
      control: 'color'
    },
    hideDetails: {
      control: 'boolean'
    },
    appendIcon: {
      control: 'select',
      options: ['$vuetify', 'mdiPlus', 'mdiAccount']
    },
    prependIcon: {
      control: 'select',
      options: ['$vuetify', 'mdiPlus', 'mdiAccount']
    },
    error: {
      control: 'boolean'
    },
    errorMessage: {
      control: 'text'
    }
  }
}

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Primary = {
  args: {
    label: 'Unchecked',
    color: 'primary',
    value: 'red',
    hideDetails: false
  }
}
