import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BudgetService } from '../../../core/services/budget.service';
import { concept } from '../../../core/models/concepts';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  formBudget!: FormGroup
  concept!: concept
  operations= [
    {
      abbreviation: 'ing',
      sign: '+'
  },
  {
    abbreviation: 'egr',
    sign: '-'
  }
  ]

  constructor(
    private fb: FormBuilder,
    private _budgetSvc: BudgetService
  )
  {
    this.initForm()
  }

  private initForm(){
    this.formBudget = this.fb.group({
      operation: ['ing', [Validators.required]],
      description: ['', [Validators.minLength(3), Validators.required]],
      value: ['', [Validators.required, Validators.min(0)]]
    })
  }

  send(){
    if (this.formBudget.invalid) return ;
    this.concept = this.formBudget.value
    const operation = this.concept.operation

    //Send Form

    operation ==='ing'
    ? this._budgetSvc.listIncome.push(this.concept)
    : this._budgetSvc.listExpenses.push(this.concept)

    //reset form

    this.formBudget.reset()
  }
}
