import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  panels = [
    {
      active: true,
      name: 'Test Engineer / Automation Tester',
      disabled: false,
      data:[
        'Responsible exucting functional test',
        'Contirbute automation testing approach',
        'Work close with key stakeholders'
      ],
      styles:{
        background: '#f7f7f7',
        'border-top-left-radius': '25px',
        'border-top-right-radius': '25px'
      }
      
    },
    {
      active: false,
      disabled: false,
      name: 'Test Engineer',
      data:[
        'Responsible exucting functional test',
        'Contirbute automation testing approach',
        'Work close with key stakeholders'
      ],
      styles:{
        background: '#f7f7f7'
      }
    },
    {
      active: false,
      disabled: false,
      name: 'Internship',
      data:[
        'Responsible exucting functional test',
        'Contirbute automation testing approach',
        'Work close with key stakeholders'
      ],
      styles:{
        background: '#f7f7f7',
        'border-radius': '25px'
      }
    }
  ];

  ngOnInit() {
  
  }

}