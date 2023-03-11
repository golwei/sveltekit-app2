<script>
  /** @type {import('./$types').PageData} */
  export let data
  /** @type {import('./$types').ActionData} */
  export let form
  let username = ''
  let password = ''

  function handleSubmit() {
    console.log(`Username: ${username}, Password: ${password}`)
  }
</script>

<!--  -->

{#if form?.success}
  <!-- this message is ephemeral; it exists because the page was rendered in
       response to a form submission. it will vanish if the user reloads -->
  <p>Successfully logged in! Welcome back, {data.user.name}</p>
{:else}
  <main>
    <h1>登录</h1>
    <form method="POST" action="?/login">
      {#if form?.missing}<p class="error">The email field is required</p>{/if}
      <label>
        用户名: <input type="text" name="username" bind:value={username} />
      </label>
      <label>
        密码: <input type="password" name="password" bind:value={password} />
      </label>
      <div class="">
        <button>登录</button>
        <button formaction="?/register">注册</button>
      </div>
    </form>
  </main>
{/if}

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  label {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1rem;
  }
  input {
    padding: 0.5rem;
    margin-top: 0.5rem;
    border-radius: 0.25rem;
    border: 1px solid gray;
  }
  button {
    padding: 0.5rem 1rem;
    margin-top: 1rem;
    border-radius: 0.25rem;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
  }
  button:hover {
    background-color: #0069d9;
  }
</style>
