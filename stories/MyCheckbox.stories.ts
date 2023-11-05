import MyCheckbox from './MyCheckbox.vue'

export default {
  title: 'Example/Checkbox',
  component: MyCheckbox,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text'
    },
    appendIcon: {
      control: 'select',
      options: ['$vuetify', 'mdi-Plus', 'mdi-Account']
    }
  }
}

export const Primary = {
  args: {
    label: 'Checkbox'
  }
}
