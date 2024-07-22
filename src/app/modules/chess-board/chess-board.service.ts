import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FenConverter } from '../../chess-logic/FENConverter';

@Injectable({
  providedIn: 'root'
})
export class ChessBoardService {
  public chessBoardState$ = new BehaviorSubject<string>(FenConverter.initalPosition);
}