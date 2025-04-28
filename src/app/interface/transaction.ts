export interface Transaction {
    title: string;
    amount: number;
    type: string; // You can change to enum or number if needed
    date: string; // or Date if you want to cast it
    category: string;
    paymentMethod: string;
  }
  