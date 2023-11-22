<template>
  <button>
    <span id="button-demo-text"> {{ value }} </span>
  </button>
</template>

<script>
export default {
  name: "Demo",
  props: {
    value: String,
  },
};
</script>

<style>
#button-demo {
  width: 293px;
  height: 42px;
  background-color: #fff;
  color: #000;
  border: 1px solid #189ea7;
  border-radius: 8px;
  font-size: 16px;
}

#button-demo:hover {
  cursor: pointer;
  transition: 1s;
  background-color: #189ea7;
  color: #fff;
}

#button-demo:hover #button-demo-text {
  opacity: 1;
}

#button-demo-text {
  opacity: 0.3;
  transition: opacity 1s;
}
</style>
