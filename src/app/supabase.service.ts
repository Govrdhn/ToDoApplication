import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { from, Observable } from 'rxjs';


export interface Profile {
  name: string
  email: string
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient('', '');
  }

  async register(email: string, password: string) {
    console.log(this.supabase)
    let res = await this.supabase.auth.signUp({ "email": email, "password": password });
    return res;
  }

  async login(email: string, password: string) {
    let ress = await this.supabase.auth.signInWithPassword({ email, password });
    console.log(ress)
    return ress;
  }

  async submittask(name: string, desc: string, duetime: number, priority: number, user: string | null) {
    const { error } = await this.supabase
      .from('tasks')
      .insert({ name: name, description: desc, duetime: duetime, priority: priority, userid: user })
    if (error) {
      console.log('error occured!')
      return 'err';
    }
    else return 'noerror';
  }

  fetchtask(): Observable<any> {
    const ress = this.supabase
      .from('tasks')
      .select();

    return from(ress);
  }
  deletetask(name: string) {
    const res = this.supabase
      .from('tasks')
      .delete()
      .eq('taskid', name)
    return from(res);
  }
  updatetask(name: string, desc: string, duetime: any, priority: number, taskid: string) {
    const result = this.supabase
      .from('tasks')
      .update({ name: name, description: desc, duetime: duetime, priority: priority })
      .eq('taskid', taskid)
    console.log(result)
    return from(result);
  }

  fetchwithid(taskid: string) {
    const ress = this.supabase
      .from('tasks')
      .select()
      .eq('taskid', taskid);

    return from(ress);

  }
}