// const express = require('express');
// const router = express.Router();
// const { Task, Employee } = require('../database/models');

// // helper function so we don't need to wrap our
// // handler functions in try-catch blocks;
// // the async handler will catch any errors and pass
// // them to the error-handling middleware (defined in app.js)
// const ash = require('express-async-handler');

// /** GET ALL TaskS: then/catch */
// // router.get('/', function(req, res, next) {
// //   Task.findAll({include: [Employee]})
// //     .then(Tasks => res.status(200).json(Tasks))
// //     .catch(err => next(err));
// // });

// /** GET ALL TaskS: async/await */
// // router.get('/', async (req, res, next) => {
// //   try {
// //     let Tasks = await Task.findAll({include: [Employee]});
// //     res.status(200).json(Tasks);
// //   } catch(err) {
// //     next(err);
// //   }
// // });

// /** GET ALL TaskS: express-async-handler (ash) */
// // automatically catches any error and sends to middleware
// // same as using try/catch and calling next(error)
// router.get('/', ash(async(req, res) => {
//   //{include: [Employee]}
//   let Tasks = await Task.findAll();
//   res.status(200).json(Tasks);
// }));

// /** GET Task BY ID */
// router.get('/:id', ash(async(req, res) => {
//   let Task = await Task.findByPk(req.params.id, {include: [Employee]});
//   res.status(200).json(Task);
// }));

// /** ADD NEW Task */
// router.post('/', function(req, res, next) {
//   Task.create(req.body)
//     .then(createdTask => res.status(200).json(createdTask))
//     .catch(err => next(err));
// });

// /** DELETE Task */
// router.delete('/:id', function(req, res, next) {
//   Task.destroy({
//     where: {
//       id: req.params.id
//     }
//   })
//     .then(() => res.status(200).json("Deleted a task!"))
//     .catch(err => next(err));
// });

// /******************* EDIT *********************/

// router.put('/:id', ash(async(req, res) => {
//   await Task.update(req.body,
//         { where: {id: req.params.id} }
//   );
//   let Task = await Task.findByPk(req.params.id);
//   res.status(201).json(Task);
// }));

// // Export our router, so that it can be imported to construct our apiRouter;
// module.exports = router;