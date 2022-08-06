export class Stock {
    constructor(
        public name: string,
        public code: string,
        public price: number,
        public percent: number, 
        public amount: number
        ){}
    
    isPositiveChange(): boolean {
        return this.percent >= 0;
    }
}
