import express from 'express';

import devices from '../controllers/devices';
//import auth from '../../controllers/auth';

const routes = express.Router({ mergeParams: true })

//routes.use(auth.verifyToken);

/**
 * @swagger
 * /devices:
 *   get:
 *     tags:
 *       - Devices
 *     description: Returns all devices
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of devices
 *         schema:
 *           $ref: '#/definitions/device'
 */
routes.route('/')
  .get(devices.list)
  .post(devices.create)

routes.route('/:id')
  .get(devices.read)
  .put(devices.update)
  .delete(devices.delete)

module.exports = routes;