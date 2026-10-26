    class Student {
        constructor(name) {
            if (new.target === Student) {
                throw new Error("Cannot create Student directly");
            }

            this.name = name;
        }
    }

        const student = new Student ("Davis")