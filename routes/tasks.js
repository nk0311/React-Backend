const express = require('express');
const router = express.Router();
const { Task, Employee } = require('../database/models');

// helper function so we don't need to wrap our
// handler functions in try-catch blocks;
// the async handler will catch any errors and pass
// them to the error-handling middleware (defined in app.js)
const ash = require('express-async-handler');

/** GET ALL COURSES: then/catch */
// router.get('/', function(req, res, next) {
//   Course.findAll({include: [Instructor]})
//     .then(courses => res.status(200).json(courses))
//     .catch(err => next(err));
// });

/** GET ALL COURSES: async/await */
// router.get('/', async (req, res, next) => {
//   try {
//     let courses = await Course.findAll({include: [Instructor]});
//     res.status(200).json(courses);
//   } catch(err) {
//     next(err);
//   }
// });

/** GET ALL COURSES: express-async-handler (ash) */
// automatically catches any error and sends to middleware
// same as using try/catch and calling next(error)
router.get('/job', ash(async(req, res) => {
  //{include: [Instructor]}
  let tasks = await Task.findAll( {attributes: ['Description', 'Priority_level', 'Completion_status']});
  res.status(200).json(tasks);
}));

/** GET COURSE BY ID */
router.get('/:id', ash(async(req, res) => {
  let task = await Task.findByPk(req.params.id, {include: [Employee]});
  res.status(200).json(task);
}));

/** ADD NEW COURSE */
router.post('/', function(req, res, next) {
  Task.create(req.body)
    .then(createdTask => res.status(200).json(createdTask))
    .catch(err => next(err));
});

/** DELETE COURSE */
router.delete('/:id', function(req, res, next) {
  Task.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(() => res.status(200).json("Deleted a course!"))
    .catch(err => next(err));
});

/******************* EDIT *********************/

router.put('/:id', ash(async(req, res) => {
  await Task.update(req.body,
        { where: {id: req.params.id} }
  );
  let task = await Task.findByPk(req.params.id);
  res.status(201).json(task);
}));

// Export our router, so that it can be imported to construct our apiRouter;
module.exports = router;