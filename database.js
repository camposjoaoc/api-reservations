export function getReservation(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const error = Math.random() > 0.5 ? 'Database gremlins blocked the reservation lookup!' : null;
            if (error) {
                reject(error);

            } else {
                resolve({
                    id,
                    name: 'Sample Reservation',
                    note: 'This one made it past the database goblins!'
                });
            }
        }, 1000);
    });
}
export function createReservation(data, callback) {
    setTimeout(() => {
        const error = Math.random() > 0.5 ? ' Database error: The reservation fairy is asleep!' : null;
        if (error) {
            callback(error, null);
        } else {
            callback(null, { message: 'Reservation created successfully! The room is fluffed and ready', id: Date.now(), ...data });
        }
    }, 1000);
}

