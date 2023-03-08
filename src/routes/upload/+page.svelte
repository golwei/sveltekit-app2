<script>
  import { onMount } from 'svelte'
  import { enhance } from '$app/forms';

  let file

  function handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData()
    formData.append('file', file)
    fetch('/upload/?/uploadfile', {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.error(error)
      })
  }
</script>

<!-- <form on:submit={handleSubmit}> -->
<form method="post" action="?/uploadfile" use:enhance>
  <input type="text" name="tx" id="111">
  <input type="file" name="imgs" bind:files={file} multiple/>
  <button type="submit">上传x</button>
</form>
