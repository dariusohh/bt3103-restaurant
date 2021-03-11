<template>
  <div>
      <button class="count-btn" v-on:click="decrement()">-</button>
        <p id="count">{{counter}}</p>
      <button class="count-btn" v-on:click="increment()">+</button>
  </div>
</template>

<script>
export default {
    props:{
      item:{
          type:Object
      }
    },
    data() {
        return {
            counter: 0
        }
    },
    methods: {
        increment: function() {
           if (this.counter >= 10) {
               alert("You cannot buy more than 10 items.");
           }  else {
               this.counter++;
           }
           this.$emit('counter', this.item, this.counter)
        },
        decrement: function() {
            if (this.counter > 0) {
                this.counter--;
            }
            this.$emit('counter', this.item, this.counter)
        }
    }
}
</script>

<style scoped>
    .count-btn {
        padding:17px;
        width:80px;
        border-radius:10px;
        font-size:40px;
        background-color:pink;
    }
    
    #count {
        display:inline;
        font-size:40px;
        margin: 20px;
    }
</style>
