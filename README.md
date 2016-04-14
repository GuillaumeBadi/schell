
``` javascript

import { $_ } from 'schell'

$_('npm install')
  .then(() => $_('npm run build'))
  .catch(e => console.log(e))

```
