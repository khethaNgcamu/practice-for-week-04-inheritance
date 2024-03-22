const Person = require('./person');

// Your code here
class Teacher extends Person {
  constructor(firstName, lastName, subject, yearsOfExperience){
    super(firstName, lastName);
    this.subject = subject;
    this.yearsOfExperience = yearsOfExperience;
  }

  static combinedYearsOfExperience(teachers) {
    if (!Array.isArray(teachers)) {
      throw new Error("combinedYearsOfExperience only takes an array as an argument.");
    }

    return teachers.reduce((totalExperience, teacher) => {
      if (!(teacher instanceof Teacher)) {
        throw new Error("All items in array must be Teacher class instances.");
      }
      return totalExperience + teacher.yearsOfExperience;
    }, 0);
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Teacher;
} catch {
  module.exports = null;
}