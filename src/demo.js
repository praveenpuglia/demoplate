(function(global){

    let Comments = {};
    Comments.init = function() {
        console.log("Commenting System Initialized");

        // Initializing Data
        Comments.commentsData = Comments.getUserData();
        Comments.userData = Comments.getUserData();

        // render comments thred
        // uncomment this to make it work
        // Comments.render();

        // do event bindings
        Comments.bindEvents();
    };

    Comments.render = function() {
        // get fresh data every time 
        // can optimize this.

        Comments.commentsData = Comments.getCommentsData();
        Comments.userData = Comments.getUserData();

        // take data objects and render them here! 
        let wrapper = document.querySelector(".comments-list-wrapper");
        // do we have any comments?
        if(!Comments.commentsData) {
            // No Comments to parse!
            return;
        }
        let commentCountUnit = (Comments.commentsData.length > 1) ? "Comments" : "Comment";
        wrapper.innerHTML = `
            <h2 class="comments-count">
                <span class="count">
                    ${Comments.commentsData.length} ${commentCountUnit}
                </span>
            </h2>
        `
        let commentsList = document.createElement("ul");
        // build the comment items and append them to this list
        // then append the list to the wrapper.
    };

    Comments.getUserData = function() {
            if(localStorage.user) {
                return JSON.parse(localStorage.user);
            }
        }

    Comments.getCommentsData = function() {
        if(localStorage.comments) {
            return JSON.parse(localStorage.comments);
        }
    }

    /**
     * Sets up listeners on actionable items in comment threads.
     * Most events are delegated because duh! dynamic content.
     */
    Comments.bindEvents = function() {
        let commentsList = document.querySelector(".comments");

        // delegate events
        commentsList.addEventListener("click", function(e) {
            let target = e.target;
            if(target.classList.contains("vote-up") || target.classList.contains("vote-down") || target.classList.contains("comment-reply")) {
                debugger;
                // which comment?
                let commentItem = e.target.closest(".comment-item");
                let commentId = parseInt(commentItem.getAttribute("data-id"));

                // find the object from comments list.
                let commentObject =  Comments.commentsData.filter((comment) => {
                    if(comment.id === commentId) {
                        return true;
                    }
                });
                console.log(commentObject);
            }
        });
    }

    Comments.findCommentById = function() {
        // go deep in comments data and find it.
        // may be actually make the entire thing flat.
        // that'll save some time.
    }

    Comments.init();
}(window));