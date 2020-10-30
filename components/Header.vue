<template>
  <section class="container">
    <div class="header">
      <div class="titles"><NLink to="/" class="link">Bizup</NLink></div>

      
      <div class="titles">
        <NLink to="/" class="linkr">Logout</NLink>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "Headers",
 
};
</script>
<style scoped>
.header {
  grid-area: header;
  position: absolute;
  top: 0;
  width: 100%;
  background-color: rgba(104, 7, 168, 0.61);
  color: cornsilk;
  display: inline-block;
  flex-direction: column;
  justify-content: space-between;
  align-items: right;
  padding: 0.5rem;
  overflow: visible;
}
.link {
  color: white;
  text-decoration: none;
  position: absolute;
  left: 20px;
  top: 0;
}
.linkr {
  justify-content: space-in-between;
  padding-left: 14px;
  padding-right: 2px;
  text-align: right;
  color: white;
  font-weight: bold;
  text-decoration: none;
}
.titles {
  display: inline-block;
  flex-direction: flex-start;
  align-items: flex-end;
}
.link,
.linkr:hover {
  text-decoration: underline;
}
</style>