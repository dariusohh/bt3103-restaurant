<template>
    <div>
        <ul>
            <li v-for="order in orders" v-bind:key="order[0]">
                <div id="dishes">
                <p v-for="(count,name) in order[1]" v-bind:key="name">
                {{name}}: {{count}}
                </p>
                </div>
                <div id="buttons">
                <button v-bind:id="order[0]" v-on:click="deleteItem($event)">Delete</button>
                <button v-bind:id="order[0]" v-on:click="route($event)">Modify</button>
                </div>
            </li> 
        </ul>
    </div>
</template>

<script>
import database from '../firebase.js'

export default {
    data() {
        return {
            orders:[]
        }
    },
    methods: {
        fetchItems:function() {
            database.collection('orders').get().then(snapshot => {
                snapshot.docs.forEach(doc => {
                    this.orders.push([doc.id,doc.data()])
                });          
            });
        },
        deleteItem:function(event) {
            var doc_id = event.target.getAttribute("id");
            database.collection('orders').doc(doc_id).delete().then(() => {
                location.reload()
            });
        },
        route:function(event) {
            var doc_id = event.target.getAttribute("id");
            this.$router.push({name:'modify',params:{doc_id:doc_id}})
        }
    },
    created() {
    this.fetchItems();
  }
}
</script>

<style scoped> 
ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}
li {
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 10px;
  border: 1px solid #222;
  margin: 10px;
}

button {
  width: 65px;
  height: 30px;
  background-color: #f7cac9;
  border-radius: 10px;
  border-width: 1px;
}

#dishes {
    width:50%;
    float:left;
}

#dishes p {
    margin:0;
    font-size:20px;
}

#buttons {
    float:left;
    width:50%;
}
</style>
