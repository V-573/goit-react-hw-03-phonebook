const Contacts= ( {handleSubmit, handleNameChange, value,value2, handleNumbersChange})=>{


    return (


        <form onSubmit={handleSubmit} className="formStyle">
            
            <input
              type="text"
              name="name"
              value={value}
              onChange={handleNameChange}
              pattern="^[a-zA-Zа]+$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              autoComplete="off"
            />


<input
  type="tel"
                name="number"
                value={value2}
                onChange={handleNumbersChange}
  //pattern="\+?\d{1,4}[-.\s]?\(?\\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"

  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/>




            <button className="submitBtn" type="submit">
              Add contact
            </button>
          </form>



) 
    
}

export default Contacts;