import { Bar } from 'vue-chartjs'
import database from '../../firebase.js'

export default {
    extends: Bar,
    data: function () {
      return {
          datacollection: {
              labels: [],
              datasets: [{
                  label: "Population (millions)",
                  backgroundColor: ["red","blue","orange","green","teal","purple"],
                  data: []
                }]
          },
          options: {
              legend: { display: false },
              title: {
                display: true,
                text: 'Total Number of each dish'
              },
              responsive: true,
              maintainAspectRatio: false,
              scales:{
                yAxes:[{
                    ticks:{
                        min:0
                    }
                 }], 
            }
          }
      }
    },
    methods: {
      fetchItems: function () {
        var totalItems = {}
        database.collection('orders').get().then(querySnapShot => {
          querySnapShot.forEach(doc => { 
              var order = doc.data()
              for (var dish in order) {
                  if (totalItems[dish]) {
                      totalItems[dish] += order[dish]
                  } else {
                      totalItems[dish] = order[dish]
                  }
              }
          })
          for (var dish of Object.keys(totalItems).sort()) {
            this.datacollection.labels.push(dish)
            this.datacollection.datasets[0].data.push(totalItems[dish])
          }
          this.renderChart(this.datacollection, this.options)
        })
      }
    },
    created () {
      this.fetchItems()
    }
  }