FROM react

WORKDIR /code-react

COPY *.json /code-react/

RUN npm install

COPY . /code-react/

EXPOSE 3001

CMD ["npm", "start"]
