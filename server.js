const express = require('express');
const PORT = process.env.PORT || 4321;
const app = express();

app.use(express.static(__dirname + '/public'));

app.listen(PORT, () => {
  console.log(`server started on http://localhost:${PORT}`);
});
