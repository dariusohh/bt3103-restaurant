<template>
    <div id = "shoppingBasket">
        <p>Menu:</p>
        <ul>
            <li v-for="item in itemsSelected" v-bind:key="item.id">
                {{item[0]}} x {{item[1]}}
            </li>
        </ul>
        <button id = "add-btn" v-on:click = "sendOrder()">Add Order</button>
    </div>
</template>

<script>
import database from '../firebase.js'

export default {
    props:{
      itemsSelected:{
          type:Array
      }
    },
    methods:{
        sendOrder:function() {
            var dishes = {
                "Prawn omelette":0,
                "Dry Beef Hor Fun":0,
                "Sambal KangKung":0,
                "Pork Fried Rice":0,
                "Mapo Tofu":0,
                "Cereal Prawn":0
            };
            this.itemsSelected.forEach(element => {
                dishes[element[0]] = element[1]
            })  
            database.collection("orders").add(dishes).then(() => {
                location.reload()
            })
        }
    }
}
</script>

<style>
#shoppingBasket {
  position: absolute;
  top: 23%;
  left: 78%;
}

p {
    font-size:30px;
}

li {
    font-size:30px;
}

#add-btn {
    font-size:20px;
    border-radius:10px;
    background-color:aquamarine;
}

</style>