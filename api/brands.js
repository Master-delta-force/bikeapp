import polka from 'polka';
import send from '@polka/send-type';
import { json } from 'body-parser';
import firebase from './firebase';

const firestoreDb = firebase.firestore();

/**
 * Retrieves all information from brands collection
 *
 * @param req
 * @param res
 */
function get (req, res) {
    let brands = [];
    firestoreDb.collection('brands').get()
        .then((snapshot) => {
            snapshot.forEach((doc) => {
                brands.push(doc.data());
            });
            send(res, 200, brands)
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
 * Insert information about new brand in «firestore»
 *
 * @param req
 * @param res
 */
function create (req, res) {
    let brandInfo = {
        ...req.body,
    }
    firestoreDb
        .collection('brands')
        .add(brandInfo)
        .then((doc) => {
            let response = {
                message: 'Brand registered successfully',
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
    }

    firestoreDb.collection('brands')
        .doc(uid)
        .set({
            dataUpdate
        })
        .then((doc) => {
            let response = {
                message: 'Brand updated successfully',
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
 * Delete a brand entry from «firestore» the id of this one it's taken from body request
 *
 * @param req
 * @param res
 */
function remove (req, res) {
    let { uid } = req.body;
    firestoreDb.collection('brands')
        .doc(uid)
        .delete()
        .then(() => {
            send(res, 200, {
                message: 'Brand successfully deleted',
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
