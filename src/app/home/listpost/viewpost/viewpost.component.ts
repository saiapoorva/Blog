import { Component, OnInit } from '@angular/core';
import {CreatepostService} from '../../createpost/createpost.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-viewpost',
  templateUrl: './viewpost.component.html',
  styleUrls: ['./viewpost.component.css'],
  providers: [CreatepostService]
})
export class ViewpostComponent implements OnInit {

  constructor(private _createpost : CreatepostService, private _activater : ActivatedRoute, private router : Router) { }

  //postid12 : any;
  viewpost1 : any = [];
  viewpost : any = [];
  

  ngOnInit() {
    

    this._activater.params.subscribe( (data) =>{

    var postid12 = data.lid;
    //this.router.navigate(['Listpost',postid12], { relativeTo: this. _activater});

      this._createpost.display().subscribe((data1 : any)=>{
        this.viewpost1 = data1

        var p = this.viewpost1.findIndex(x => x._id == postid12);

        this.viewpost = this.viewpost1[p];
      });

    });
  }
backtolistposts(){

  this.router.navigate(['home/Listpost']);
}


}
