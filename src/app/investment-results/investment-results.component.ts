import { Component } from '@angular/core';
import { InvestmentService } from './investment-results.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-results',
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {

  constructor(private investmentService: InvestmentService) { }
  get InvestmentResults() {
    return this.investmentService.getInvestmentResults();
  }
}
