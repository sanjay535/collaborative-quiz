const express = require('express');
const Handlebars = require('hbs');
const socketIO = require('socket.io');
const http = require('http');

const PORT = process.env.PORT || 4321;
const app = express();

app.use('/', express.static(__dirname + '/public'));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

// const server = http.Server(app);
const server = http.createServer(app);
const io = socketIO(server);
const questions = [
  {
    question: 'Which of the following is the correct name of React.js?',
    id: 1,
    option1: {
      desc: 'React',
      vote: 3,
    },
    option2: {
      desc: 'React.js',
      vote: 9,
    },
    option3: {
      desc: 'ReactJS',
      vote: 11,
    },
    option4: {
      desc: 'All of the above',
      vote: 3,
    },
  },
  {
    question: 'Which of the following are the advantages of React.js?',
    id: 2,
    option1: {
      desc: `React.js can increase the application's performance with Virtual DOM.`,
      vote: 5,
    },
    option2: {
      desc: 'React.js is easy to integrate with other frameworks such as Angular, BackboneJS since it is only a view library.',
      vote: 2,
    },
    option3: {
      desc: 'React.js can render both on client and server side.',
      vote: 1,
    },
    option4: {
      desc: 'All of the above',
      vote: 6,
    },
  },
  {
    question: 'Which of the following is not a disadvantage of React.js?',
    id: 3,
    option1: {
      desc: `React.js has only a view layer. We have put your code for Ajax requests, events and so on.`,
      vote: 10,
    },
    option2: {
      desc: 'The library of React.js is pretty large.',
      vote: 12,
    },
    option3: {
      desc: 'The JSX in React.js makes code easy to read and write.',
      vote: 9,
    },
    option4: {
      desc: 'The learning curve can be steep in React.js.',
      vote: 8,
    },
  },
  {
    question:
      'Which of the following option is correct in the case of the Babel?',
    id: 4,
    option1: {
      desc: `Babel is a Compiler.`,
      vote: 11,
    },
    option2: {
      desc: 'Babel is a Transpilar.',
      vote: 7,
    },
    option3: {
      desc: 'None of the above.',
      vote: 6,
    },
    option4: {
      desc: 'Both A and B are correct.',
      vote: 6,
    },
  },
];

function middileware(req, res, next) {
  req.questions = questions;
  next();
}

io.on('connection', (socket) => {
  console.log('connected', socket.id);
  socket.on('answer', (data) => {
    console.log(data);

    questions[data.ques - 1].option1.vote =
      questions[data.ques - 1].option1.vote + 1;
    console.log(questions);
  });
});

// Handlebars helper
Handlebars.registerHelper('percentage', function (vote) {
  // console.log('vote=', vote);
  // console.log(totalVote);
  const result = ((vote * 100) / 12).toFixed(0);
  // console.log(result);
  return result;
});

app.get('/', middileware, (req, res) => {
  res.render('index', {
    questions: req.questions,
    totalVote: 12,
  });
});

app.get('/about', (req, res) => {
  res.render('about', { list: [1, 2, 3, 4, 5], val: 14 });
});

server.listen(PORT, () => {
  console.log(`server started on http://localhost:${PORT}`);
});
