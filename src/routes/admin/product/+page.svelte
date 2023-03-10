<script>
  import { FileDropzone } from '@skeletonlabs/skeleton'
  import { page } from '$app/stores'
</script>

{$page.url}
<FileDropzone name="files" />
