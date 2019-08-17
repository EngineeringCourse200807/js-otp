import HelloWorld from '@/components/HelloWorld.vue'
import {render} from '@testing-library/vue'

describe('HelloWorld.vue', () => {
    it('renders props.msg when passed', () => {
        const {getByText} = render(HelloWorld, {
            props: {msg: 'new message'}
        })

        getByText('new message')
    })
});

