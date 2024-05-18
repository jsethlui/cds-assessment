# Setup

Please run `npm install` to install any dependencies. Please run `npm run dev` to begin running instance

# About
This project was built using Typescript for the frontend, Vite for the build platform, and Tailwind for styling

To switch between users of different ID's and add forms, modify the URL to `http://localhost:[PORT]/?user_type=user&user_id=[ID]`
To switch to admin and approve / deny forms, modify the URL to `http://localhost:[PORT]/?user_type=admin`

Forms are stored as dictionary objects within local storage. The local storage can be cleared at any time using the clear button

# Considerations
Ideally, a SQL database would be more optimal to contain each form. The SQL database would be structured as is:
| Form ID | name | userID | loanAmount | status |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| 665045213502.2323 | Jeremy | 5 | 50 | Pending |
| 1132770560275.719 | Keith | 2 | 20 | Approved |
| 651804394727.7644 | Terry | 1 | 200 | Denied |

I would build the backend using Flask (though any backend programming works, it is just Python would be my preferred). There would be a GET request method to retreive entires from the database, POST request method to create entries from the database, and PATCH request method to update entries from the database.

GET would be used primarily within the Admin and User portals when we need to show all the forms. POST would be used primarily when the User creates a form. PATCH would be used when the Admin changes a form status from PENDING to ACCEPTED (for example)

I would also prefer to add support to prevent empty names from being entered, as well as support negative loans.

The UI could also be far more elegant. A "Save All" button might be more ideal to save multiple forms at once, rather than saving each form individually. A green checkmark appearing on form save is also more ideal (rather than a console.alert() pop up)