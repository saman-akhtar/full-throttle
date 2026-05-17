# Full Throttle — Team Activity Dashboard

A React dashboard that visualizes team member activity data — showing who was active, when, and for how long. Built with Material-UI and interactive date filtering.

## Features

- **Member cards** — each team member displayed with their activity timeline
- **Activity periods** — shows start/end times per session with duration
- **Date picker** — filter activity by date range using react-datepicker
- **Modal detail view** — click any member card to see full activity breakdown
- **Responsive grid** — Bootstrap-based 4-column layout adapts to screen size

## Tech Stack

- **React** (class components)
- **Material-UI** — Modal, card styling, makeStyles
- **react-datepicker** — date range filtering
- **Bootstrap** — responsive grid layout
- Data: JSON-driven (Slack-style activity export format)

## Run locally

```bash
git clone https://github.com/saman-akhtar/full-throttle.git
cd full-throttle
npm install
npm start
```

Opens at [http://localhost:3000](http://localhost:3000)

## Data format

The app reads from `src/data/data.json` — a list of members with activity periods:

```json
{
  "members": [
    {
      "id": "W012A3CDE",
      "real_name": "Name",
      "tz": "America/Los_Angeles",
      "activity_periods": [
        { "start_time": "Feb 1 2020  1:33PM", "end_time": "Feb 1 2020 1:54PM" }
      ]
    }
  ]
}
```
