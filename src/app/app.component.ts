import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'random';
  input: any
  mobile: boolean;

  ngOnInit() {
    if (window.screen.width < 768) { // 768px portrait
      this.mobile = false;
    }
    else if (window.screen.width >= 768){
       this.mobile = true;
    }
  }

  
  createChoice(){
    let ul = document.querySelector("#ul");
    let li = document.createElement('li');
    li.classList.add('bg-white');
    li.classList.add('li');
    li.classList.add('m-5');
    li.classList.add('h-10');
    li.classList.add('flex');
    li.classList.add('items-center');
    li.classList.add('justify-center');
    li.classList.add('rounded-md');
    li.classList.add('text-gray-500');
    let newinput = this.input.replace(/\s/g, '')
    newinput = newinput.replace(/'/g, 'A');
    li.setAttribute('id',newinput);
    li.textContent = this.input;
    ul!.appendChild(li)
    this.input = '';
  }


  randomize(): void {
    let ul = document.querySelector("#ul");
    let lis = document.querySelectorAll('li');
    let items: any[] = [];
    for (let i = 0; i < lis.length; i++)
    {
      items.push(lis[i].innerHTML);
    }
    
    let random = items[Math.floor(Math.random() * items.length)];
    let newrandom = random.replace(/\s/g, '')
    newrandom = newrandom.replace(/'/g, 'A');
    // select the li
    let selectedLi = document.getElementById(newrandom);
    console.log(selectedLi)
document.querySelectorAll(".li:not(#"+ newrandom +")").forEach((element,i) => {
   ul!.removeChild(element);
});
  selectedLi.style.backgroundColor = "#e74c3c";
  selectedLi.style.color = "#ecf0f1";
  selectedLi.classList.add("text-2xl");
  selectedLi.append(' 👍🏻')
  }
  
}

function random(random: any) {
  throw new Error('Function not implemented.');
}

function id(id: any, arg1: number) {
  throw new Error('Function not implemented.');
}

