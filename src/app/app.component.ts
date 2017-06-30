import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  clickdivide = false
  clickmultiply = false
  y = 2
  qq = 0
  studAns = []
  div = ' / '
  multi = ' * '
  min = 2
  second = 60
  t = 0
  score = 0;
  title = 'Maths Quiz';
  timer;
  symbol = [' - ',' + ']
  questionlist = []
  scoreboard = []
  question = Math.floor((Math.random() * 10)+1)+this.symbol[Math.floor((Math.random()*2)+0)]+Math.floor((Math.random() * 10)+1)
  ans = eval(this.question)
  answerlist = []
  constructor() {
  }
  enterName() {
    var txt;
    var person = prompt("What is your first and last name?")
    if (person == null || person == "") {
      txt = "User cancelled the prompt.";
    } else {
      txt = person
      this.scoreboard.push({name: person, score: this.score, t: this.t})
    }
  }
  multiply() {
    this.symbol.push(this.multi)
    this.y=this.y+1
  }
  division() {
    this.symbol.push(this.div)
    this.y=this.y+1
  }
  questions() {
    this.clickdivide=true
    this.clickmultiply=true
    this.questionlist = []
    this.answerlist = []
    this.score = 0
    clearInterval(this.timer)
    this.myTimer()
    this.t = 0
    this.studAns = []
    for (var i = 0; i < 20; i++){
      this.question = Math.floor((Math.random() * 10)+1)+this.symbol[Math.floor((Math.random()*this.y)+0)]+Math.floor((Math.random() * 10)+1)
      this.questionlist.push(this.question)
      this.ans = eval(this.question)
      this.answerlist.push(this.ans)
      console.log(this.questionlist)
      console.log(this.question)
      console.log(this.ans)
      console.log(this.answerlist)
    }
  }
  myTimer() {
    var a2 = this;
    this.timer = setInterval(function(){ myTimer() }, 1000 );
    function myTimer() {
      var d = new Date();
      a2.t = a2.t+1;
      if (a2.t == 120) {
        clearInterval(a2.timer)
        var txt;
        var person = prompt("Sadly, your time has ran out. What is your first and last name?")
        if (person == null || person == "") {
          txt = "User cancelled the prompt.";
        } else {
          txt = person
          this.scoreboard.push({name: person, score: this.score, t: this.t})
        }
      }
    }
  }
  marks() {
    this.symbol = [' - ',' + ']
    this.y = 2
    clearInterval(this.timer)
    for (var i = 0; i < 20; i++){
      if (this.studAns[i] == this.answerlist[i]){
        this.score = this.score + 1
      }
    }
    this.enterName()
    console.log(this.score)
    this.clickdivide=false
    this.clickmultiply=false
  }
}
