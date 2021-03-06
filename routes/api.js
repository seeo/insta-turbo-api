// Full Documentation - https://www.turbo360.co/docs
const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()

/*  This is a sample API route. */

router.get('/:resource', (req, res) => {
	res.json({
		confirmation: 'success',
		resource: req.params.resource,
		query: req.query // from the url query string
	})
})

/* tested that the route works, able to render JSON with POST method */
/*  */

router.post('/signup', function (req, res) {
    // console.log(req.body);
    turbo
        .create('user', req.body)
        .then(data => {
            res.json({
                confirmation: 'success',
                data: data
            });
        })
        .catch(err => {
            res.json({
                confirmation: 'fail',
                message: err.message
            });
        });
});

router.post('/login', function (req, res) {
    // console.log(req.body);
    turbo
        .login(req.body)
        .then(data => {
            res.json({
                confirmation: 'success',
                data: data
            });
        })
        .catch(err => {
            res.json({
                confirmation: 'fail',
                message: err.message
            });
        });
});

router.post('/users/:id/photo', (req, res) => {
    // const userId = req.params.id;
    // console.log("req.params", req.params.user.data);
    console.log("userId", req.params.id);
});

router.post('/post', (req, res) => {
    res.json({
        confirmation: 'success',
        resource: req.params.resource,
        query: req.query // from the url query string
    })
})

router.get('/:resource/:id', (req, res) => {
	res.json({
		confirmation: 'success',
		resource: req.params.resource,
		id: req.params.id,
		query: req.query // from the url query string
	})
})



module.exports = router
