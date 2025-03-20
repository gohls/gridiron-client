## Gridiron

A platform for fantasy football enthusiasts. Gridiron serves as a centralized hub where you can customize league rules, celebrate champions, and access engaging statistics and historical records. Whether you're using Sleeper, ESPN, NFL, or Yahoo, Gridiron enhances your fantasy experience by providing a streamlined way to manage your league and showcase achievements. Elevate your game and gain valuable insights into your fantasy journey with Gridiron.

### SCRUM Board

https://sagohl.atlassian.net/jira/software/projects/SCRUM/boards/1?atlOrigin=eyJpIjoiMmM2MzUyNjRlYTFhNGZhZjg5YTBlMGY2ZDU2ZjRjOTkiLCJwIjoiaiJ9

# Fantasy Football League Management System

## Project Overview

This system aims to enhance fantasy football leagues by providing features not typically available in standard fantasy football apps. The main focus is on custom rule management and championship tracking.

## Key Features

### 1. Custom League Rules Management

- Allow league managers or designated users to create, edit, and delete custom rules
- Store rules that can't be enforced automatically by fantasy football apps
- Example rule: "You can't keep first-round picks"
- Provide a user-friendly interface for rule creation and viewing

### 2. Championship Tracking

- Record and display league champions for each season
- Keep a running tally of championship wins for each team/user
- Create a "Hall of Fame" or leaderboard to showcase top performers

## Technical Stack

### Backend

- Django REST Framework for API development
- PostgreSQL for database management

### Frontend

- React.js for building the user interface
- Redux for state management

## Data Models

### League

- name
- created_at
- updated_at
- associated_app (e.g., Sleper, ESPN, Yahoo, NFL)
- Init ingegration with "Sleeper" app

### Team

- name
- owner
- league (foreign key to League)

### CustomRule

- league (foreign key to League)
- rule_text
- created_by (foreign key to User)
- created_at
- updated_at

### Championship

- league (foreign key to League)
- team (foreign key to Team)
- year
- created_at

## API Endpoints

TBD

## User Interface

Developing a clean interface will be low priority. Creating all the logic and end-to-end functionality will be main focus in the beginning stages

### League Dashboard

- Display league information
- Show custom rules
- List of current teams
- Championship history

### Rule Management Page

- Form for adding new rules
- List of existing rules with edit/delete options

### Championship Showcase

- League-wide championship history
- Individual team championship records
- Visual representation of championship data

## Future/Other Ideas

### HoF

That sounds like a great idea! A "Hall of Fame" page for your fantasy football hub should highlight the most prestigious and memorable achievements in your league. Here are some key records and categories you could include:

### **All-Time Best Performances**

- 🏆 **Most Championships Won** – The managers with the most league titles.
- 📈 **Highest Single-Season Point Total** – The highest total points scored in a single season.
- 🔥 **Best Single-Week Score** – The highest-scoring week ever recorded.
- 📊 **Most Playoff Appearances** – Consistency matters!
- 🥇 **Best Regular Season Record** – The most dominant regular-season runs.

### **Legendary Teams & Seasons**

- 🛡️ **Best Draft Class** – The manager who drafted the best overall team (based on end-of-season total points).
- 🚀 **Biggest Sleeper Pick** – A player drafted late (or picked up from waivers) who became a star.
- 🤯 **Most Points Scored in a Championship Game** – For legendary title-winning performances.

### **Individual Brilliance**

- ⚡ **Best Free Agent Pickup** – Who had the biggest waiver-wire impact?
- 🎯 **Most Trades Made** – For the most active (or chaotic) manager.
- 💰 **Most FAAB Spent on a Single Player** – If your league uses a Free Agent Acquisition Budget (FAAB).

### **Infamous Lows**

- 🏚️ **Worst Single-Week Score** – Because everyone loves some banter.
- 🏴‍☠️ **Most Points Against in a Season** – The unluckiest manager ever.
- 😭 **Most Heartbreaking Championship Loss** – If someone lost by 0.1 points, they deserve to be remembered.

Would you want it to be more stats-focused, or do you want fun records with stories behind them?

## Wireframe

##

Maybe want to use this Markdown editor

https://www.npmjs.com/package/@uiw/react-markdown-editor
