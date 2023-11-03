import MyCheckbox from './MyCheckbox.vue'

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

export const Primary = {
  args: {
    label: 'Checkbox'
  }
}
