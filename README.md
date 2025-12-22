This is a dog collection items page. You can create, edit and delete dogs.
You can create by clicking on the NavBar and edit or delete by clicking in the card's three dots.

Techstack:
- Frontend: next.js + wagmi + rainbow kit
- Backend: node.js + postgressql

The frontend is made in next.js and talks to the backend server through a REST API. When a dog is created, the frontend stores the filename of the image of the dog in the database, to be able to recover the image which is stored in the filesystem. 

Running Locally:
- Clone the repository
- To run the frontend: yarn dev
- To run the backend: node server.js
- You will need a postgres container in docker : docker run --name postgres-db -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres

Running with Docker:
The project has a docker compose file that can be run from the root directory in a docker environment.

Run: docker compose up
In docker three containers will pop up: frontend, backend and database.
Open Localhost:3000 in your browser to see the landing page.

Stuff that I would love to add:
- Being able to mint an NFT into your wallet of any dog of the collection.
- Make a game where there are fake dog breeds that you can delete when you find one, and receive tokens for it. 

Stuff that needs to be better:
- Control form input should be better for different image extensions and qualities.
- Add unit tests for both frontend and backend.
- Improve error handling and user feedback messages.
- Implement proper validation for all API endpoints.
- Add logging for debugging purposes.
- Optimize database queries for better performance.
- Add pagination for better performance with large collections.














