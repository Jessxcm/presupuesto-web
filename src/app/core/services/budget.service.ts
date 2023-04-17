import { Injectable } from '@angular/core';
import { concept } from '../models/concepts';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  listIncome : concept[] = [
    {
      operation: 'ing',
      description: 'Salario',
      value: 2100
    },
    {
      operation: 'ing',
      description: 'Venta coche',
      value: 1500
    }
  ]
  listExpenses: concept[] = [
    {
      operation: 'egr',
      description: 'Renta Departamento',
      value: 900
    },
    {
      operation: 'egr',
      description: 'Ropa',
      value: 435
    }
  ]

  constructor() { }
}
