# 🏨 Hotel JS - Reservation API

A minimalist RESTful API for managing hotel reservations. Built with Express.js.

## 📦 Installation

```bash
npm install
```

## 🚀 Running the App

```bash
node app.js
```

Server starts on: `http://localhost:3000`

## 📌 Available Endpoints

### `GET /`

Returns a welcome message.

---

### `POST /reserve`

Creates a new reservation.

**Response (201 Created)**  
Includes a confirmation message and the created reservation data.

---

### `GET /reservation/:id`

Fetches a reservation by its ID.

- Returns `200 OK` if found.
- Returns `404 Not Found` if no reservation is found.

---

## 🐛 Error Handling

Friendly error messages and fun images from [http.cat](https://http.cat) for:

- `201 Created`
- `404 Not Found`
- `500 Internal Server Error`

