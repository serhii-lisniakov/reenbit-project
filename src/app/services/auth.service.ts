import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { AngularFireDatabase } from '@angular/fire/database';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user = new BehaviorSubject<User>({email: '', id: ''});
  public onProductButtonClick = new BehaviorSubject<boolean>(false);
  constructor(private db: AngularFireDatabase) { }

  public async getUsers(): Promise<User[]> {
    let users: User[] = [];
    await this.db.database.ref(`userList`).once('value').then((snapshot) => users = snapshot.val());
    return users;
  }

  public async getUser(userEmail: string): Promise<User> {
    const users: User[] = await this.getUsers();
    return users.find((user) => user.email === userEmail);
  }

  private setUser(user: User): void {
    localStorage.setItem('freshnesecomUser', JSON.stringify(user));
    this.user.next(user);
    this.onProductButtonClick.next(true);
  }

  public async register(user: User): Promise<boolean> {
    const users: User[] = await this.getUsers();
    if (!this.checkIfUserExist(user.email, users)) {
      users.push(user);
      this.db.database.ref(`userList`).set(users).then();
      this.setUser(user);
      return true;
    } else {
      alert('This email already exist');
      return false;
    }
  }

  public async auth(user: User): Promise<boolean> {
    const users: User[] = await this.getUsers();
    if (this.checkIfUserExist(user.email, users)) {
      if (!user.id) {
        user = await this.getUser(user.email);
      }
      this.setUser(user);
      return true;
    } else {
      alert('No user with such email. Sign up first');
      return false;
    }
  }

  public authOnReload(): void {
    const user = JSON.parse(localStorage.getItem('freshnesecomUser'));
    if (user) {
      this.user.next(user);
    }
  }

  public checkIfUserExist(userEmail: string, users: User[]): boolean {
    return users.some(dbUser => dbUser.email === userEmail);
  }
}
