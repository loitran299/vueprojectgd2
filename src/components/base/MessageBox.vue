<template>
  <div id="messageID" class="overlay">
    <Vue3DraggableResizable
      :initW="833"
      :initH="596"
      :x="x"
      :y="y"
      :w="w"
      :h="h"
      :active="active"
      :draggable="true"
      :resizable="false"
      :parent="false"
      class="form-content"
    >
    <div class="content-top">
        <span>MiSA Promotion Process</span>
        <button class="icon-close" @click="isShowForm = false"></button>
      </div>
    </Vue3DraggableResizable>
  </div>
</template>

<script>
export default {
  name: "messageID",
};
</script>

<style scoped>
@import url("@/assets/css/base/messagebox.css");
</style>