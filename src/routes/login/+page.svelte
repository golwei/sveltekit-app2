<script>
  let username = ''
  let password = ''

  function handleSubmit() {
    console.log(`Username: ${username}, Password: ${password}`)
  }
</script>

<main>
  <h1>Login</h1>
  <form method="POST" action="?/login">
    <label>
      Username:
      <input type="text" name="username" bind:value={username} />
    </label>
    <label>
      Password:
      <input type="password" name="password" bind:value={password} />
    </label>
    <button>Login</button>
	<button formaction="?/register">Register</button>
  </form>
</main>

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
