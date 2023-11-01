import Image from '@/components/layout/Image.vue'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Layout/Image',
  component: Image,
  tags: ['autodocs'],
  argTypes: {
    src: {
      control: 'select',
      options: [
        '/public/ocelot-150px.png',
        '/public/ocelot-storybook.png',
        '/public/ocelot.png',
        'https://picsum.photos/id/11/100/60'
      ]
    },
    lazySrc: {
      control: 'select',
      options: [
        '/public/ocelot-150px.png',
        '/public/ocelot-storybook.png',
        '/public/ocelot.png',
        'https://picsum.photos/id/11/100/60'
      ]
    },
    width: { control: 'text' },
    height: { control: 'text' },
    maxWidth: { control: 'text' },
    maxHeight: { control: 'text' },
    minWidth: { control: 'text' },
    minHeight: { control: 'text' },
    aspectRatio: { control: 'text' },
    cover: { control: 'boolean' },
    gradient: { control: 'text' },
    alt: { control: 'text' }
  }
}

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Primary = {
  args: {}
}
