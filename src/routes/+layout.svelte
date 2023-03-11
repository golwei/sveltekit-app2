<script>
  // Your selected Skeleton theme:
  import '@skeletonlabs/skeleton/themes/theme-skeleton.css'

  // This contains the bulk of Skeletons required styles:
  import '@skeletonlabs/skeleton/styles/all.css'

  // Finally, your application's global stylesheet (sometimes labeled 'app.css')
  import '../app.postcss'
  //  context
  import { setContext } from 'svelte'
  import { writable } from 'svelte/store'
  /** @type {import('./$types').LayoutData} */
  export let data
  // Create a store and update it when necessary...
  const user = writable()
  $: user.set(data.user)
  // ...and add it to the context for child components to access
  setContext('user', user)
</script>

<slot />
