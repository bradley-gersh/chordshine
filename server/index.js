const PORT = 5000;
const server = require("./server.js");

const init = async () => {
  try {
    server.listen(PORT, () => {
      console.log(`Server listening on http://localhost:${PORT}/`);
    });
  } catch (err) {
    console.log(`[ERROR] Error in launching server:`, err);
  }
};

init();
