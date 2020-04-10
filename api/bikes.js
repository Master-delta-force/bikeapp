import polka from 'polka';
import send from '@polka/send-type';
import { json } from 'body-parser';
import firebase from './firebase';

const firestoreDb = firebase.firestore();

/**
 * Retrieves all information from bikes collection
 *
 * @param req
 * @param res
 */
function get (req, res) {
    let bikes = [];
    firestoreDb.collection('bikes').get()
        .then((snapshot) => {
            snapshot.forEach((doc) => {
                bikes.push(doc.data());
            });
            send(res, 200, bikes)
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
 * Get all information about the bike with id taken from URL params
 *
 * @param req
 * @param res
 */
function getById (req, res) {
    let { id } = req.params;

    firestoreDb.collection('bikes')
        .doc(id)
        .get()
        .then(doc => {
            if (!doc.exists)
                send(res, 404, {
                    message: 'Not Found',
                    result: 0
                });
            send(res, 200, doc.data());
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
 * Insert information about new bike in «firestore»
 *
 * @param req
 * @param res
 */
function create (req, res) {
    let bikeInfo = {
        ...req.body,
        created_at: Date.now()
    }
    firestoreDb
        .collection('bikes')
        .add(bikeInfo)
        .then(() => {
            let response = {
                message: 'Bike registered successfully',
                result: 0
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
        throw new Error('uid filed is required');
    } else {
        delete dataUpdate.uid;
        dataUpdate.updated_at = Date.now();
    }

    firestoreDb.collection('bikes')
        .doc(uid)
        .set({
            dataUpdate
        })
        .then(doc => {
            send(res, 200, {
                message: 'Bike successfully updated',
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

/**
 * Delete a bike entry from «firestore» the id of this one it's taken from body request
 *
 * @param req
 * @param res
 */
function remove (req, res) {
    let { uid } = req.body;
    firestoreDb.collection('bikes')
        .doc(uid)
        .delete()
        .then(() => {
            send(res, 200, {
                message: 'Bike successfully deleted',
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
    .get('/:id', getById)
    .post('/', create)
    .put('/', update)
    .delete('/', remove);
