export class UserModel {
    constructor(id, firstName, lastName, age, score, keyData, activityData, performanceData, sessionsData){
        this.id = id;
        
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.score = score;

        this.keyData = keyData;
        this.activityData = activityData;
        this.performanceData = performanceData;
        this.sessionsData = sessionsData;
    }

    get introSentence(){
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

export class UserActivityModel {
    constructor(sessions) {
        this.sessions = sessions;
    }
}

export class SessionModel {
    constructor(day, kilogram, calories) {
        this.day = day;
        this.kilogram = kilogram;
        this.calories = calories
    }
}

export class PerformanceData {
    constructor(performances) {
        this.performances = performances;
    }
}

export class Performance {
    constructor(value, kind){
        this.value = value;
        this.kind = kind;
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

export class SessionsData {
    constructor(sessions) {
        this.sessions = sessions;
    }
}

export class Session {
    constructor(day, sessionLength) {
        this.day = day;
        this.sessionLength = sessionLength;
    }
}

