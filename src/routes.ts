import Select from './routes/Select.svelte'
import Result from './routes/Result.svelte'

const routes = { 
    '/': Select,
    '/select': Select,
    '/result': Result,
    '*': Select
}

export default routes