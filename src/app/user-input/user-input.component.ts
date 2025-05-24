import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../investment-results/investment-results.service';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  intialInvestment: string = '';
  annualInvestment: string = '';
  duration: string = '';
  expectedReturn: string = '';

  constructor(private investmentService: InvestmentService) { }
  @Output() showResults = new EventEmitter<boolean>();

  onSubmit() {
    if (this.intialInvestment == '' && this.annualInvestment == '' && this.duration == '' && this.expectedReturn == '') {
      this.showResults.emit(false);
    } else {
      this.investmentService.calculateInvestmentResults(parseInt(this.intialInvestment), parseInt(this.duration), parseInt(this.expectedReturn), parseInt(this.annualInvestment));
      this.showResults.emit(true);
    }
  }
}
