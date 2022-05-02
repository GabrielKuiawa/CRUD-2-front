import { HttpClient } from "@angular/common/http";
import { take, tap } from "rxjs";

export class CrudService<T>{

    constructor(
        protected http : HttpClient,
        private API_URl:any
    ){}

    list(){
    return this.http.get<T[]>(this. API_URl )
    .pipe(
        tap(console.log)
    );
    }
    loadByID(id:number){
        return this.http.get<T>(`${this.API_URl}/${id}`).pipe(take(1));
    };
    private create(registro:T){
        return this.http.post(this.API_URl,registro).pipe(take(1));
    }
    private update(registro:T){
        return this.http.put(`${this.API_URl}/${registro['id' as keyof T]}`, registro).pipe(take(1));
    }
    save(registro:T){
        if(registro['id' as keyof T]){
        return this.update(registro);
        }
        return this.create(registro);
    }
    remove(id:number){
        return this.http.delete(`${this.API_URl}/${id}`).pipe(take(1));
    }

}
