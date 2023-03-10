<script>
  let username = ''
  let password = ''
  let email = ''

  function handleSubmit() {
    // 处理表单提交逻辑
  }
</script>

<!-- register.svelte -->
<div class="contain bg-white h-screen flex justify-center items-center">
  <div class="register-container card w-1/3 h-3/5">
    <h2>用户注册</h2>
    <form on:submit|preventDefault={handleSubmit}>
      <label for="username">用户名:</label>
      <input type="text" id="username" bind:value={username} />

      <label for="password">密码:</label>
      <input type="password" id="password" bind:value={password} />

      <label for="email">Email:</label>
      <input type="email" id="email" bind:value={email} />

      <button type="submit">注册</button>
    </form>
  </div>
</div>

<style>
  .register-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 20px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  label {
    font-size: 1.2rem;
    margin-bottom: 10px;
  }

  input {
    font-size: 1.2rem;
    padding: 10px;
    border-radius: 5px;
    border: none;
    margin-bottom: 20px;
  }

  button {
    font-size: 1.2rem;
    padding: 10px 20px;
    border-radius: 5px;
    background-color: #007bff;
    color: #fff;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }

  button:hover {
    background-color: #0056b3;
  }
</style>
