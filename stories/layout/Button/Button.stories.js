import Button from '@/components/layout/Button.vue'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Layout/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text', defaultValue: 'Ocelot' },
    onClick: {
      action: 'clicked',
      options: {
        argTypesRegex: '^on.*'
      }
    },
    size: {
      control: 'select',
      options: ['x-small', 'small', 'medium', 'large', 'x-large']
    },
    variant: {
      control: 'select',
      options: ['flat', 'elevated', 'tonal', 'outlined', 'plain']
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'info', 'warning', 'error']
    },
    rounded: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl']
    },
    block: {
      control: 'boolean'
    },
    icon: {
      control: 'select',
      options: ['$vuetify', 'mdiPlus', 'mdi-account']
    },
    density: {
      control: 'select',
      options: ['default', 'comfortable', 'compact']
    },
    elevation: {
      control: { type: 'range', min: 0, max: 24, step: 1 }
    },
    appendIcon: {
      control: 'text'
    },
    prependIcon: {
      control: 'text'
    },
    active: {
      control: 'boolean'
    }
  }
}

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Normal = {
  args: {
    text: 'Ocelot'
  }
}

export const Icon = {
  args: {
    icon: '$vuetify'
  }
}

export const Large = {
  args: {
    size: 'large'
  }
}

export const Small = {
  args: {
    size: 'small'
  }
}

export const prependIcon = {
  args: {
    prependIcon: '$vuetify'
  }
}

export const appendIcon = {
  args: {
    appendIcon: '$vuetify'
  }
}

export const block = {
  args: {
    block: true
  }
}

export const primary = {
  args: {
    color: 'primary'
  }
}

export const secondary = {
  args: {
    color: 'secondary'
  }
}

export const warning = {
  args: {
    color: 'warning'
  }
}

export const info = {
  args: {
    color: 'info'
  }
}

export const error = {
  args: {
    color: 'error'
  }
}

export const roundedXL = {
  args: {
    rounded: 'xl'
  }
}

export const densityCompact = {
  args: {
    density: 'compact'
  }
}
