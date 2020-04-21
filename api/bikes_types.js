import polka from 'polka';
import send from '@polka/send-type';
import { json } from 'body-parser';
import firebase from './firebase';

const firestoreDb = firebase.firestore();

/**
 * Retrieves all information from types_bikes collection
 *
 * @param req
 * @param res
 */
function get (req, res) {
    let types_bikes = [];
    firestoreDb.collection('bikes_types').get()
        .then((snapshot) => {
            snapshot.forEach((doc) => {
                types_bikes.push(doc.data());
            });
            send(res, 200, types_bikes)
        })
        .catch(error => {
            console.error('[Firestore Error]', error)
            send(res, 500, {
                message: error,
                status: 1
            })
        });
}

/**
 * Insert information about new user in «firestore»
 *
 * @param req
 * @param res
 */
function create (req, res) {
    let bikeTypeInfo = {
        ...req.body,
    }
    firestoreDb
        .collection('bikes_types')
        .add(bikeTypeInfo)
        .then((doc) => {
            let response = {
                message: 'Bike Type registered successfully',
                result: doc.id
            };
            send(res, 201, response)
        })
        .catch(error => {
            console.error('[Firestore Error]', error)
                send(res, 500, {
                    message: error,
                    status: 1
                })
        });
}

/**
 *
 * @param req
 * @param res
 */
function update (req, res) {
    let { uid } = req.body;
    let dataUpdate = req.body;

    if (!uid) {
        throw new Error('uid is required');
    } else {
        delete dataUpdate.uid;
        dataUpdate.updated_at = Date.now();
    }

    firestoreDb.collection('bikes_types')
        .doc(uid)
        .set({
            dataUpdate
        })
        .then((doc) => {
            let response = {
                message: 'Bike Type updated successfully',
                result: doc.id
            };
            send(res, 201, response)
        })
        .catch(error => {
            console.error('[Firestore Error]', error)
            send(res, 500, {
                message: error,
                status: 1
            })
        });
}

/**
 * Delete a bike type entry from «firestore» the id of this one it's taken from body request
 *
 * @param req
 * @param res
 */
function remove (req, res) {
    let { uid } = req.body;
    firestoreDb.collection('bikes_types')
        .doc(uid)
        .delete()
        .then(() => {
            send(res, 200, {
                message: 'Bike Type successfully deleted',
                result:0
            });
        })
        .catch(error => {
            console.error('[Firestore Error]', error)
            send(res, 500, {
                message: error,
                status: 1
            })
        });
}

export default polka()
    .use(json())
    .get('/', get)
    .post('/', create)
    .put('/', update)
    .delete('/', remove);
