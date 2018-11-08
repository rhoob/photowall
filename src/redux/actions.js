import {database} from '../database/config'

export function startAddingPost(post) {
    return (dispatch) => {
        return database.ref('posts').update({[post.id]: post}).then(() => {
            dispatch(addPost(post))
        }).catch((error) => {
            console.log(error)
        })
    }
}

export function startLoadingPost() {
    return(dispatch) => { 
        return database.ref('posts').once('value').then((snapshot) => {
            let posts =[]
            snapshot.forEach((childSnapshot) => {
                posts.push(childSnapshot.val())
            })
            dispatch(loadPost(posts))
        }).catch((error) => {
            console.log(error)
        })
    }
}

export function startRemovingPost(index, id) {

    const updates = {
        [`posts/${id}`]: null,
        [`comments/${id}`]: null
       }
       
    console.log("startRemovingPost")
    return(dispatch) => {
        return database.ref().update(updates).then(() => {
            dispatch(removePost(index))
        }).catch((error) => {
            console.log(error)
        })
    }
}

export function startAddingComment(comment, postId) {
    console.log("startAddingComment")
    return (dispatch) => {
        return database.ref('comments/'+postId).push(comment).then(() => {
            dispatch(addComment(comment, postId))
        }).catch((error) => {
            console.log(error)
        })
    }
}

export function startLoadingComments() {
    return(dispatch) => { 
        return database.ref('comments').once('value').then((snapshot) => {
            let comments ={}
            snapshot.forEach((childSnapshot) => {
                comments[childSnapshot.key] = Object.values(childSnapshot.val())
            })
            console.log(comments)
            dispatch(loadComments(comments))
        }).catch((error) => {
            console.log(error)
        })
    }
}


export function removePost(index){
    return{
        type: 'REMOVE_POST',
        index
    }
}
export function addPost(post) {
    return {
        type: 'ADD_POST',
        post
    }
}
    
export function addComment(comment, postId) {
    console.log("addComment")
    return {
        type: 'ADD_COMMENT',
        comment,
        postId
    }
}

export function loadComments(comments) {
    return {
        type: 'LOAD_COMMENTS',
        comments
    }
}

export function loadPost(posts) {
    return {
        type: 'LOAD_POSTS',
        posts
    }
}

//adding post