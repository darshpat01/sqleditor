# SQLEditor

## Overview

This project is a web application designed to accept SQL queries and display corresponding mock data tables. The primary function is to provide a basic interface for users to input SQL queries and visualize the hypothetical results in tabular form.

## Features

1. **SQL Query Editor:** The application includes a space (textarea) where users can input SQL queries. This can range from a basic textarea to a more sophisticated code editor.
2. **Multiple Queries and Data Tables::** The application supports more than one predefined SQL query, each accompanied by a corresponding table of mock data. Users can toggle between these queries through the sidebar. The Table section can even handle large amounts of rows without breaking the application. With the help of Pagination users can easily view even large numbers of rows by switching pages.

3. **User-Friendly Interface::** While the design is not the focus, the layout is planned for a smooth user experience. A clear separation between the query input and result display areas is maintained.

4. **Toggle Mechanism:** Users can easily switch between predefined queries using a dropdown or a similar toggle mechanism. This enhances user flow and accessibility.

5. **Split View for Editor and Results:** The split view feature provides a distinct division between the SQL query editor and results sections, enabling users to simultaneously craft queries and view corresponding data for an efficient and focused user experience. Users can adjust section sizes enhancing flexibility in managing screen real estate.

6. **History:** The application's history feature tracks previously entered SQL queries, allowing users to easily revisit and reuse their past queries. This functionality enhances user convenience by providing quick access to historical inputs.

7. **Themes (Dark Mode/Light Mode):** The inclusion of themes, such as Dark Mode and Light Mode, offers users a personalized visual experience. This feature allows users to switch between light and dark color schemes, catering to individual preferences and providing flexibility for different viewing environments. With the help of local storage the themes remain persistent. (when the user closes the applications and opens in the next time).

8. **Error Handling and Feedback:** The application incorporates robust error handling and feedback mechanisms, providing users with clear notifications and guidance in case of syntax errors or other issues in their SQL queries. This ensures a user-friendly experience by helping users identify and rectify errors effectively.

## JavaScript Framework and Packages

- **React:** A widely embraced front-end JavaScript library, empowering the construction of user interfaces with a rich ecosystem.

- **Jotai:** A minimalistic and efficient state management library, enhancing reactivity and simplicity in managing the application's state.

- **react-codemirror:** Implemented as a React wrapper for CodeMirror, delivering a tailored code editor with syntax highlighting and intelligent SQL suggestions.

- **Tailwind CSS:** Adopted as a utility-first CSS framework, accelerating the development of responsive and visually harmonized designs.

- **react-split:** Utilized as a dynamic and adaptable split layout component for React, facilitating the integration of customizable split views and panes within the application.

- **@uiw/codemirror-theme-xcode:** Xcode theme package to switch the editor to dark or light mode.

## Page Load Times and Performance

Lighthouse Report:

<img width="1495" alt="performance report" src="https://github.com/darshpat01/sqleditor/assets/68650149/716cfab1-97b1-4ffc-9e88-48e2c88e20a3">

## Optimizations

- **State Management with Jotai:** Jotai differs from the Context API in React by providing a more lightweight and efficient state management solution. Unlike the Context API, which can lead to unnecessary re-renders due to its global nature, Jotai optimizes reactivity and simplifies state management.In terms of memoization, Jotai employs an approach that doesn't rely on traditional memoization techniques like React.memo or useMemo. Instead, Jotai inherently ensures memoization by design. Each atom in Jotai is inherently memoized, and updates to atoms trigger re-renders only for the components that directly depend on the specific atom. This targeted reactivity eliminates unnecessary renders and enhances performance.

- **Pagination for Results:** The Pagination feature allows users to navigate through large sets of query results systematically. It divides the data into manageable chunks, presenting a limited number of records per page and providing intuitive navigation controls for enhanced user experience and data exploration.

- **Debounced Functions Calls:** The integration of debounced function calls ensures that certain operations, such as querying are executed only after a specified delay, preventing rapid and potentially resource-intensive invocations. This feature enhances application performance and responsiveness by optimizing the execution frequency of these functions.
