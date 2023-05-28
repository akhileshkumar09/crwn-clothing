import React from 'react'
import { MenuItem } from '../menu-item.component';
import './directory.styles.scss'

class Directory extends React.Component{

    constructor(){
        super(); 

        this.state ={
            sections:[{
                title : 'hats',
                imageUrl : 'https://images.unsplash.com/photo-1514673645677-5162aa89f8d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGdpcmwlMjBpbiUyMGElMjBoYXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60',
                id: 1
             },
             {
                title : 'jackets',
                imageUrl : 'https://images.unsplash.com/photo-1516346241100-e3e3b2744d51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGdpcmwlMjBpbiUyMGElMjBqYWNrZXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60',
                id : 2
             },
             {
                title : 'sneakers',
                imageUrl : 'https://images.unsplash.com/photo-1518816208858-d68bc07cdb99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=469&q=80',
                id : 3
             },
             {
                title : 'women',
                imageUrl : 'https://images.unsplash.com/photo-1579507554711-7319a627aa5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
                size: 'large',
                id : 4
             },
             {
                title : 'men',
                imageUrl : 'https://images.unsplash.com/photo-1612462767153-e8fd5ef189f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80',
                size: 'large', 
                id : 5
             }
            ]
        }
    }

    render(){
         return (
            <div className='directory-menu'>
               { this.state.sections.map(({title, imageUrl, id, size}) => (
                    <MenuItem key={id} title ={title} imageUrl ={imageUrl} size={size}/>
                ))}
            </div> 
         )
    }
}

export default Directory