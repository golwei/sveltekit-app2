<script>
  import { Avatar } from '@skeletonlabs/skeleton'
  /**
   * @type {{ path: string; }}
   */
  export let data
</script>

<Avatar width="m-5 w-48" rounded="rounded-xl" src="/{data.path[1]}" />

<div class=" relative w-48 h-48 bg-red-500 overflow-hidden">
  <!-- svelte-ignore a11y-img-redundant-alt -->
  <img class=" bg-red-500 " src="/{data.path[3]}" alt="My Image" />
  <label for="checkbox1" class="absolute right-0 top-0">
    <input type="checkbox" id="checkbox1" class="checkbox" />
  </label>
</div>


