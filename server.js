var exec = require("child_process").exec

exec("./node_modules/.bin/cake build", function() {
    require("coffee-script/register");

    require("./app").listen(process.env.PORT || 3000);
});
