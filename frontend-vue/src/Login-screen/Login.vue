<script>
import Input from "./components/Input-default.vue";
import Button from "./components/Input-button-submit.vue";
import Demo from "./components/Input-button-demo.vue";

export default {
  name: "Login",
  components: {
    Input,
    Button,
    Demo,
  },
  data() {
    return {
      value: "Entrar",
      demoValue: "Entrar com conta demo",
    };
  },
};
</script>

<template>
  <div id="container">
    <span id="title">Login</span>
    <div class="label-container">
      <label> Email </label>
      <Input class="input-default" type="email" />
    </div>

    <div class="label-container">
      <label> Senha</label>
      <Input class="input-default" type="password" />
    </div>

    <Button id="button-submit" :value="value" />
    <div>
      <span id="no-account">Não tem uma conta?</span>
      <a href="">Criar conta</a>
    </div>
    <div id="or">
      <div class="line"></div>
      Ou
      <div class="line"></div>
    </div>
    <Demo id="button-demo" :value="demoValue" />
  </div>
</template>

<style scoped>
#title {
  font-size: 32px;
  font-weight: bold;
}

#container {
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
}

label {
  font-size: 16px;
}

.label-container {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

#no-account {
  color: #000;
  opacity: 0.5;
  margin-right: 6px;
}

a {
  color: #189ea7;
  text-decoration: none;
}

.line {
  width: 128px;
  height: 1px;
  background-color: #000;
  margin-left: 10px;
  margin-right: 10px;
}

#or {
  display: flex;
  align-items: center;
  opacity: 0.3;
}
</style>
