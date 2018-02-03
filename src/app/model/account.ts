import { Category } from './category';
import { Biller } from './biller';

export class Account {
    id: number;
    accountNumber: String;
    biller: Biller = new Biller();
    category: Category = new Category;
    accountType: String;
    mobile: number;
}