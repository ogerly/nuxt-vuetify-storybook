import Card from '@/components/layout/Card.vue'

export default {
  title: 'Layout/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'color'
    },
    // onClick: { action: 'clicked' },
    density: {
      control: 'select',
      defaultValue: 'default',
      options: ['default', 'comfortable', 'compact']
    },
    width: {
      control: 'number'
    },
    minWidth: {
      control: 'number'
    },
    maxWidth: {
      control: 'number'
    },
    height: {
      control: 'number'
    },
    minHeight: {
      control: 'number'
    },
    maxHeight: {
      control: 'number'
    },
    disabled: {
      control: 'boolean'
    },
    border: {
      control: 'boolean'
    },
    elevation: {
      control: 'range',
      defaultValue: '2dp',
      maxValue: '24'
    },
    hover: {
      control: 'boolean'
    },
    position: {
      control: 'select',
      defaultValue: 'static',
      options: ['static', 'relative', 'fixed', 'absolute', 'sticky']
    },
    rounded: {
      control: 'boolean'
    },
    shaped: {
      control: 'boolean'
    },
    square: {
      control: 'boolean'
    },
    tile: {
      control: 'boolean'
    },
    variant: {
      control: 'select',
      defaultValue: 'primary',
      options: ['flat', 'elevated', 'tonal', 'outlined', 'plain']
    },
    image: {
      control: 'text'
    }
  }
}

export const Primary = {
  args: {}
}
