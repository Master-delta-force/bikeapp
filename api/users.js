import polka from 'polka';
import send from '@polka/send-type';
import { json } from 'body-parser';
import firebase from './firebase';

const firestoreDb = firebase.firestore();

/**
 * Retrieves all information from users collection
 *
 * @param req
 * @param res
 */
function get (req, res) {
    let users = [];
    firestoreDb.collection('users').get()
        .then((snapshot) => {
            snapshot.forEach((doc) => {
                users.push(doc.data());
            });
            send(res, 200, users)
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
 * Get all information about the user with id taken from URL params
 *
 * @param req
 * @param res
 */
function getById (req, res) {
    let { id } = req.params;

    firestoreDb.collection('users')
        .doc(id)
        .get()
        .then(doc => {
            if (!doc.exists)
                send(res, 404, {
                    message: `User ID not found: ${id}` ,
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
 * Insert information about new user in «firestore»
 *
 * @param req
 * @param res
 */
function create (req, res) {
    let userInfo = {
        ...req.body,
        created_at: Date.now()
    }
    firestoreDb
        .collection('users')
        .add(userInfo)
        .then((doc) => {
            let response = {
                message: 'User registered successfully',
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

    firestoreDb.collection('users')
        .doc(uid)
        .set({
            dataUpdate
        })
        .then((doc) => {
            let response = {
                message: 'User updated successfully',
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
 * Delete a user entry from «firestore» the id of this one it's taken from body request
 *
 * @param req
 * @param res
 */
function remove (req, res) {
    let { uid } = req.body;
    firestoreDb.collection('users')
        .doc(uid)
        .delete()
        .then(() => {
            send(res, 200, {
                message: 'User successfully deleted',
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
