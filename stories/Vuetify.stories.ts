// stories/Vuetify.stories.ts
import type { Meta, StoryObj } from '@storybook/vue3'
import Vuetify from '~/components/vuetify.vue'
const meta = {
 title: 'Plugins/Vuetify ',
 component: Vuetify,
 // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
 tags: ['autodocs'],
} as Meta<typeof Vuetify>
export default meta
type Story = StoryObj<typeof meta>
export const Primary: Story = {
 args: { message: 'Hello World' },
}