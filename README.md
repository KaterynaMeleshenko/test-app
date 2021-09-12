This react-app was made as a test task for JavaScript/React developer position.

In the process of doing this task, I've noticed that someone deleted a post from API (then it was back) and I decided not to do the same (not to add or delete posts in API via commands "POST", "DEL") in order to avoid disturbing someone who was working with this API as I were. Thus, I just got the data from API via "GET" and put them into the global state which I create via store (REDUX) and which I managed via reducer. I put both posts data and comments into one state and created one reducer for four actions: add a post, delete a post, add a comment, edit data.

Unfortunately, I couldn't achieve an appropriate realization of "EDIT_POST" action. It works correctly only after either a second click on the button "SAVE CHANGES" or after double-click on the button "SAVE CHANGES". What is interesting is that checking new data through console.log() function first click gives old data, second click - new data, double click - two results in the console and both are new data.

Due to the time limit, I was unable to add validation to avoid bugs, as well as I didn't use styled components everywhere, just a few times to show that I know how to use them. I didn't have time for any creativity either :(
