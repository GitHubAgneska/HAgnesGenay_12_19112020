export class UserModel {
    constructor(userId, userMainData,userActivityData,userPerfData,userSessionLengthData){
        this.userId = userId;
        this.userMainData = userMainData;
        this.userActivityData = userActivityData;
        this.userPerfData = userPerfData;
        this.userSessionLengthData = userSessionLengthData;
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
export class UserKeyDataItem {
    constructor(keyDataType, keyDataValue, keyDataUnit, keyDataIcon) {
        this.keyDataType = keyDataType;
        this.keyDataValue = keyDataValue;
        this.keyDataUnit = keyDataUnit;
        this.keyDataIcon = keyDataIcon;
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
    1: 'Cardio',
    2: 'Energie', 
    3: 'Endurance', 
    4: 'Force',
    5: 'Vitesse',
    6: 'Intensité'
}


