// localStorage.clear()

let arrayOfKeysAndValues = JSON.parse(localStorage.getItem('userInfo')) 

let currentUser = JSON.parse(localStorage.getItem("current-user"));


document.getElementById("profile-pic").src = currentUser.coachPic
document.getElementById("profile-pic").src = currentUser["coachPic"]



document.getElementById("current-name").innerHTML = currentUser.firstName + " " + currentUser.lastName
document.getElementById("current-email").innerHTML = currentUser.email
document.getElementById("current-mobile").innerHTML = currentUser.number
document.getElementById("coach-bio").innerHTML = currentUser.coachBio


function openTxtArea() {
    document.getElementById("addTxtBio").style.display = 'block'
    document.getElementById("clickToEditBio").style.display = 'none'
}
function editTxtBio(){
    let newBio = document.getElementById("writeBioHere").value
    document.getElementById("coach-bio").innerHTML = newBio
    document.getElementById("writeBioHere").value = ""
    document.getElementById("addTxtBio").style.display = 'none'
    document.getElementById("clickToEditBio").style.display = 'block'
    currentUser['coachBio'] = newBio
    arrayOfKeysAndValues[knowingIndex()]['coachBio'] = newBio
    localStorage.setItem("current-user", JSON.stringify(currentUser))
    arrayOfKeysAndValues['coachBio'] = newBio
    localStorage.setItem("userInfo", JSON.stringify(arrayOfKeysAndValues))
}

function knowingIndex(){
    for ( i=0 ; i<arrayOfKeysAndValues.length ; i++ ){
        if (currentUser.email == arrayOfKeysAndValues[i].email){
            return i
        }
    }
}