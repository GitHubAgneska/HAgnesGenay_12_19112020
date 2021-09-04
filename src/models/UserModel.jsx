export class UserModel {
    constructor(id, firstName, lastName, age, score){
        this.id = id;
        
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.score = score;

        this.keyData = UserKeyDataModel;
        this.activitySessions = [];
        this.performances = [];
        this.sessions = [];
        this.introSentence = this.makeIntroSentence();
    }

    makeIntroSentence(){
        // depending on -?-- : return either..
        return 'Félicitations, ..'
    }
}

export class UserKeyDataModel {
    constructor(calorieCount,proteinCount,carbohydrateCount,lipidCount){
        this.calorieCount = calorieCount;
        this.proteinCount = proteinCount;
        this.carbohydrateCount = carbohydrateCount;
        this.lipidCount = lipidCount;
    }
}
export class UserKeyDataItemType {
    constructor(KeyDataName, KeyDataValue) {
        this.KeyDataName = KeyDataName;
        this.KeyDataValue = KeyDataValue;
    }
}

export class ActivitySessionModel {
    constructor(day, kilogram, calories) {
        this.day = day;
        this.kilogram = kilogram;
        this.calories = calories
    }
}
export class SessionLengthModel {
    constructor(day, sessionLength) {
        this.day = daysOfTheWeek[day-1];
        this.sessionLength = sessionLength;
    }
}
const daysOfTheWeek = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];


export class PerformanceModel {
    constructor(value, kind){
        this.value = value;
        this.kind = PerformanceKind[kind];
    }
}

export const PerformanceKind = { 
    1: 'cardio',
    2: 'energy', 
    3: 'endurance', 
    4: 'strength',
    5: 'speed',
    6: 'intensity'
}


