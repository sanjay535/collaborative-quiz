const express = require('express');
const PORT = process.env.PORT || 4321;
const app = express();

// app.use(express.static(__dirname + '/public'));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
  const questions = [
    {
      question: 'How are you?',
      id: 1,
      option1: {
        desc: 'fine',
        vote: 0,
      },
      option2: {
        desc: 'mood off',
        vote: 0,
      },
      option3: {
        desc: 'lazzy',
        vote: 0,
      },
      option4: {
        desc: 'feeling boring',
        vote: 0,
      },
    },
    {
      question: 'what is in your mind going on?',
      id: 2,
      option1: {
        desc: 'looking some one',
        vote: 0,
      },
      option2: {
        desc: 'getting treating in sense',
        vote: 0,
      },
      option3: {
        desc: 'battel going',
        vote: 0,
      },
      option4: {
        desc: 'gaming with friend',
        vote: 0,
      },
    },
  ];
  const a = [{ val: 1 }, { val: 2 }];
  res.render('index', { questions: questions });
});

app.listen(PORT, () => {
  console.log(`server started on http://localhost:${PORT}`);
});
