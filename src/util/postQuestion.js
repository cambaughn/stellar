import { post } from './getPostMethods';


const postQuestion = (question, callback) => {
  post('/questions/new', question, callback);
}


export { postQuestion };
