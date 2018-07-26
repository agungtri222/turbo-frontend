<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar color="primary">
                <v-toolbar-title align-center>
                  <img :src="logoImage" :width="logoSize">
                </v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-form @submit.prevent='doLogin()'>
                <v-card-text>
                    <v-text-field
                      v-model="emailField"
                      type="email"
                      name="email"
                      v-validate="`required|email`"
                      data-vv-name="email"
                      :error-messages="errors.collect('email')"
                      label="E-mail"
                      prepend-icon="person"
                      required
                    ></v-text-field>
                    <v-text-field
                      v-model="passwordField"
                      type="password"
                      name="password"
                      v-validate="`required`"
                      data-vv-name="password"
                      :error-messages="errors.collect('password')"
                      label="Password"
                      prepend-icon="lock"
                    ></v-text-field>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" type="submit">Login</v-btn>
                  </v-card-actions>
                </v-card-text>
              </v-form>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import AuthService from '@/services/auth'
export default {
  
  $_veeValidate: {
    validator: 'new'
  },

  data: () => ({
    drawer: null,
    logoImage: require('../../static/turbo-logo-final-white.png'),
    logoSize: '170px',

    emailField: '',
    passwordField: '',
    errorMessage: '',
    error: false
  }),

  methods: {
    async doLogin() {

      const validationResponse = await this.$validator.validateAll()
      if (validationResponse) {
        const response = await AuthService.login(
          this.emailField,
          this.passwordField
        )
  
        if (response.data.success == true) {
          window.localStorage.setItem('secret_key', response.data.secret_key)
          setTimeout(() => {
            this.$router.push('/')
          }, 450)
        } else {
          this.errorMessage = 'Wrong email and password combination'
        }
      } else {
        this.errorMessage = 'Please fill the correct email and password'
      }
    
    }

  }
}
</script>