import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  array = [1, 2, 3, 4];
  effect = 'scrollx';

  panels = [
    {
      active: true,
      name: 'Test Engineer / Automation Tester (Presents)',
      disabled: false,
      data:[
        'Perform system, functional, performance and regression testing phamartical smartsearch portal',
        'Develop test automation framework using selenium & cypress.',
        'Identified, documented and reported bugs, error and other critical issues.'
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
      name: 'Junior Test Engineer (2 Years)',
      data:[
        'Preparing test scenario, test cases and test executions',
        'Develop automation framework using BDD & TDD approach.',
        'Conducting UAT sessions with clients.',
        'Perform system, functional, Non-functional and regression testing.'
      ],
      styles:{
        background: '#f7f7f7'
      }
    },
    {
      active: false,
      disabled: false,
      name: 'Internship (4 Months)',
      data:[
        'Involve in software developement',
        'Asisst & provide software supporting documents with client',
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