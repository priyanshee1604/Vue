<template>
  <div>
      <p>{{ count }}</p>
      <p>{{ message }}</p>
      <button @click="increment">Increment</button>
  </div>
</template>

<script>
export default{
    data(){
        return {
            count:0,
        }
    },
    methods:{
        increment(){
            this.count++;
        }
    },
    props:{
        message: String,
    }
}
</script>

<style>

</style>