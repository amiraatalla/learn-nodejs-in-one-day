const { tutorial } = require('./tutorial')

exports.childtutorial = function () {
    console.log("child method");
    function pTutor() {
        var PTutor = tutorial
        PTutor.parentMethod
    }
}
