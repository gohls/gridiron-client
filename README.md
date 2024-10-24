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

## UI Mock Ups
[Home.pdf](https://github.com/user-attachments/files/17500889/Home.pdf)
