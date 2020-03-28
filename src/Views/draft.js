if (this.state.title) {      
    this.setState(({ exercises, title }) => 
    ({        
        exercises: [  ...exercises,  
            { title, id: Date.now()          
            }        
        ],        
        title: ''      
    })
    )   
 }