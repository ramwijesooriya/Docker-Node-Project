# Get the base image
FROM node:20-alpine

#Set the working directory
WORKDIR /app

#Copy the package.json file
COPY package*.json ./

#install the dependencies
RUN npm install

#COPY THE source code
COPY . .

#Expose the port
EXPOSE  500

#Run the application
CMD ["npm", "start"]