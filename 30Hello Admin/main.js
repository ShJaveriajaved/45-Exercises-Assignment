var users = ["Admin", "Eric", "Michael", "Lola", "Charlie"];
for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
    var user = users_1[_i];
    if (user === "Admin") {
        console.log("Hello Admin,would uoulike to see a status report?");
    }
    else {
        console.log(" Hello ".concat(user, ", thankyou for logging in again"));
    }
}
