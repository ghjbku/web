/*

Task 1:
 Print the results if the max score is 100 and the passed above 50 points (inclusive).

 Expected result:
 Alice Failed
 Bob Failed
 Charlie Passed

 Task 2: Grade them properly and print the grades as well.
 [0,50) ->  1
 [50,60] -> 2
 [60,80] -> 3
 [80,90) -> 4
 [90,100] -> 5

 Task 3: Grade them according to a Curve std=10

 Task 4: Generate HTML table from the above results
 ...

See also: 
 - https://www.thoughtco.com/grading-on-a-curve-3212063#:~:text=Grading%20on%20a%20curve%20is,perhaps%20increasing%20the%20letter%20grade.
 - https://en.wikipedia.org/wiki/Relative_grading
*/
const max_Score = 100;
const min_score = 50;
var scores = [
    {
        name : 'Alice',
        score : 32
    },
    {
        name : 'Bob',
        score : 39
    },
    {
        name : 'Charlie',
        score : 98
    },
    {
        name : 'Denis',
        score : 78
    },
    {
        name : 'Eve',
        score : 56
    },
    {
        name : 'Frank',
        score : 14
    },
    {
        name : 'Gabe',
        score : 49
    },
    {
        name : 'Hugo',
        score : 39
    },
    {
        name : 'Ivan',
        score : 100
    },
    {
        name : 'John',
        score : 43
    },
    {
        name : 'Kevin',
        score : 65
    },
    {
        name : 'Lousie',
        score : 54
    },
    {
        name : 'Maria',
        score : 63
    },
    {
        name : 'Nate',
        score : 65
    },
    {
        name : 'Oliver',
        score : 12
    },
    {
        name : 'Pedro',
        score : 87
    },
    {
        name : 'Rebeca',
        score : 83
    },
    {
        name : 'Sarah',
        score : 29
    },
    {
        name : 'Tamara',
        score : 73
    },
    {
        name : 'Wade',
        score : 5
    },
];

//task 1
scores.forEach(val => {
    if (val.score >= min_score){
        console.log(val.name+" Passed");
    }
    else {
        console.log(val.name+" Failed");
    }
});

//task 2
grades = [50,60,80,90];

function grade_writing(name,score,grade){
    console.log("name:"+name+",score:"+score+",grade:"+grade);
}
function grading_task2(val,score){
    switch(true) {
        case (parseInt(score,10) < grades[0]):
           grade_writing(val.name,score,1);
            break;
        case  (parseInt(score,10) >= grades[0]) && (parseInt(score,10) < grades[1]):
            grade_writing(val.name,score,2);
            break;
        case  (parseInt(score,10) >= grades[1]) && (parseInt(score,10) < grades[2]):
            grade_writing(val.name,score,3);
            break;
        case  (parseInt(score,10) >= grades[2]) && (parseInt(score,10) < grades[3]):
            grade_writing(val.name,score,4);
            break;
        case (parseInt(score,10) >= grades[3]) && (parseInt(score,10) <= max_Score):
            grade_writing(val.name,score,5);
            break;
        default:
            console.log("m,eh");
        }
}
scores.forEach(val => grading_task2(val,val.score));
