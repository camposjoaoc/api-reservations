import express from 'express';
import { createReservation, getReservation } from "./database.js";
const app = express();

const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: "Welcome to Hotel JS! Your reservation adventure starts here." });
});
app.post('/reserve', (req, res, next) => {
    createReservation(req.body, (error, result) => {
        if (error) {
            // Handle the error in the next middleware
            return next(error);
        }
        res.status(201).json({
            message: "Reservation confirmed! Time to pack your bags!",
            image: "https://http.cat/201",
            data: result
        });
    });
});

app.get('/reservation/:id', async (req, res, next) => {
    try {
        const result = await getReservation(req.params.id);
        console.log(result);
        if (!result) {
            return res.status(404).json({
                message: "No reservation found with that ID. Maybe it ran away?",
                image: "https://http.cat/404"
            });
        }
        res.status(200).json({
            message: "We found your reservation! Everything's in order.",
            image: "https://http.cat/200",
            data: result
        });
    } catch (error) {
        // Handle the error in the next middleware
        return next(error);

    }
});

app.use((error, req, res, next) => {
    console.error('Internal error:', error);
    if (error.message && error.message.includes('Database')) {
        res.status(500).json({
            message: "The database elves are having a bad day. We're working on it!",
            image: "https://http.cat/500"
        });
    } else {
        res.status(500).json({
            message: "Something went wrong in the matrix. Try turning it off and on again.",
            image: "https://http.cat/500"
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});

