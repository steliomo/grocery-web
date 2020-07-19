export enum ExpenseTypeCategory {
    
    COST = "COST",

    EXPENSE = "EXPENSE"
    
}

export namespace ExpenseTypeCategory {
    export function values(): ExpenseTypeCategory[]{
        return [ExpenseTypeCategory.COST, ExpenseTypeCategory.EXPENSE]
    }
}
