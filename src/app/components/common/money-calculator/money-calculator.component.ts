import { Component } from '@angular/core';

@Component({
    selector: 'app-money-calculator',
    templateUrl: './money-calculator.component.html',
    styleUrls: ['./money-calculator.component.scss'],
})
export class MoneyCalculatorComponent {
    amountToSend: string = '25,040'; // Initial amount to send
    amountReceived: string = '14,633.84'; // Initial amount received
    exchangeRate: number = 0.6617; // Initial exchange rate (GBP to EUR)

    constructor() {}

    // Function to handle amount to send input change
    onAmountToSendChange(event: any) {
        const value = event.target.value;
        this.amountToSend = value;
        this.calculateReceivedAmount();
    }

    // Function to handle amount received input change
    onAmountReceivedChange(event: any) {
        const value = event.target.value;
        this.amountReceived = value;
        this.calculateSentAmount();
    }

    // Function to calculate amount received based on amount to send and exchange rate
    calculateReceivedAmount() {
        // Parse amount to send (remove commas and parse to float)
        const amountToSendFloat = parseFloat(
            this.amountToSend.replace(/,/g, '')
        );
        // Calculate amount received
        this.amountReceived = (amountToSendFloat * this.exchangeRate).toFixed(
            2
        ); // assuming 2 decimal places
    }

    // Function to calculate amount to send based on amount received and exchange rate
    calculateSentAmount() {
        // Parse amount received (remove commas and parse to float)
        const amountReceivedFloat = parseFloat(
            this.amountReceived.replace(/,/g, '')
        );
        // Calculate amount to send
        this.amountToSend = (amountReceivedFloat / this.exchangeRate).toFixed(
            2
        ); // assuming 2 decimal places
    }
}
