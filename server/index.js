const PORT = process.env.PORT || 5000;
const server = require("./server.js");

const init = async () => {
  try {
    server.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}/`);
    });
  } catch (err) {
    console.log(`[ERROR] Error in launching server:`, err);
  }
};

init();
