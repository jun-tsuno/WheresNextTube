# YouTube API featuring "Travel"

You can search travel-related videos, as well as add your favorite videos to the favorite list.
You need your own [YouTube Data API](https://developers.google.com/youtube/v3) to use this app.
Rewrite the code: src >> store >> api >> videoSearch.js

## Project Overview

<img width="600" alt="Screenshot 2022-12-15 at 10 04 20 AM" src="https://user-images.githubusercontent.com/110567844/207935005-1052dbc3-1194-4e8a-8c7f-f38ca440f033.png">
<img width="600" alt="Screenshot 2022-12-15 at 10 04 54 AM" src="https://user-images.githubusercontent.com/110567844/207935022-6d02aeb0-dfad-40e9-a747-3d03b7bcdfe2.png">
<img width="600" alt="Screenshot 2022-12-15 at 10 05 18 AM" src="https://user-images.githubusercontent.com/110567844/207935036-1651b76f-c608-4039-9d60-84e64e85b3e3.png">

## Challenges

- It was hard to decide how to store the whole state, as well as the store design of this project.
- Some functions and states should be used in several components, so I used RTK and custom hooks to make it easier to access data.

## Built with

- React
- ReduxToolkit / RTKQuery
- Chakra UI
- tailwindcss
