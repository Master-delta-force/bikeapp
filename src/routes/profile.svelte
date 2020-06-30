<script>
import Input from '../components/atoms/Input.svelte'
import Image from '../components/atoms/Image.svelte'
import Button from '../components/atoms/Button.svelte'
import Alert from '../components/atoms/Alert.svelte'
import ActionButton from '../components/atoms/ActionButton.svelte'
import { EditIcon, RotateCcwIcon } from 'svelte-feather-icons'

let alertOpen = false
let alertType = 'success'
let alertMessage = ''
let isEditing = false

let form = {
  name: '',
  lastName: '',
  email: '',
  password: '',
  passwordConfirm: '',
}


function handleSubmit () {
  alertMessage = 'Usuario actualizado.'
  if (form.password !== form.passwordConfirm) {
    alertType = 'error'
    alertMessage = 'La contraseña no coincide.'
  }
  alertOpen = true
}

function handleAlertClose () {
  alertOpen = false
  alertType = 'sucess'
}

function handleInputChange (event) {
  const { name, value } = event.target
  form[name] = value
}

function toggleIsEditing () {
  isEditing = !isEditing
}

</script>

<style>
  .profile_-container {
    max-width: 400px;
    margin: 0 auto;
  }

  label {
    width: 200px;
    display: block;
    margin: 0 auto;
  }

  input {
    display: none;
  }

  .profile--inputs-container {
    margin-bottom: calc(var(--common-spacing-unit) * 2);
  }
</style>

<svelte:head>
  <title>Profile</title>
</svelte:head>

<div class="profile_-container">
  <form on:submit|preventDefault={handleSubmit}>
    <div class="profile--inputs-container">
      <label html="profile-picture">
        <Image src={`https://robohash.org/${Date.now()}?set=set2&bgset=bg1`}/>
        <input id="profile-picture" type="file"/>
      </label>
      <Input
        required
        onInput={handleInputChange}
        value={form.name}
        label="Nombre"
        name="name"
      />
      <Input
        required
        onInput={handleInputChange}
        value={form.lastName}
        label="Apellido"
        name="lastName"
      />
      <Input
        required
        onInput={handleInputChange}
        value={form.email}
        type="email"
        label="Correo electrónico"
        name="email"
      />
      {#if isEditing}
        <Input
          required
          onInput={handleInputChange}
          value={form.password}
          type="password"
          label="Contraseña"
          name="password"
        />
        <Input
          required
          onInput={handleInputChange}
          value={form.passwordConfirm}
          type="password"
          label="Confirmar Contraseña"
          name="passwordConfirm"
        />
      {/if}
    </div>
    {#if isEditing}
      <Button type="submit">Guardar</Button>
    {/if}
  </form>
  <Alert
    type={alertType}
    open={alertOpen}
    onClose={handleAlertClose}
    message={alertMessage}
  />
  <ActionButton onClick={toggleIsEditing}>
    {#if isEditing}
      <RotateCcwIcon/>
    {:else}
      <EditIcon/>
    {/if}
  </ActionButton>
</div>
