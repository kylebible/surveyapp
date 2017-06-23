export class Survey {
    constructor (
        public question: String = "",
        public option1: String = "",
        public option2: String = "",
        public option3: String = "",
        public option4: String = "",
        public option1_votes: Number = 0,
        public option2_votes: Number = 0,
        public option3_votes: Number = 0,
        public option4_votes: Number = 0,
        public _user: String = ""
    ) {}
}
