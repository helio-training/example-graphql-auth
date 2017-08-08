import { merge } from 'lodash'

import UserResolver from './graph/user/resolver'
import VersionResolver from './graph/version/resolver'

export default merge(
  UserResolver,
  VersionResolver
)
