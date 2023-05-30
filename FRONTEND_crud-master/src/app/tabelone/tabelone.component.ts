import { Component, EventEmitter } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeersService } from './services/employee.service';
import { Employee, Serverdata } from '../Employee';
@Component({
  selector: 'app-tabelone',
  templateUrl: './tabelone.component.html',
  styleUrls: ['./tabelone.component.css']
})
export class TabeloneComponent {

  data: Serverdata | undefined;
  dataSource: MatTableDataSource<Employee>;
  displayedColumns: string[] = ["gender"];

  constructor(private employeeService: EmployeersService) {
    this.loadData("http://localhost:8080/employees?size=10");
    this.dataSource = new MatTableDataSource(this.data?._embedded.employees);
  }


  loadData(url: string) {
    this.employeeService.getData(url).subscribe(
      serverResponse => {
        this.data = serverResponse;
        this.dataSource.data = this.data._embedded.employees;
      }
    )
  }


  nextpage() {
    console.log(this.data);
    if (this.data) this.loadData(this.data._links.next.href)
  }

  prevpage() {
    if (this.data) this.loadData(this.data._links.prev.href)
  }

  firstpage() {
    if (this.data) this.loadData(this.data._links.first.href)
  }

  lastpage() {
    if (this.data) this.loadData(this.data._links.last.href)
  }


  /*delete(index:number){
    this.restClient.remove(index).subscribe(()=>{
      this.loadData(this.Current);
    });
  }*/




}
