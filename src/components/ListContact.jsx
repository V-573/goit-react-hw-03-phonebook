const ListContact = ({contacts, onDeleteContact}) => {
    
    const handleDelete = (id) => {
        
        onDeleteContact(id)
    };


    return (

        <>
        
        
         <ul>
                {contacts.map((contact) => (
              
              <li key={contact.id}>{contact.name}: {contact.number} <button onClick={()=>handleDelete(contact.id)} style={{borderRadius:'5px'}}> Delete</button></li>
              
                    
                )
                )
                }
          </ul>
          
        
        
        </>




    )
    





}

export default ListContact;