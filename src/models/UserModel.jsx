export class UserModel {
    constructor(id, firstName, lastName, age, score){
        this.id = id;
        
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.score = score;
        this.introSentence = makeIntroSentence(this.score);

        this.keyData = UserKeyDataModel;
        this.activitySessions = [];
        this.performances = [];
        this.sessions = [];
    }

}
export function makeIntroSentence(score) {
    
    let sentence = '';
    return score * 100 < 50 ? sentence=introSentences[2]
            : score* 100 === 50? sentence=introSentences[1]
            : score* 100 > 50? sentence = introSentences[0]
            : sentence
}


var emoji = String.fromCodePoint(0x1F621)

const introSentences = [
    'Félicitations, vous avez explosé vos objectifs hier' + emoji ,
    'Vous êtes sur la bonne voie '+ emoji ,
    'Ne vous découragez pas '+ emoji 
]

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


