<script>
  import { AppShell } from '@skeletonlabs/skeleton'
  import { AppBar } from '@skeletonlabs/skeleton'
  import { page } from '$app/stores'
  import { Avatar } from '@skeletonlabs/skeleton'
  //   export let data
  $: classesActive = (/** @type {string} */ href) =>
    href === $page.url.pathname ? '!bg-primary-500' : ''
  /** @type {import('./$types').LayoutData} */
</script>

<div class="contain h-screen">
  <AppShell slotFooter="bg-blue-500" slotSidebarLeft="p-1 bg-white">
    <svelte:fragment slot="header">
      <AppBar>
        <svelte:fragment slot="lead">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </svelte:fragment>
        大德农场
        <svelte:fragment slot="trail">
          <Avatar initials="le" />
        </svelte:fragment>
      </AppBar>


    </svelte:fragment>
    <svelte:fragment slot="sidebarLeft">
      <nav class="list-nav">
        <!-- (optionally you can provde a label here) -->
        <ul>
          <li>
            <a
              href="{$page.url.pathname.split('/').slice(0, -1).join('/')}/user"
            >
              <span class="badge bg-primary-500">💀</span>
              <span class="flex-auto">用户管理</span>
            </a>
          </li>
          <li>
            <a href="/admin/product" class={classesActive('/admin/product')}>
              <span class="badge bg-primary-500">💀</span>
              <span class="flex-auto">产品管理</span>
            </a>
          </li>
          <li>
            <div>
              <a href="/admin/video">
                <span class="badge bg-primary-500">💀</span>
                <span class="flex-auto">视频管理</span>
              </a>
            </div>
          </li>
          <!-- ... -->
        </ul>
      </nav>
    </svelte:fragment>
    <!-- Router Slot -->
    <slot />
    <!-- ---- / ---- -->
    <svelte:fragment slot="footer">Footer</svelte:fragment>
  </AppShell>
</div>
