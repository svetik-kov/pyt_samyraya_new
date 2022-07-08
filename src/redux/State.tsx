let RenderTree=()=>{console.log('hello')}

type messagesType = {
    id: number
    message: string
}
type dialogsType = {
    id: number
    name: string
}
type postsType = {
    id: number
    message: string
    likesCount: number
}
export type ProfilePageType = {
    posts: Array<postsType>
    dialogs: Array<dialogsType>
    newMessagePost:string
}
export type MessagePage={
    messages:Array<messagesType>
}
type SidebarType={}
export  type RootStateType={
    ProfilePage:ProfilePageType
    MessagePage:MessagePage
    Sidebar:SidebarType
}
let State:RootStateType = {
    ProfilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 14},
            {id: 2, message: 'It is my first post!!!', likesCount: 30},
            {id: 3, message: 'It is my second post!!!', likesCount: 130},
        ],
        dialogs: [
            {id: 1, name: 'Nina'},
            {id: 2, name: 'Natasha'},
            {id: 3, name: 'Tanya'},
            {id: 4, name: 'Sveta'},
            {id: 5, name: 'Zlata'},
            {id: 6, name: 'Ira'},
            {id: 7, name: 'Marina'},
            {id: 8, name: 'Yulya'},
        ],
        newMessagePost:''
    },
    MessagePage: {
        messages: [
            {id: 1, message: 'Hello'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Hi!'},
            {id: 4, message: 'Yo!'},
            {id: 5, message: 'Yo!!!'},
        ]
    },
    Sidebar: {}
}

export  const addPost=(newMessage:string)=>{

    let newPost={
        id:new Date().getTime(),
        message: newMessage,
        likesCount:0
    }
    State.ProfilePage.posts.push(newPost)
    RenderTree()
}

export  const changeNewText =(newText:string)=>{
    debugger
    State.ProfilePage.newMessagePost=newText
    RenderTree()
}
export const subscribe=(callBack:()=>void)=>{
    RenderTree=callBack
}


export default State