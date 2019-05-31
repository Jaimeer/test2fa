<template>
  <div class="hello">
    <h1>Test2FA</h1>
    <form @submit.prevent="generateSecret">
      <input type="text" v-model="name" placeholder="name">
      <input type="text" v-model="account" placeholder="account">
      <button type="submit">Generate Secret</button>
    </form>
    <div>
      My Secret:
      <span v-if="!secret" class="grey">No secret</span>
      <template v-else>
        <p>
          Secret:
          <b>{{secret.secret}}</b>
        </p>
        <p>
          Uri:
          <a :href="secret.uri" target="_blank">{{secret.uri}}</a>
        </p>
        <p>
          <img :src="secret.qr">
        </p>
      </template>
    </div>
    <template v-if="secret">
      <form @submit.prevent="checkToken">
        <input type="text" v-model="token" placeholder="token">
        <button type="submit">Check Token</button>
        <button @click.prevent="generateToken">Generate Token</button>
      </form>
      <p>
        {{checkResult}}
      </p>
    </template>
    <hr>
    <h2>Documentation</h2>
    <p>
      Github:
      <a href="https://www.npmjs.com/package/node-2fa" target="_blank">node-2fa</a>
    </p>
    <pre class="doc">
      const twoFactor = require('node-2fa');
 
      const newSecret = twoFactor.generateSecret({name: 'My Awesome App', account: 'johndoe'});
      /*
      { secret: 'XDQXYCP5AC6FA32FQXDGJSPBIDYNKK5W',
        uri: 'otpauth://totp/My Awesome App:johndoe%3Fsecret=XDQXYCP5AC6FA32FQXDGJSPBIDYNKK5W',
        qr: 'https://chart.googleapis.com/chart?chs=166x166&chld=L|0&cht=qr&chl=otpauth://totp/My Awesome App:johndoe%3Fsecret=XDQXYCP5AC6FA32FQXDGJSPBIDYNKK5W' 
      }
      */
      
      const newToken = twoFactor.generateToken('XDQXYCP5AC6FA32FQXDGJSPBIDYNKK5W');
      // { token: '630618' }
      
      twoFactor.verifyToken('XDQXYCP5AC6FA32FQXDGJSPBIDYNKK5W', '765075');
      // { delta: 0 }
      
      twoFactor.verifyToken('XDQXYCP5AC6FA32FQXDGJSPBIDYNKK5W', '00');
      // null
    </pre>
  </div>
</template>

<script>
import twoFactor from 'node-2fa'

export default {
  name: 'HelloWorld',
  props: {},
  data() {
    return {
      name: 'MyName',
      account: 'MyAccount',
      secret: '',
      token: '',
      checkResult: null,
    }
  },
  methods: {
    generateSecret() {
      const newSecret = twoFactor.generateSecret({ name: this.name, account: this.account })
      this.secret = newSecret
    },
    generateToken() {
      console.log('newToken')
      const newToken = twoFactor.generateToken(this.secret.secret)
      console.log('newToken', newToken)
      this.token = newToken.token
    },
    checkToken() {
      console.log('checkToken')
      const result = twoFactor.verifyToken(this.secret.secret, this.token)
      console.log('checkToken', result)
      this.checkResult = result || 'Invalid'
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.grey {
  color: grey;
}
.doc {
  text-align: left;
  max-width: 800px;
  white-space: pre-wrap;
  margin: auto;
}
</style>
