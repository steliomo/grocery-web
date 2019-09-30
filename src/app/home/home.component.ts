import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private pieChart: Object[] = [];
  private barChart: Object[] = [];

  constructor() { }

  ngOnInit() {

    this.pieChart = new Chart('pieChart', {
      
      type: 'pie',
      
      data: {
          labels: ['Vendas', 'Lucros'],
          datasets: [{

              data: [20, 14],
            
              backgroundColor: [
                  '#00B0FF',
                  '#FF9100'
              ],

              borderColor: [
                  '#01579B',
                  '#FF6D00'
              ],
              
              borderWidth: 1
          }]
      }
    });

    this.barChart = new Chart('barChart', {

      type: 'horizontalBar',

      data: {

        labels: ['Sumo', 'Pedaços', 'Peixe', 'Rachel', 'Açucar', 'Agua', 'Massa', 'Óleo', 'Omo', 'Refresco'],
        
        datasets: [{
          
          label:  '# Top 10 Produtos mais vendidos',
          
          data: [10.5, 29.0, 25.3, 15.8, 7.50, 17, 26, 12.6, 18.9, 45.50],
          
          backgroundColor: [
              '#FF1744',
              '#C51162',
              '#D500F9',
              '#651FFF',
              '#00E5FF',
              '#B2FF59',
              '#FF8F00', 
              '#5D4037',
              '#FF3D00',
              '#66BB6A'
          ],
          
          borderWidth: 1

      }]
        
      }

    });


  }

}
