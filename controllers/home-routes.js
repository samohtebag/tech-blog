const router = require('express').Router();
const sequelize = require('../config/connection');
const {
    Post,
    User,
    Comment
} = require('../models');
const comment = require('../models/Comment');
const user = require('../models/User');

router.get('/', (req, res) => {
    console.log(req.session);

    Post.findAll({
        attributes: [
            'id',
            'title',
            'created_at',
            'post_content'
        ],
        include: [
            {
                model: Comment,
                attributes: [
                    'id', 
                    'comment_text', 
                    'post_id', 
                    'user_id', 
                    'created_at'
                ],
                include: {
                    model: User,
                    attributes: [
                        'username', 
                        'github'
                    ]
                }
            },
            {
                model: User,
                attributes: [
                    'username', 
                    'github'
                ]
            }
        ]
    })

    .then(dbPostData => {
        const posts = dbPostData.map(post => post.get({
            plain: true
        }));
        res.render('homepage', {
            posts,
            loggedIn: req.session.loggedIn
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/LOGIN', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    
    res.render('login');
});

router.get('/SIGNUP', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('signup');
  });

  router.get('/post/:id', (req, res) => {
    Post.findOne({
      where: {
        id: req.params.id
      },
      attributes: [
        'id',
        'title',
        'created_at',
        'post_content'
      ],
      include: [
        {
          model: Comment,
          attributes: [
              'id', 
              'comment_text', 
              'post_id', 
              'user_id', 
              'created_at'
            ],
          include: {
            model: User,
            attributes: [
                'username', 
                'github'
            ]
          }
        },
        {
          model: User,
          attributes: [
              'username', 
              'github'
            ]
        }
      ]
    })
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No posts for this ID!' });
          return;
        }
  
          const post = dbPostData.get({ plain: true });
  
        
        res.render('single-post', {
            post,
            loggedIn: req.session.loggedIn
          });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

module.exports = router;