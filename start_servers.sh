#!/bin/bash
cd backend
    #env/Scripts/activate
py manage.py runserver &

cd .. 
cd frontend 
npm start &