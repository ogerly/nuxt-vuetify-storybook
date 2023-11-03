import Card from '@/components/layout/Card.vue'

export default {
  title: 'Layout/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    show: { control: 'boolean' },
    loading: { control: 'boolean' },
    title: { control: 'text', options: ['Custom Title'] },
    subtitle: { control: 'text' },
    text: { control: 'text' },
    btnText: { control: 'text' },
    image: { control: 'text' }
  }
}

export const Primary = {
  args: {
    show: true,
    loading: false,
    title: 'Custom Title',
    subtitle: 'Custom Subtitle',
    text: 'Custom Text',
    btnText: 'Button',
    image: '/public/ocelot-storybook.png'
  }
}

export const LoadingCard = {
  args: {
    show: true,
    loading: true,
    title: 'Loading Card',
    subtitle: 'Loading...',
    text: 'Loading...',
    btnText: 'Loading...',
    image: '/public/ocelot-storybook.png'
  }
}
