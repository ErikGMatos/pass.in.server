# <span style="color:blue">Pass\.in</span> API Documentation

Welcome to the documentation for the <span style="color:blue">Pass\.in</span> API. <span style="color:blue">Pass\.in</span> is a platform for managing events and attendees. This API provides endpoints for creating events, registering attendees for events, retrieving event details, performing check-ins, retrieving attendee information (badges), filtering attendees by search query, and fetching attendees for a specific event, all paginated with a limit of 10 entries per page.

## Endpoints

### Create Event

Creates a new event.

- **Method:** `POST`
- **URL:** `http://localhost:3333/events`
- **Request Body:**
```json
{
  "title": "New Event",
  "details": "Details of the event",
  "maximumAttendees": 120
}
```

### Register Attendee

Registers a participant for a specific event.

- **Method:** `POST`
- **URL:** `http://localhost:3333/events/{eventId}/attendees`
- **Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com"
}
```

### Get Event Details

Retrieves details of a specific event.

- **Method:** `GET`
- **URL:** `http://localhost:3333/events/{eventId}`

### Get Attendee Badge

Retrieves badge information for a specific attendee.

- **Method:** `GET`
- **URL:** `http://localhost:3333/attendees/{attendeeId}/badge`

### Check-in Attendee

Performs check-in for a specific attendee.

- **Method:** `GET`
- **URL:** `http://localhost:3333/attendees/{attendeeId}/check-in`

### Filter Attendees by Query

Retrieves attendees for a specific event filtered by a search query.

- **Method:** `POST`
- **URL:** `http://localhost:3333/events/{eventId}/attendees?query={searchQuery}`

## Instructions for Using the Project

To use the <span style="color:blue">Pass\.in</span> API project, follow these instructions:

1. Make sure you have Node.js version 20 or higher installed on your system.
2. Clone the repository from [GitHub](https://github.com/ErikGMatos/pass.in.server).
3. Navigate to the project directory in your terminal.
4. Install dependencies using `npm install`.
5. Populate the database by running `npm run db:migrate`.
6. Start the project in development mode with `npm run dev`.
7. Access the Swagger documentation for API endpoints at [http://localhost:3333/docs](http://localhost:3333/docs).

## Technologies Used

- **Server Framework:** Fastify
- **Database ORM:** Prisma
- **Validation:** Zod
- **Documentation:** Swagger UI
- **Node.js Version:** 20 or higher

Feel free to explore and utilize the <span style="color:blue">Pass\.in</span> API for managing your events and attendees efficiently!
