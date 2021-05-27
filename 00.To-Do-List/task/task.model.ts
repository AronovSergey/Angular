export class Task {
    constructor(
        public id: number,
        public description: string,
        public isCompleted: boolean = false
    ) {}
}
