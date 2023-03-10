<script>
  import { page } from '$app/stores'
</script>

{$page.url.pathname.split('/').slice(0, -1).join('/')}
