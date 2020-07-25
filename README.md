## NOTES:

It's not perfect by any means, but for 5 days and never having written my own React app, nor used Material UI I think I did ok.

I was able to hit most of the points in the instructions, though the API was giving me some issues and caused me to make some decisions that I can further explain if desired. The biggest of which was not using the Breeds endpoint for the main list as you would expect. But I found a way around the issues and was able to get it done.

As I continue to learn more React and actually start learning Redux and other components of React I am certain that this implementation could be improved. 

The design itself is also not the best, however, I needed to make quick decisions and try to stick with them in order to try to get to everything. It would have been much easier if I had a design to work from. Otherwise, I tend to have a million questions about what is wanted and needed. In the end, I thought it was better to get more of the list done rather than worry about some of the finer details, as much as not getting to them may annoy me :)

For example, the instructions mentioned a tab to see liked and disliked images. I had done a fair amount of work using the favorites endpoint before realizing you probably meant for me to use the vote endpoint. I tried to switch over but the vote API was really lacking (in particular the image info) so I just went back to implementing favorites instead as that was mostly done already.

For the Drag and Drop functionality I just implemented the first component that I found that was very popular, well supported, and did what I needed at the time. I didn't have time to compare with any others so there may be better options out there but it certainly got the job done.

Unfortunately, I barely got to any kind of unit testing. I haven't written much historically and simply ran out of time to figure out which system was better and exactly how to implement it correctly. I did start it on the App component using Jest, but it is definitely something I need to learn more about.

If I had more time I would do the following things to shore up the outstanding issues:

- Current routing is very fundamental. I haven't gotten to learning React-Route yet so what is there is hand-rolled at the moment. It works for the most part but definitely needs to be upgraded.
- Learn more about MaterialUI and try to implement its theme-ing and try to find another way to use it that maybe leaves less code inside the components themselves. It feels a bit bloated to me but again that could be inferior implementation at this point.
- Responsive behavior is not optimal which annoys me but again I think that's because I was learning MaterialUI and couldn't figure everything out. I was also trying not to mix that with traditional CSS.
- I would debug and fix the edge cases and finer details that I ran out of time for. Specifically, favoriting does not retain the coloring of the icon once images reload. You are also currently able to favorite the same image multiple times so I would need to build in some sort of tracking and build checks to not allow that to happen. I would also add the ability to un-favorite the image. 
- I would continue learning about testing and implement more of that.

------------

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
