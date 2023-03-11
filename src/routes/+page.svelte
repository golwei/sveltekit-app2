<script>
  /** @type {import('./$types').PageData} */
  export let data
  import { getContext } from 'svelte'
  // Retrieve user store from context
  const user = getContext('user')
</script>
<p>Welcome {$user?.name}</p>
<p>
  one: {data.one}
</p>
<p>
  two: {data.two}
</p>
<p>
  three:
  {#await data.streamed.three}
    Loading...
  {:then value}
    {value}
  {:catch error}
    {error.message}
  {/await}
</p>
