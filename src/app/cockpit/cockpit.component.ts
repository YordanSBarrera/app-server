import { Component, OnInit, Output, ViewChild, ElementRef } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output('sCreated') serverCreated = new EventEmitter<{serverName: string, serverContent:string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent:string}>();

  @ViewChild('contenidoServ') EntradasServidor:ElementRef;
// newServerName='';
// newServerContent='';

  constructor() { }

  ngOnInit(): void {
  }
  onAddServer(dataEntrada:HTMLInputElement,cS:HTMLInputElement) {
    console.log(dataEntrada.value);
    this.serverCreated.emit({
      serverName:dataEntrada.value,
      serverContent:this.EntradasServidor.nativeElement.value
    });    
  }

  onAddBlueprint(nombreEntrada:HTMLInputElement,cS:HTMLInputElement) {
    this.blueprintCreated.emit({serverName:nombreEntrada.value,serverContent:cS.value}); 
  }

}
