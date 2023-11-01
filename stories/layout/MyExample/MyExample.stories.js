import MyExample from './MyExample.vue'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Layout/MyExample',
  component: MyExample,
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' }
  }
}

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Primary = {
  args: {}
}
