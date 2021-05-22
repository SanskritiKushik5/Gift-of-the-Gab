# Gift-of-the-Gab
### Contribution Guidelines

1. Go to the [project repo](https://github.com/SanskritiKushik5/Gift-of-the-Gab) and fork it by clicking "Fork" ( or Download the Zip file directly and start from the step 3 )<br>
2. Open terminal / command prompt and Clone the project using <br> `git clone https://github.com/YOUR_USERNAME/Gift-of-the-Gab.git`
3. Create a python3 virtual environment: (Python version used is 3.9)

    ```
    $ python3 -m venv venv
    ```

    Or, use [virtualenv](https://virtualenv.pypa.io/en/latest/installation.html):

    ```
    $ virtualenv venv
    ```
    
4. Activate the virtual environment:

    On Linux or Mac or any Unix based system-
    
    ```
    $ source venv/bin/activate
    ```
    
    On Windows-
    ```
    > venv\Scripts\activate
    ```
5. Now Install the dependecies:

    ```
    $ pip install -r requirements.txt
    ```
6. Now run the following command to start the django server:

    #### Run the application - backend

    ```
    $ python manage.py runserver
    ```
    ```
    $ cd backend
    ```
    Then follow this [link](http://127.0.0.1:8000/)
7. Now open a terminal / command prompt for frontend in the frontend folder
8. Run the command to install the dependencies

    ```
    $ npm install
    ```
9. Now run the following command to start the react server:

    #### Run the application - frontend

    ```
    $ npm start
    ```
    Then follow this [link](http://localhost:3000/)
    <br>
 Now you are ready to contribute!
