import { Directive, EventEmitter, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";

@Directive()
export class BaseComponent implements OnDestroy {

    protected subs:Subscription = new Subscription()
    
    ngOnDestroy(): void {
        this.subs.unsubscribe()
    }
}