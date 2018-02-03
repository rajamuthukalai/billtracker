import { Biller } from './biller';
import { Category } from './category';

export class Bill {
    id: number;
    number: String;
    amount: number;
    dueDate: Date;
    biller: Biller;
    category: Category;
}