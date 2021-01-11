import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store';
import { ChangeMsg } from './../../store/post/post.action';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  msg: string = '';
  newMsg: string = '';
  constructor(private store: Store<IAppState>) {}
  ngOnInit(): void {
    this.store
      .select((state) => state.post)
      .subscribe((data) => (this.msg = data.msg));
  }

  changeMsg = (): void => {
    this.store.dispatch(new ChangeMsg(this.newMsg));
    console.log(this.newMsg);
  };
}
