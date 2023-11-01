import Input from '@/components/layout/Input.vue'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Layout/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    prependIcon: {
      control: 'select',
      options: ['$vuetify', 'mdiPlus', 'mdiAccount']
    },
    prependInnerIcon: {
      control: 'select',
      options: ['$vuetify', 'mdiPlus', 'mdiAccount']
    },
    appendIcon: {
      control: 'select',
      options: ['$vuetify', 'mdiPlus', 'mdiAccount']
    },
    appendInnerIcon: {
      control: 'select',
      options: ['$vuetify', 'mdiPlus', 'mdiAccount']
    },
    messages: { control: 'text' },
    error: { control: 'boolean' },
    errorMessage: { control: 'text' },
    maxErrors: { control: 'number' },
    disabled: { control: 'boolean' },
    readonly: { control: 'boolean' },
    clearable: { control: 'boolean' },
    density: {
      control: 'select',
      options: ['default', 'comfortable', 'compact']
    },
    focused: {
      control: 'boolean'
    },
    rules: {
      control: 'array'
    },
    validateOn: {
      control: 'array',
      options: [
        'lazy',
        'blur',
        'input',
        'submit',
        'blur lazy',
        'input lazy',
        'submit lazy',
        'lazy blur',
        'lazy input',
        'lazy submit'
      ]
    },
    validationValue: {
      control: 'text'
    }
  }
}

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Primary = {
  args: {}
}
