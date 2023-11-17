// We created  a obj.

/*
const course = {
    lecture: 10,
    section:3,
    title: 'Javascript',
    notes: {
        introduction : 'Welcom to js course'

    },
    enroll(){
        console.log('you succesfully enrolled to js course')
    }
}

console.log(course)
*/


// factory function 


function createCourse(){

    return {
        lecture: 10,
        section:3,
        title: 'Javascript',
        notes: {
            introduction : 'Welcom to js course'
    
        },
        enroll(){
            console.log('you succesfully enrolled to js course')
        }


    }
}
//  const course = createCourse();

//  console.log(course.title)


// constructor function 

function Course(title){
    this.title = title,
    this.enroll = function(){
        console.log('you succesfully enrolled to js course')
    }
}
const course = new Course('javascript')

console.log(course.title)