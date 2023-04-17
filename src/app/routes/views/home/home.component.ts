import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { concept } from '../../../core/models/concepts';
import { BudgetService } from '../../../core/services/budget.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit{

  totalIncome: concept[]= []
  totalExpenses: concept[]= []

  private _budgetSvc = inject(BudgetService)

  ngOnInit(): void {
    this.totalIncome = this._budgetSvc.listIncome
    this.totalExpenses = this._budgetSvc.listExpenses
  }

  getTotalIncome(): number {
    let total = 0
    this.totalIncome.map((income: concept)=>{
      total += income.value
    })

    return total
  }

  getTotalExpenses(): number {
    let total = 0
    this.totalExpenses.map((expenses: concept)=>{
      total += expenses.value
    })


    return total
  }

  getTotalBudget(): number{
    return this.getTotalIncome() - this.getTotalExpenses()
  }
   getTotalPercentage(): number{

    return this.getTotalExpenses() / this.getTotalIncome()
   }

}
