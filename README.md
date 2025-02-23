# Google Tasks API Integration

A Node.js application that demonstrates integration with Google Tasks API for creating, listing, and managing tasks.

## Prerequisites

- Node.js (v14 or higher)
- Google Cloud Console Account
- Gmail Account

## Setup Instructions

### 1. Google Cloud Console Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google Tasks API:

   - Navigate to "APIs & Services" > "Library"
   - Search for "Tasks API"
   - Click "Enable"

4. Configure OAuth Consent Screen:

   - Go to "APIs & Services" > "OAuth consent screen"
   - Choose "External" user type
   - Fill in the application name and user support email
   - Add your email as a test user
   - Save changes

5. Create OAuth 2.0 Credentials:
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "OAuth client ID"
   - Choose "Web application"
   - Add authorized redirect URI: `http://localhost:3000/auth/redirect`
   - Note down the Client ID and Client Secret

### 2. Local Project Setup

1. Clone the repository:

```bash
git clone <repository-url>
cd <project-directory>
```

2. Install dependencies:

```bash
npm install
```

3. Create `.env` file in the root directory:

```env
PORT=3000
SERVER_URL=http://localhost
CLIENT_ID=your_client_id_here
CLIENT_SECRET=your_client_secret_here
REDIRECT_URL=http://localhost:3000/auth/redirect
```

### 3. Running the Application

1. Start the server:

```bash
npm run dev
```

2. The server will start at `http://localhost:3000`

## API Endpoints

### Authentication

1. Visit `http://localhost:3000/auth`
2. Login with your Google account
3. Grant necessary permissions
4. You will be redirected to the task creation endpoint

### Tasks Management

#### Create a Task

- Endpoint: `GET /create-task`
- Creates a new task scheduled for the day after tomorrow
- Response: Task details including ID and status

#### List Tasks

- Endpoint: `GET /list-tasks`
- Returns all tasks in your default task list
- Response: Array of task objects

#### Complete Task

- Endpoint: `GET /complete-task/:taskId`
- Marks the specified task as completed
- Replace `:taskId` with the actual task ID
- Response: Updated task details

## Testing the Integration

1. Authentication Flow:

   - Open browser and visit `http://localhost:3000/auth`
   - Sign in with your Google account
   - Accept the permissions

2. Create a Task:

   - After authentication, you'll be redirected to `/create-task`
   - A new task will be created

3. View Tasks:

   - Visit `http://localhost:3000/list-tasks`
   - You should see your created tasks

4. Complete a Task:
   - Copy a task ID from the list tasks response
   - Visit `http://localhost:3000/complete-task/{taskId}`
   - The task will be marked as completed

## Viewing Tasks

You can view your tasks in several ways:

1. Gmail (Tasks panel on the right)
2. Google Calendar (Tasks panel on the right)
3. Google Tasks mobile app
4. Through this application's `/list-tasks` endpoint

## Troubleshooting

1. **403 Access Denied Error**:

   - Ensure you've added your email as a test user in OAuth consent screen
   - Clear browser cookies and try again
   - Verify the scopes in the OAuth consent screen

2. **Invalid Credentials**:

   - Double-check CLIENT_ID and CLIENT_SECRET in .env file
   - Verify the redirect URI matches exactly

3. **API Not Enabled**:
   - Ensure Tasks API is enabled in Google Cloud Console
   - Wait a few minutes after enabling the API

## Environment Variables

| Variable      | Description                            |
| ------------- | -------------------------------------- |
| PORT          | Server port (default: 3000)            |
| SERVER_URL    | Server URL (default: http://localhost) |
| CLIENT_ID     | Google OAuth Client ID                 |
| CLIENT_SECRET | Google OAuth Client Secret             |
| REDIRECT_URL  | OAuth redirect URL                     |

## License

ISC

## Author

# Google Tasks API Integration

A Node.js application that demonstrates integration with Google Tasks API for creating, listing, and managing tasks.

## Prerequisites

- Node.js (v14 or higher)
- Google Cloud Console Account
- Gmail Account

## Setup Instructions

### 1. Google Cloud Console Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google Tasks API:

   - Navigate to "APIs & Services" > "Library"
   - Search for "Tasks API"
   - Click "Enable"

4. Configure OAuth Consent Screen:

   - Go to "APIs & Services" > "OAuth consent screen"
   - Choose "External" user type
   - Fill in the application name and user support email
   - Add your email as a test user
   - Save changes

5. Create OAuth 2.0 Credentials:
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "OAuth client ID"
   - Choose "Web application"
   - Add authorized redirect URI: `http://localhost:3000/auth/redirect`
   - Note down the Client ID and Client Secret

### 2. Local Project Setup

1. Clone the repository:

```bash
git clone <repository-url>
cd <project-directory>
```

2. Install dependencies:

```bash
npm install
```

3. Create `.env` file in the root directory:

```env
PORT=3000
SERVER_URL=http://localhost
CLIENT_ID=your_client_id_here
CLIENT_SECRET=your_client_secret_here
REDIRECT_URL=http://localhost:3000/auth/redirect
```

### 3. Running the Application

1. Start the server:

```bash
npm run dev
```

2. The server will start at `http://localhost:3000`

## API Endpoints

### Authentication

1. Visit `http://localhost:3000/auth`
2. Login with your Google account
3. Grant necessary permissions
4. You will be redirected to the task creation endpoint

### Tasks Management

#### Create a Task

- Endpoint: `GET /create-task`
- Creates a new task scheduled for the day after tomorrow
- Response: Task details including ID and status

#### List Tasks

- Endpoint: `GET /list-tasks`
- Returns all tasks in your default task list
- Response: Array of task objects

#### Complete Task

- Endpoint: `GET /complete-task/:taskId`
- Marks the specified task as completed
- Replace `:taskId` with the actual task ID
- Response: Updated task details

## Testing the Integration

1. Authentication Flow:

   - Open browser and visit `http://localhost:3000/auth`
   - Sign in with your Google account
   - Accept the permissions

2. Create a Task:

   - After authentication, you'll be redirected to `/create-task`
   - A new task will be created

3. View Tasks:

   - Visit `http://localhost:3000/list-tasks`
   - You should see your created tasks

4. Complete a Task:
   - Copy a task ID from the list tasks response
   - Visit `http://localhost:3000/complete-task/{taskId}`
   - The task will be marked as completed

## Viewing Tasks

You can view your tasks in several ways:

1. Gmail (Tasks panel on the right)
2. Google Calendar (Tasks panel on the right)
3. Google Tasks mobile app
4. Through this application's `/list-tasks` endpoint

## Troubleshooting

1. **403 Access Denied Error**:

   - Ensure you've added your email as a test user in OAuth consent screen
   - Clear browser cookies and try again
   - Verify the scopes in the OAuth consent screen

2. **Invalid Credentials**:

   - Double-check CLIENT_ID and CLIENT_SECRET in .env file
   - Verify the redirect URI matches exactly

3. **API Not Enabled**:
   - Ensure Tasks API is enabled in Google Cloud Console
   - Wait a few minutes after enabling the API

## Environment Variables

| Variable      | Description                            |
| ------------- | -------------------------------------- |
| PORT          | Server port (default: 3000)            |
| SERVER_URL    | Server URL (default: http://localhost) |
| CLIENT_ID     | Google OAuth Client ID                 |
| CLIENT_SECRET | Google OAuth Client Secret             |
| REDIRECT_URL  | OAuth redirect URL                     |
