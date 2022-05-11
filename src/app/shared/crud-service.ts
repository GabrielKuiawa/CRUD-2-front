import { HttpClient } from "@angular/common/http";
import { first, take, tap } from "rxjs";

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
        return this.http.post(this.API_URl,registro).pipe(first());
    }
    private update(registro:T){
        return this.http.patch(`${this.API_URl}/${registro['id' as keyof T]}`, registro).pipe(take(1));
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
    login(registro:T){
        return this.http.post(`${this.API_URl}`,registro).pipe(first());
    }

}
