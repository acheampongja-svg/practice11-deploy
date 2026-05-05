
I used Render as my platform.

Deployment: I pushed the changes to Github and deployed my application on render using the deploy latest commit button.

One issue I encountered was that the environment variable wasn't working because I mistakenly. used a lowercase greeting instead of GREETING in my process.env.GREETING.

I modified my server.js to use an environment variable instead of a coded message. I added "const greeting = process.env.GREETING || "Hello from Render!" and updated the api route to return it as a value.



URL: https://practice11-deploy.onrender.com/