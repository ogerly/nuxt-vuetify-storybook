import MyCheckbox from './MyCheckbox.vue'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Example/Checkbox',
  component: MyCheckbox,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text'
    }
  }
}

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Primary = {
  args: {
    label: 'checkbox'
  }
}
