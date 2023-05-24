import { Component,OnInit,OnChanges, SimpleChanges,AfterViewInit,AfterContentChecked ,AfterViewChecked, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.scss']
})
export class LifecycleComponent implements OnInit,OnChanges,AfterViewInit,AfterContentChecked,AfterViewChecked,OnDestroy{
constructor(){
  console.log("inside constructor")
}
  ngOnDestroy(): void {
    console.log("ngOnDestroy")
    // throw new Error('Method not implemented.');
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked")
    // throw new Error('Method not implemented.');
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked")
    // throw new Error('Method not implemented.');
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit")
    // throw new Error('Method not implemented.');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges")
    // throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    console.log("inside ngOnInit")
  }
  age:number=22
}
