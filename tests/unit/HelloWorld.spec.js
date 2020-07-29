import Home from '@/views/Home'
import {mount} from '@vue/test-utils'

describe('HelloWorld.vue', () => {
    test('renders props.msg when passed', () => {
        const wrapper = mount(Home)

        expect(wrapper.text()).toMatch('Welcome to Your Vue.js App')
    })
})
