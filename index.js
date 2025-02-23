const express = require("express");
const { google } = require("googleapis");
const { v4: uuid } = require("uuid");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

const { PORT, SERVER_URL, CLIENT_ID, CLIENT_SECRET, REDIRECT_URL, API_KEY } =
  process.env;

app.get("/", (req, res) => {
  res.send("Hello World");
});

// OAuth2 Authentication
const scopes = ["https://www.googleapis.com/auth/calendar"];

const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URL
);

app.get("/auth", (req, res) => {
  const url = oauth2Client.generateAuthUrl({
    access_type: "offline",
    scope: scopes,
  });
  res.redirect(url);
});

// -------
app.get("/auth/redirect", async (req, res) => {
  try {
    const code = req.query.code;
    const { tokens } = await oauth2Client.getToken({
      code: code,
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      redirect_uri: REDIRECT_URL,
    });
    oauth2Client.setCredentials(tokens);

    res.redirect(`${SERVER_URL}:${PORT}/create-event`);
  } catch (error) {
    console.error("Error getting tokens:", error);
    res.status(500).send("Error during authentication");
  }
});

// Scheduling Event on Google Calender
const calendar = google.calendar({
  version: "v3",
  auth: oauth2Client,
});

const event = {
  summary: "Testing Calender API",
  location: "Google Meet",

  description: "Test-1",
  start: {
    dateTime: "2025-02-24T19:30:00+05:30",
    timeZone: "Asia/Kolkata",
  },
  end: {
    dateTime: "2025-02-24T20:30:00+05:30",
    timeZone: "Asia/Kolkata",
  },
  colorId: 2,
  conferenceData: {
    createRequest: {
      requestId: uuid(),
    },
  },

  attendees: [{ email: "beesettim27@gmail.com" }],
};

app.get("/create-event", async (req, res) => {
  try {
    const result = await calendar.events.insert({
      calendarId: "primary",
      auth: oauth2Client,
      conferenceDataVersion: 1,
      sendUpdates: "all",
      resource: event,
    });

    res.send({
      status: 200,
      message: "Event created",
      link: result.data.hangoutLink,
    });
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on ${SERVER_URL}:${PORT}`);
});
