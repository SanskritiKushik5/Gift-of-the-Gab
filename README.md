# Gift-of-the-Gab
### Contribution Guidelines

1. Install this python package to create virtual environment. (Python version used is 3.9)
    ```
    $ pip install virtualenv
    ```
2. Create a python3 virtual environment: 

    ```
    $ python3 -m venv venv
    ```

    Or, use [virtualenv](https://virtualenv.pypa.io/en/latest/installation.html):

    ```
    $ virtualenv venv
    ```
    
3. Activate the virtual environment:

    On Linux or Mac or any Unix based system-
    
    ```
    $ source venv/bin/activate
    ```
    
    On Windows-
    ```
    > venv\Scripts\activate
    ```
4. Now Install the dependecies:

    ```
    $ pip install -r requirements.txt
    ```
5. Now run the following command to start the django server:

    #### Run the application - backend
    ```
    $ cd backend
    ```

    ```
    $ python manage.py runserver
    ```

    Then follow this [link](http://127.0.0.1:8000/) [For testing APIs]
6. Now open a terminal / command prompt for frontend in the frontend folder
7. Run the command to install the dependencies

    ```
    $ npm install
    ```
8. Now run the following command to start the react server:

    #### Run the application - frontend

    ```
    $ npm start
    ```
    Then follow this [link](http://localhost:3000/)
    <br>
 Now you are ready to contribute!
