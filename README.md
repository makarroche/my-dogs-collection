This is a dog collection items page. You can create, edit and delete dogs.

Techstack:
- Frontend: next.js + wagmi + rainbow kit
- Backend: node.js + postgressql

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
- Being able to mint into your wallet any dog of the collection.
- Make a game where there are fake dog breeds that you can delete when you find, and receive tokens for it. 

Stuff that needs to be better:
- Control form inputs better for different image extensions and qualities.