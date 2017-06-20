import { post } from './getPostMethods';


const follow = (followerId, followingId, callback) => {
  let followObj = { followerId, followingId };
  post('/followers/new', followObj, callback);
}

const isFollowing = (followerId, followingId, callback) => {
  let checkFollowing = { followerId, followingId };
  post('/followers/is_following', checkFollowing, callback)
}


export { follow, isFollowing };
