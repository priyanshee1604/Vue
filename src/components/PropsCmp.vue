<template>
    <div>
        <p>Hello form the PropsCmp, below you will see message from the parent component passed using props.</p>
        <p>{{ message }}</p>
    </div>
</template>

<script>

export default{
    props:{
        message: String
    }

}

</script>
<style>
</style>