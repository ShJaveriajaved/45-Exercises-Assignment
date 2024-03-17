let users : string [] = ["Admin","Eric","Michael","Lola","Charlie"];

for(let user of users) {
    if (user === "Admin") {
        console.log("Hello Admin,would uoulike to see a status report?")
    } else {
        console.log (` Hello ${user}, thankyou for logging in again`)
    }
}