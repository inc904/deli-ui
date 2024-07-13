import { makeInstaller } from '@deli-ui/utils'
import components from './components'
import "@deli-ui/theme/index.css"

const installer = makeInstaller(components)

export * from '@deli-ui/components'
export default installer
