const FindContacts = ({handleFilterChange}) => {
   
   
   
    return (
        <>
       <h4>Find contacts by name </h4>
            <input type="text"
                id="find"
                name="find"
                placeholder="Find contact"
                 onChange={handleFilterChange} // Agrega el manejador de cambios
    
            
            />
            

        </>

   ) 



}


export default FindContacts;