/**
 * @swagger
 * /api/food/getFood:
 *  get:
 *      description: responses
 *      tags: [Food]
 *      responses:
 *          200:
 *              description: success
 */

/**
 * @swagger
 * /api/user/list:
 *  get:
 *      description: responses
 *      tags: [User]
 *      parameters:
 *      - in: header
 *        name: token
 *      responses:
 *          200:
 *              description: success
 */

/**
 * @swagger
 * /api/user/create:
 *  post:
 *      description: responses
 *      tags: [User]
 *      responses:
 *          200:
 *              description: success
 */

/**
 * @swagger
 * /api/user/{user_id}:
 *  delete:
 *      description: responses
 *      tags: [User]
 *      responses:
 *          200:
 *              description: success
 */

/**
 * @swagger
 * /api/user/update/{user_id}:
 *  put:
 *      description: responses
 *      tags: [User]
 *      parameters:
 *      - in: path
 *        name: user_id
 *      - in: body
 *        name: user
 *        schema:
 *           type: object
 *           properties:
 *             full_name:
 *               type: string
 *             email:
 *               type: string
 *             pass_word:
 *               type: string
 *             dien_thoai:
 *               type: string
 *      responses:
 *          200:
 *              description: res
 */
