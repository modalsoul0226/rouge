FROM node:latest

RUN git config --global user.email "modalsoul0226@gmail.com"
RUN git config --global user.name "modalsoul0226"

# install global dependencies
RUN yarn global add gatsby-cli
