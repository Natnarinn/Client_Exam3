/* You have an array of student object with properties :
name : The student's name.
attendance : An Array representing daily attendance (true for present, false for absent) for the entire week
testScore : An array of test score for the week (scores are on a scale of 0 to 100).
Your task are follows:

1.Calculate Attendance Percentage : write function getAttendanceRate(student) to calculate the total attendance
percentage for each student over the week. Identify students who attended class less tha 80% of the time
Example: if a student has attended 4 out of 5 days, their attendance percentage is (4/5)* 100 = 80

2.Calculate Average Test Score: write function getAvgScore(student) to calculate the average test score for each
student based on their test scores for the week. 
Example: If a student's test scores are [88, 92, 85, 78,90], their average test score is (88 + 92 + 85 + 78 + 90)/5 = 86.6

3.Identify Underperform Students: write function underPerformStudents(students) that return students with 
the properties, name, attendanceRate, avgScore, who meet the folliwing criteria:
     -They attended class less than 80% of the time (attendance percentage < 80%)
     -They score below 70 on average in tests.
Example: If a student attended class 3 out 5 days (attendance percentage = 60%) ande their average test score is
65, they meet both criteria and return [{name:'Isabella', attendance: 60, avgScore: 69.4}]
*/

const students = [
  {
    name: "Sophia",
    attendance: [true, true, false, true, true],
    testScores: [88, 92, 85, 78, 90]
  },
  {
    name: "Mason",
    attendance: [true, true, true, true, false],
    testScores: [70, 82, 88, 75, 62]
  },
  {
    name: "Isabella",
    attendance: [true, false, false, true, true],
    testScores: [68, 71, 70, 60, 78]
  },
  {
    name: "Liam",
    attendance: [true, true, true, true, true],
    testScores: [90, 87, 92, 88, 95]
  },
  {
    name: "Olivia",
    attendance: [true, true, true, true, false],
    testScores: [72, 78, 75, 80, 62]
  }
]

// 1.1 Attendance Percentage
function getAttendenceRate(student) {
  const pDay = student.filter(Boolean).length
  const attendenceRate = (pDay / student.length) * 100
  return attendenceRate
}
console.log("getAttendenceRate", getAttendenceRate(students[0].attendance))

// 1.2 testScores avg
function getAvgScore({ testScores }) {
  const sumScore = testScores.reduce((total, score) => total + score, 0)
  return sumScore / testScores.length
}
console.log("getAvgScore", getAvgScore(students[0]))

function underPerformStudents(students) {
  const underPerform = students.filter(
    (student) =>
      getAttendenceRate(student.attendance) < 80 && getAvgScore(student) < 70
  )
  const pass = underPerform.map((obj) => {
    return {
      name: obj.name,
      attendanceRate: getAttendenceRate(obj.attendance),
      avgScore: getAvgScore(obj)
    }
  })
  return pass
}
console.log(underPerformStudents(students))
