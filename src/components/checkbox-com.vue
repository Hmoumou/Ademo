<template>
        <label class="checkbox-com" >
            <input type="checkbox" class="checkbox-com-input" :model='currentValue'>
            <span class="box-wrap"></span>
        </label>
</template>

<script>
    export default {
        props:{
            value:{
                type: [String,Number]
            }
        },
        data(){
            return{
                currentValue:this.value
            }
        },
        watch:{
            currentValue(newValue){
                this.$emit('input', newValue)
                this.$emit('change', newValue)
            },
            value(){
                this.currentValue = this.value
            }
        },
    }
</script>

<style scoped>
.checkbox-com{
    width: 40px;
    height: 40px;
    display: inline-block;
    border: 1px solid #c1c1c1;
    border-radius: 4px;
}
.box-wrap{
    transform: scale(0);
    position: relative;
    display: inline-block;
    width: 100%;
    height: 100%;
}
.checkbox-com-input:checked + .box-wrap{
    transition: transform .05s ease;
    transform: scale(1);
    background: #409eff;
}
.checkbox-com-input:checked + .box-wrap::after{
    position: absolute;
    
    content:'';
    left: 50%;
    top: 40%;
    width: 24px;
    height:10px;
    display: block;
    /* border: 20px solid transparent;
    border-right: 40px solid transparent; */
    border-left:4px solid #fff; 
    border-bottom:4px solid #fff; 
    transform: translate(-50%,-50%) rotate(-45deg)

}
.checkbox-com-input{
    display: none;
}
</style>