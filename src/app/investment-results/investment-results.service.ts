import { Injectable } from "@angular/core";

export interface InvestmentData {
    year: number;
    interest: number;
    valueEndOfYear: number;
    annualInvestment: number;
    totalInterest: number;
    totalAmountInvested: number;
}



@Injectable({ providedIn: 'root' })
export class InvestmentService {
    private investmentResults: InvestmentData[] | null = null;

    calculateInvestmentResults(initialInvestment: number, duration: number, expectedReturn: number, annualInvestment: number) {
        const annualData = [];
        let investmentValue = initialInvestment;

        for (let i = 0; i < duration; i++) {
            const year = i + 1;
            const interestEarnedInYear = investmentValue * (expectedReturn / 100);
            investmentValue += interestEarnedInYear + annualInvestment;
            const totalInterest =
                investmentValue - annualInvestment * year - initialInvestment;
            annualData.push({
                year: year,
                interest: interestEarnedInYear,
                valueEndOfYear: investmentValue,
                annualInvestment: annualInvestment,
                totalInterest: totalInterest,
                totalAmountInvested: initialInvestment + annualInvestment * year,
            });
        }

        this.investmentResults = annualData;
    }

    getInvestmentResults(){
        return this.investmentResults;
    }

}