(function(global) {

    let Utilities = {};
    Utilities.setupUser = function(){
        let user = {
            username: "praveenpuglia",
            avatarURL: "src/assets/user.jpeg"
        }
        !localStorage.user && (localStorage.user = JSON.stringify(user));
    }

    Utilities.setupComments = function() {
        // parentCommentId = -1 denotes no parent.
        let comments = [
            {
                id: 2,
                author: "praveenpuglia",
                content: "This is such an awesome content",
                timestamp: "Thu Jul 13 2017 14:18:29 GMT+0530 (IST)",
                parentCommentId: -1
            },
            {
                id: 3,
                author: "someone",
                content: "This is a reply",
                timestamp: "Thu Jul 13 2017 14:20:13 GMT+0530 (IST)",
                parentCommentId: 2
            },
            {
                id: 1,
                author: "anotherone",
                content: "another top level comment",
                timestamp: "Thu Jul 10 2017 14:20:13 GMT+0530 (IST)",
                parentCommentId: -1
            }
        ]
        !localStorage.comments && (localStorage.comments = JSON.stringify(comments));
    }
    Utilities.setupUser();
    Utilities.setupComments();
}(window))