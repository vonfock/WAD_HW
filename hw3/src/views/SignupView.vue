<template>
  <main class="signup">

        <form class="signup-form" novalidate @submit.prevent="validateForm">
      <label for="email">Email</label>
      <input
        id="email"
        v-model="email"
        type="email"
        placeholder="Email"
        @input="emailTouched = true"
        required
      >

      <div v-if="emailTouched && emailError" class="validation-errors">
        <p>{{ emailError }}</p>
      </div>

      <label for="password">Password</label>
      <input
        id="password"
        v-model="password"
        type="password"
        placeholder="Password"
        @input="passwordTouched = true"
        required
      >

      <div v-if="passwordTouched && passwordErrors.length" class="validation-errors">
        <p>The password is not valid</p>
        <ul>
          <li v-for="error in passwordErrors" :key="error">
            {{ error }}
          </li>
        </ul>
      </div>

      <button type="submit">Signup</button>
    </form>
  </main>
</template>

<script>
export default {
  name: 'SignupView',
  data() {
    return {
      email: '',
      password: '',
      emailTouched: false,
      passwordTouched: false
    }
  },
  computed: {
    emailError() {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailPattern.test(this.email)) {
        return 'Please enter a valid email address'
      }
      return ''
    },
    passwordErrors() {
      const errors = []
      const password = this.password

      if (password.length < 8 || password.length >= 15) {
        errors.push('Password must be at least 8 characters and less than 15 characters')
      }
      if (!/[A-Z]/.test(password)) {
        errors.push('Includes at least one uppercase alphabet character')
      }
      if ((password.match(/[a-z]/g) || []).length < 2) {
        errors.push('Includes at least two lowercase alphabet characters')
      }
      if (!/[0-9]/.test(password)) {
        errors.push('Includes at least one numeric value')
      }
      if (!/^[A-Z]/.test(password)) {
        errors.push('It should start with an uppercase letter')
      }
      if (!password.includes('_')) {
        errors.push('It should include the character "_"')
      }

      return errors
    }
  },
  methods: {
    validateForm() {
      this.emailTouched = true
      this.passwordTouched = true
    },
    validatePassword() {
      this.passwordTouched = true
    }
  }
}
</script>

<style scoped>
.signup {
  min-height: 520px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 15px;
}

.signup-form {
  width: 360px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  border: 5px solid #c9c5c5;
  border-radius: 8px;
  background: #ffffff;
  text-align: left;
}

.signup-form label {
  font-size: 24px;
}

.signup-form input {
  box-sizing: border-box;
  width: 100%;
  padding: 8px;
  border: 1px solid #c9c5c5;
  border-radius: 4px;
}

.signup-form button {
  align-self: center;
  margin-top: 5px;
  padding: 7px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background: #5a79a5;
  color: #ffffff;
}

.validation-errors {
  color: #b00020;
  font-size: 16px;
}

.validation-errors p {
  margin: 0 0 4px;
  font-weight: bold;
}

.validation-errors ul {
  margin: 0;
  padding-left: 18px;
}
</style>