import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IAppState } from 'src/app/store';
import { msgPostSelector } from 'src/app/store/post/post.selector';
import { ChangeMsg } from './../../store/post/post.action';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  msg: string = '';
  newMsg: string = '';
  obMsg$!: Observable<string>;
  constructor(private store: Store<IAppState>) {}
  ngOnInit(): void {
    this.store
      .select((state) => state.post)
      .subscribe((data) => (this.msg = data.msg));
  }

  changeMsg = (): void => {
    this.store.dispatch(new ChangeMsg(this.newMsg));
    this.obMsg$ = this.store.select(msgPostSelector).pipe();

    console.log(this.obMsg$.subscribe());

    console.log('From select', this.newMsg);
  };
}
