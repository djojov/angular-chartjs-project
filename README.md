## 📊 Angular Chart.js project

I created this project for my Web development class and to show how to easily use the Chart.js library with Angular.

## 🛠️ Technologies and tools

- `Angular`
- `Chart.js library`
- `FullCalendar library`
- `CSS`
- `json-server`

## 👷‍♂️ Application details

This project was created to demonstrate how Chart.js can be used to visualize health data provided by JSON. It uses this library to create several types of graphs and update created empty components with data as they get loaded from JSON. To simulate the data provider I used a json-server and a `data.json` file to store relevant data. Apart from json-server, I used the FulCalendar library to create a Calendar page where you could create reminders and other events related to your health.

## 💭 What I learned and possible improvements?

I learned how to use the chart.js library to visualize any data from JSON files into different types of charts and style them to help users better understand that data.

As this was created as a class project there are a lot of possible improvements. First of all, as in this example I'm working on a health data security measures should be a top priority. Stuff as creating an account to store all of your data should also be on top of the list. Other than that this project could be expanded to use a real backend as an API and data provider.

## 🚦 Running the project

Firstly, make sure that `Angular CLI installed` and `node.js` are installed, and to run this project follow the steps below:

1. Clone this repository to your machine
2. Run `npm install` to install all necessary dependencies
3. Run `ng serve` for a dev server
4. Run `npx json-server --watch data.json` to create JSON server on http://localhost:3000/charts
5. Open your browser and navigate to [http://localhost:4200](http://localhost:4200) to view the app

#

<details> 
  <summary><h3>🎬 Video demo</h3></summary>
  
  <video src="https://github.com/djojov/angular-chartjs-project/assets/55921742/280c89fe-7600-4da8-93ef-85fc4c293e72" controls></video>
  <video src="https://github.com/djojov/angular-chartjs-project/assets/55921742/2bb1e238-17d0-41d5-a085-4d55039436ca" controls></video>

</details>
