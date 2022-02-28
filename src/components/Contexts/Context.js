import React, { useEffect, useState } from "react";

export const Context  = React.createContext();

export const ContextProvider = ({children}) => {

  const [posts,setPosts] = useState([
    {id:0,name:"qoy", email:"email.vom", mobile:"009988", department:"saredas"},
    {id:1,name:"qqeqeoy", email:"eadmail.vom", mobile:"00249988", department:"saewfdas"},
    {id:2,name:"qweqwe", email:"easdmail.vom", mobile:"002349988", department:"sa23das"},
    {id:3,name:"qweq", email:"emaadil.vom", mobile:"009923488", department:"sadaes"},
    {id:4,name:"qoasday", email:"emaiadl.vom", mobile:"00249988", department:"sadass"},
  ])
  const [oldPosts,setOldPosts] = useState([])

  
  useEffect(() => {
    if(localStorage.getItem('posts') === null){
      localStorage.setItem('posts',JSON.stringify(posts))
    }else{
      setPosts(JSON.parse(localStorage.getItem('posts')))
    }
  },[])
  useEffect(() => {
    setOldPosts(posts)
    localStorage.setItem('posts',JSON.stringify(posts))
  },[posts])



  return(
    <Context.Provider value={{posts,oldPosts,setPosts,setOldPosts}}>
      {children}
    </Context.Provider>
  )
}