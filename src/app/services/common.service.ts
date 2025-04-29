import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
    getIncome(){
      return   [
            { id: 1, value: "Salary", icon: "payments" },
            { id: 2, value: "Freelance", icon: "laptop_mac" },
            { id: 3, value: "Business", icon: "storefront" },
            { id: 4, value: "Rental", icon: "house" },
            { id: 5, value: "Investment", icon: "trending_up" },
            { id: 6, value: "Bonuses", icon: "card_giftcard" },
            { id: 7, value: "Pension", icon: "elderly" },
            { id: 8, value: "Government", icon: "account_balance" },
            { id: 9, value: "Gifts", icon: "redeem" },
            { id: 10, value: "Refunds", icon: "undo" },
            { id: 11, value: "Royalties", icon: "copyright" },
            { id: 12, value: "Other Income", icon: "attach_money" },
          ];
    }
    getExpense(){
        return [
            { id: 1, value: "Housing", icon: "home" },
            { id: 2, value: "Transportation", icon: "directions_car" },
            { id: 3, value: "Living", icon: "shopping_cart" },
            { id: 4, value: "Health", icon: "local_hospital" },
            { id: 5, value: "Education", icon: "school" },
            { id: 6, value: "Financial", icon: "account_balance_wallet" },
            { id: 7, value: "Entertainment", icon: "movie" },
            { id: 8, value: "Others", icon: "category" }
          ]
    }
}