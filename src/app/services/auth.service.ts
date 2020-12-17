import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: User;
  constructor(private db: AngularFireDatabase) { }

  public async getUsers(): Promise<User[]> {
    let users: User[] = [];
    await this.db.database.ref(`users`).once('value').then((snapshot) => users = snapshot.val());
    return users;
  }

  public async register(user: User): Promise<void> {
    const users: User[] = await this.getUsers();
    if (!this.checkIfUserExist(user.email, users)) {
      users.push(user);
      this.db.database.ref(`users`).set(users).then();
      this.user = user;
    } else {
      alert('This email already exist');
    }
  }

  public async auth(user: User): Promise<void> {
    const users: User[] = await this.getUsers();
    if (this.checkIfUserExist(user.email, users)) {
      this.user = user;
    } else {
      alert('No user with such email. Sign up first');
    }
  }

  public checkIfUserExist(userEmail: string, users: User[]): boolean {
    return users.some(dbUser => dbUser.email === userEmail);
  }
}
