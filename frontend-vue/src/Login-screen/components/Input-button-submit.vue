<template>
  <button>{{ value }}</button>
</template>

<script>
export default {
  name: "Button",
  props: {
    value: String,
  },
};
</script>

<style>
#button-submit {
  width: 293px;
  height: 42px;
  background-color: #189ea7;
  color: #fff;
  border-radius: 8px;
  border: none;
  font-size: 16px;
}

#button-submit:hover {
  cursor: pointer;
}
</style>
