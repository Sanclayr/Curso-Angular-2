import { Observable } from 'rxjs/Rx';
import { Injectable } from "@angular/core";
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { AlunosFormComponent } from "../alunos/alunos-form/alunos-form.component";
import { IFormCanDeactivate } from './iform-candeactivate';


@Injectable()
export class AlunosDeactivateGuard implements CanDeactivate<IFormCanDeactivate> {

        canDeactivate(
            component: IFormCanDeactivate,
            route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot
        ): Observable<boolean>|Promise<boolean>|boolean {

            //return component.podeMudarRota();
            return component.podeDesativar();
    }  
}

