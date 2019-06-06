import { Injectable } from '@angular/core';
import { Job } from '../../models/job/job';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  private apiUrl = environment.apiUrl + "hr/jobs";

  constructor(private http: HttpClient) { }

  public getJobs(): Observable<Job[]> {
    return this.http.get<any>(this.apiUrl)
      .pipe(
        map(res => {
          let jobs: Job[] = [];
          res.forEach(object => {
            jobs.push(new Job(object.id, object.name, object.description))
          });
          return jobs;
        })
      );
  }

  public getJob(id: number): Observable<Job> {
    return this.http.get<any>(`${this.apiUrl}/${id}`)
      .pipe(
        map(res => {
          let job = new Job(res.id, res.name, res.description);
          return job;
        })
      );
  }
}